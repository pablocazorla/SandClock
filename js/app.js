// SandClock

SandClock = function($) {
	"use strict";

	var $window = $(window),
		$canvas = $('#clock-canvas'),
		canvas = $canvas[0],
		ctx = canvas.getContext('2d'),

		setCanvasSize = function(){
			$canvas.width($window.width());
			$canvas.height($window.height());
		};













		// $window.resize(function(){
		// 	if(){
				
		// 	}
		// });


};

jQuery(document).ready(function() {
	SandClock(jQuery);
});

// window.addEventListener("orientationchange", function() {
// 	// Announce the new orientation number
// 	console.log(screen.orientation.angle);
// }, false);

// console.log(screen.orientation.angle);