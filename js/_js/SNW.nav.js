var SNW = SNW || {};

(function($, window, undefined) {

  'use strict';
  
	SNW.nav = {
	
		setUp: function() {
			var t = this;
			t.$element = $('.js-nav-menu');
			t.$trigger = $('.js-nav-trigger');
			t.menuOpen = 'nav__menu--show';
			t.menuClose = 'nav__menu--hide';
			t.menuState = false;
		},

		navOpen: function() {
			var t = this;
			t.$element.removeClass(t.menuClose);
			t.$element.addClass(t.menuOpen);
			t.$trigger.attr('aria-hidden', 'false');
			t.menuState = true;
		},

		navClose: function() {
			var t = this;
			t.$element.removeClass(t.menuOpen);
			t.$element.addClass(t.menuClose);
			t.$trigger.attr('aria-hidden', 'true');
			t.menuState = false;
		},

		bindEvents: function() {
			var t = this;
			t.$trigger.on('click', function(event) {
				event.preventDefault();
				if ( t.menuState ) {
					t.navClose();
				} else {
					t.navOpen();
				}
			});
			t.$element.addClass(t.menuClose);
		},		

		fInit: function() {
			var t = this;
			t.setUp();
			t.bindEvents();
		}
	
	}

}(jQuery, this));

