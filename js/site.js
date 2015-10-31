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
