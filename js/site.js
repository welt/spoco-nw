(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);
var allMods = $(".module");
var isTouch = function() {
	return ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
};
var isScrolled = $('body').scrollTop() > 0 ? true : false;
var lastScroll = $(document).scrollTop();

if ( isTouch() ) {
	$('html').addClass('is-touch');
} else {
	$('html').addClass('not-touch');
}

function resetMods() {
	allMods.each( function(i, el) {
		var $el = $(el);
		$el.removeClass("come-in");
	});
}; 
	
if ( ! isTouch() && ! isScrolled ) {

   	allMods.each( function(i, el) {
	  var $el = $(el);
	  if ( $el.visible( true ) ) {
	    $el.addClass("already-visible");
	  }
	});
	
    $(window).on( 'scroll', function(event) {
		allMods.each(function(i, el) {
			var $el = $(el);
			if ( $el.visible( true ) ) {
				$el.addClass("come-in");
			}
		});
        var newScroll = $(document).scrollTop();
        if ( newScroll > 100 ) {
        	return;
        }
        //console.log(newScroll);
        var delta = ( newScroll - lastScroll < 0 ) ? 'up' : 'down';
        if ( 'up' === delta ) {
			resetMods();
		}
		//console.log('Going ' + delta);
		lastScroll = newScroll;
    });
    
}

(function( nav, $, undefined ) {

  'use strict';

  // Private variable for this module only
  var $element = $('.js-nav-menu');
  var $trigger = $('.js-nav-trigger');
  var menuOpen = 'nav__menu--show';
  var menuClose = 'nav__menu--hide';

  // Public variable for calling outside this module
  nav.menuState = false;

  // Public Method
  nav.init = function() {

    $trigger.on('click', function(event) {
      event.preventDefault();

      if (nav.menuState) {
        navClose();
      }
      else {
        navOpen();
      }
    });

    $element.addClass(menuClose);
  };

  // Private Methods
  function navOpen() {
    $element.removeClass(menuClose);
    $element.addClass(menuOpen);
    $trigger.attr('aria-hidden', 'false');

    nav.menuState = true;
  }

  function navClose() {
    $element.removeClass(menuOpen);
    $element.addClass(menuClose);
    $trigger.attr('aria-hidden', 'true');

    nav.menuState = false;
  }

}( window.nav = window.nav || {}, jQuery ));

(function(document) {
	'use strict';

	var LightTableFilter = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _filter(row) {
			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('light-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			LightTableFilter.init();
		}
	});

})(document);

$(document).ready( function() {
	window.nav.init();
});
