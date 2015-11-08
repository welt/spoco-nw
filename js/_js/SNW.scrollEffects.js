var SNW = SNW || {};

(function($, window, undefined) {

  'use strict';
  
	SNW.scrollEffects = {

		isTouch: ( 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ) ? true : false,

		isScrolled: ( $('body').scrollTop() > 0 ) ? true : false,
		
		setUp: function() { 
			var t = this; 
			var $html = $('html');
			if ( true === t.isTouch ) {
				$html.addClass('is-touch');
			} else {
				$html.addClass('not-touch');
			}
			t.$allMods = $('.module');
			t.$win = $(window);
			t.lastScroll = $(document).scrollTop();
		},

		resetMods: function() {
			var t = this;
			t.$allMods.each( function(i, el) {
				var $el = $(el);
				$el.removeClass('come-in');
			});
		},	

		alreadyVisible: function() {
			var t = this;
			t.$allMods.each( function(i, el) {
				var $el = $(el);
				if ( $el.visible( true ) ) {
					$el.addClass('already-visible');
				}
			});
		},
		
		comeIn: function() {
			var t = this;
			t.$allMods.each(function(i, el) {
				var $el = $(el);
				if ( $el.visible( true ) ) {
					$el.addClass('come-in');
				}
			});
		},
		
		bindEvents: function() {
			var t = this;
			if ( false === t.isTouch && false === t.isScrolled ) {
				t.alreadyVisible();
				t.$win.on( 'scroll', function(event) {
					t.comeIn();
					var newScroll = $(document).scrollTop();
					if ( newScroll > 100 ) {
						return;
					}
					var delta = ( newScroll - t.lastScroll < 0 ) ? 'up' : 'down';
					if ( 'up' === delta ) {
						t.resetMods();
					}
					t.lastScroll = newScroll;
				});
			}
    	},
		
		fInit: function() {
			var t = this;
			t.setUp();
			t.bindEvents();
		}
	
	}

}(jQuery, this));

