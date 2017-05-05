var slider,
	controls,
	leftControl,
	rightControl,
	slides,
	slide,
	amountOfSlides,
	currentSlide;

$(function() {

	slider = $('.slider');
	initSlider(slider);

});

$(window).resize(function() {
	slides.width(slider.width() * slide.length);
	slide.width(slider.width());
});

function initSlider(slider) {
	controls = slider.find('.controls');
	leftControl = controls.find('#left');
	rightControl = controls.find('#right');
	slides = slider.find('.slides');
	slide = slides.find('.slide');

	amountOfSlides = slide.length;
	currentSlide = 0;

	// Sizing slider components
	slides.width(slider.width() * slide.length);
	slide.width(slider.width());

	leftControl.click(function() {
		(currentSlide === 0) ? slideTo(amountOfSlides - 1) : slideTo(currentSlide - 1);
	});

	rightControl.click(function() {
		(currentSlide === amountOfSlides - 1) ? slideTo(0) : slideTo(currentSlide + 1);
	});
}

function slideTo(destinationSlide) {
	slides.css({'margin-left': -slider.width() * destinationSlide});
	currentSlide = destinationSlide;
}
