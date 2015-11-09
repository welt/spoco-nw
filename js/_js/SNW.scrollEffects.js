var ScrollEffects = (function($, SNW, window) {

	'use strict';

	var isTouch = ( 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ) ? true : false;

	var isScrolled = ( $('body').scrollTop() > 0 ) ? true : false;
	
	var $html = $('html');

	var $allMods = $('.module');
	
	var $win = $(window);
	
	var lastScroll = $(document).scrollTop();
	
	function _setUp() { 
		if ( true === isTouch ) {
			$html.addClass('is-touch');
		} else {
			$html.addClass('not-touch');
		}
	}

	function _resetMods() {
		$allMods.each( function(i, el) {
			var $el = $(el);
			$el.removeClass('come-in');
		});
	}

	function _alreadyVisible() {
		$allMods.each( function(i, el) {
			var $el = $(el);
			if ( $el.visible( true ) ) {
				$el.addClass('already-visible');
			}
		});
	}
	
	function _comeIn() {
		$allMods.each(function(i, el) {
			var $el = $(el);
			if ( $el.visible( true ) ) {
				$el.addClass('come-in');
			}
		});
	}
	
	function _bindEvents() {
	
		if ( false === isTouch && false === isScrolled ) {
		
			_alreadyVisible();
			
			$win.on( 'scroll', function(event) {
				_comeIn();
				var newScroll = $(document).scrollTop();
				if ( newScroll > 100 ) {
					return;
				}
				var delta = ( newScroll - lastScroll < 0 ) ? 'up' : 'down';
				if ( 'up' === delta ) {
					_resetMods();
				}
				lastScroll = newScroll;
			});
			
		}
		
	}
	
	SNW.ScrollEffects = function() {
		_setUp();
		_bindEvents();
	};

	return SNW;

})(jQuery, SNW || {}, window);

