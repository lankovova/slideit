'use strict';

$(function () {

	var firstSlider = new SimpleSlider($('.first-slider-wrapper'));
	var secondSlider = new SimpleSlider($('.second-slider-wrapper'));
});

// Constructor for SimpleSlider class
function SimpleSlider(userWrap) {
	var _this = this;
	var drag = false;

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
		_this.slideLeft();
	});

	// Slide right
	this.slider.find('#right').click(function () {
		_this.slideRight();
	});

	// Mouse drag events
	this.slider.mousedown(function() {
		drag = true;
	});
	this.slider.mousemove(function(e) {
		if (drag) {
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			console.log("x: " + x, "y: " + y);
		}
	});
	this.slider.mouseup(function() {
		drag = false;
	});
	this.slider.mouseleave(function() {
		drag = false;
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
	// Slide left function
	slideLeft: function slideLeft(destinationSlide) {
		this.currentSlide === 0 ? this.slideTo(this.amountOfSlides - 1) : this.slideTo(this.currentSlide - 1);
	},
	// Slide right function
	slideRight: function slideRight(destinationSlide) {
		this.currentSlide === this.amountOfSlides - 1 ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
	},
	// Resize slider
	setSize: function setSize() {
		this.slides.width(this.slider.width() * this.slide.length);
		this.slide.width(this.slider.width());
	}
};
