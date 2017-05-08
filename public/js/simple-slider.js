'use strict';

$(function () {

	var firstSlider = new SimpleSlider($('.first-slider-wrapper'));
	var secondSlider = new SimpleSlider($('.second-slider-wrapper'));
});

// Constructor for SimpleSlider class
function SimpleSlider(userWrap) {
	var _this = this;

	// Slider variables
	this.slider = userWrap.find('.slider');
	this.slides = this.slider.find('.slides');
	this.slide = this.slides.find('.slide');

	this.amountOfSlides = this.slide.length;
	this.currentSlide = 0;

	// Init slider size
	this.setSize();

	// Slide left
	this.slider.find('#left').click(function () {
		_this.currentSlide === 0 ? _this.slideTo(_this.amountOfSlides - 1) : _this.slideTo(_this.currentSlide - 1);
	});

	// Slide right
	this.slider.find('#right').click(function () {
		_this.currentSlide === _this.amountOfSlides - 1 ? _this.slideTo(0) : _this.slideTo(_this.currentSlide + 1);
	});

	// Adaptive sizing
	$(window).resize(function () {
		_this.setSize();
		_this.slideTo(_this.currentSlide);
	});
}

SimpleSlider.prototype = {
	// Slide function
	slideTo: function slideTo(destinationSlide) {
		this.slides.css({ 'margin-left': -this.slider.width() * destinationSlide });
		this.currentSlide = destinationSlide;
	},
	// Resize slider
	setSize: function setSize() {
		this.slides.width(this.slider.width() * this.slide.length);
		this.slide.width(this.slider.width());
	}
};
