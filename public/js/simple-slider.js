$(function() {

	var firstSlider = new SimpleSlider($('.first-slider-wrapper'));

	var secondSlider = new SimpleSlider($('.second-slider-wrapper'));

});

// Constructor for SimpleSlider class
function SimpleSlider(userWrap) {
	this.slider = userWrap.find('.slider');
	this.slides = this.slider.find('.slides');
	this.slide = this.slides.find('.slide');

	this.amountOfSlides = this.slide.length;
	this.currentSlide = 0;

	// Init slider size
	this.setSize();

	// Slide left
	this.slider.find('#left').click(() => {
		(this.currentSlide === 0) ? this.slideTo(this.amountOfSlides - 1) : this.slideTo(this.currentSlide - 1);
	});

	// Slide right
	this.slider.find('#right').click(() => {
		(this.currentSlide === this.amountOfSlides - 1) ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
	});

	// Adaptive sizing
	$(window).resize(() => {
		this.setSize();
	});
}

SimpleSlider.prototype = {
	// Slide function
	slideTo : function(destinationSlide) {
		this.slides.css({'margin-left': -this.slider.width() * destinationSlide});
		this.currentSlide = destinationSlide;
	},
	// Resize slider
	setSize : function() {
		this.slides.width(this.slider.width() * this.slide.length);
		this.slide.width(this.slider.width());
	}
}


