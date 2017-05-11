'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vlslider = function () {
	function Vlslider(slider) {
		var _this = this;

		_classCallCheck(this, Vlslider);

		this.slider = slider.find('.slider');
		this.slides = this.slider.find('.slides');
		this.slide = this.slides.find('.slide');
		this.drag = false;

		this.slidesAmount = this.slide.length;
		this.currentSlide = 0;

		// Init slider size
		this.setSize();
		// Click to slide left
		this.slider.find('#left').click(function () {
			_this.slideLeft();
		});
		// Click to slide right
		this.slider.find('#right').click(function () {
			_this.slideRight();
		});

		// Mouse drag events
		this.slider.mousedown(function (e) {
			_this.drag = true;
			// this.dragStartPos = e.pageX - this.slider.offset().left;
		});
		this.slider.mousemove(function (e) {
			if (_this.drag) {
				var x = e.pageX - _this.slider.offset().left;
				_this.slideToCursor(x);
			}
		});
		this.slider.mouseup(function () {
			_this.drag = false;
		});
		this.slider.mouseleave(function () {
			_this.drag = false;
		});

		// Adaptive sizing
		$(window).resize(function () {
			_this.setSize();
			_this.slides.css({ 'margin-left': -_this.slider.width() * _this.currentSlide });
		});

		console.log("Vlslider created :)");
	}

	// Resize slider


	_createClass(Vlslider, [{
		key: 'setSize',
		value: function setSize() {
			this.slides.width(this.slider.width() * this.slide.length);
			this.slide.width(this.slider.width());
		}
		// TODO: Drag moving
		// Move slider to cursor offset

	}, {
		key: 'slideToCursor',
		value: function slideToCursor(offset) {}
		// let prevMargin = parseInt(this.slides.css("margin-left"));
		// console.log(prevMargin);
		// this.slides.css({ 'margin-left': offset - this.dragStartPos });


		// Slide to destination slide

	}, {
		key: 'slideTo',
		value: function slideTo(destinationSlide) {
			this.slides.animate({ 'margin-left': -this.slider.width() * destinationSlide }, 500);
			this.currentSlide = destinationSlide;
		}
		// Slide left

	}, {
		key: 'slideLeft',
		value: function slideLeft() {
			this.currentSlide === 0 ? this.slideTo(this.slidesAmount - 1) : this.slideTo(this.currentSlide - 1);
		}
		// Slide right

	}, {
		key: 'slideRight',
		value: function slideRight() {
			this.currentSlide === this.slidesAmount - 1 ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
		}
	}]);

	return Vlslider;
}();