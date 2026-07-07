window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize the general carousels.
    var carousels = bulmaCarousel.attach('.carousel:not(.fig2-carousel)', options);

    // The Fig. 2/Teflon carousel only has two slides; infinite mode clones them
    // and can show the clones on both sides when the media is narrow.
    bulmaCarousel.attach('.fig2-carousel', {
      ...options,
      loop: false,
      infinite: false,
      autoplay: false,
    });
	
    bulmaSlider.attach();

})
