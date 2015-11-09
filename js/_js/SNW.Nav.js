var Nav = (function($, SNW, window) {

	'use strict';
  	
	var $element = $('.js-nav-menu');
	var $trigger = $('.js-nav-trigger');
	var menuOpen = 'nav__menu--show';
	var menuClose = 'nav__menu--hide';
	var menuState = false;

	function _navOpen() {
		$element.removeClass(menuClose);
		$element.addClass(menuOpen);
		$trigger.attr('aria-hidden', 'false');
		menuState = true;
	}

	function _navClose() {
		$element.removeClass(menuOpen);
		$element.addClass(menuClose);
		$trigger.attr('aria-hidden', 'true');
		menuState = false;
	}

	function _bindEvents() {
		$trigger.on('click', function(event) {
			event.preventDefault();
			if ( menuState ) {
				_navClose();
			} else {
				_navOpen();
			}
		});
		$element.addClass(menuClose);
	}		

	SNW.Nav = function() {
		_bindEvents();
	};
	
	return SNW;

})(jQuery, SNW || {}, window);

