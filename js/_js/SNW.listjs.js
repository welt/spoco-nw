// list.js config
// http://www.listjs.com/

var SNW = SNW || {};

(function($, window, undefined) {

	'use strict';
  
	if ( ! window.List ) {
		return;
	}
	
	if ( ! $('.order-table').length > 0 ) {
		return;
	}

	var options = {
	  valueNames: [ 'position', 'name', 'points', 'events', 'club', 'category' ]
	};
	
	SNW.list = new List('results', options);
	
})(jQuery, window);
