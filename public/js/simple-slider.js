$(function() {

	var firstSlider = new SimpleSlider($('.first-slider-wrapper'));
	// firstSlider.setSize();

	var secondSlider = new SimpleSlider($('.second-slider-wrapper'));
	// secondSlider.setSize();

});

// Constructor for SimpleSlider class
function SimpleSlider(sliderWrap) {
	this.slider = sliderWrap.find('.slider');
	this.slides = this.slider.find('.slides');
	this.slide = this.slides.find('.slide');

	this.amountOfSlides = this.slide.length;
	this.currentSlide = 0;

	this.setSize();

	this.slider.find('#left').click(() => {
		(this.currentSlide === 0) ? this.slideTo(this.amountOfSlides - 1) : this.slideTo(this.currentSlide - 1);
	});

	this.slider.find('#right').click(() => {
		(this.currentSlide === this.amountOfSlides - 1) ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
	});

	$(window).resize(() => {
		this.setSize();
	});
}

SimpleSlider.prototype = {
	slideTo : function(destinationSlide) {
		this.slides.css({'margin-left': -this.slider.width() * destinationSlide});
		this.currentSlide = destinationSlide;
	},
	setSize : function() {
		console.log(this);
		this.slides.width(this.slider.width() * this.slide.length);
		this.slide.width(this.slider.width());
	}
}


