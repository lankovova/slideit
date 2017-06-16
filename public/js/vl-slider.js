'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vlslider = function () {
	function Vlslider(slider) {
		var _this = this;

		_classCallCheck(this, Vlslider);

		this.slider = slider.querySelector('.slider');
		this.slidesWrapper = this.slider.querySelector('.slides');
		this.slide = this.slidesWrapper.querySelectorAll('.slide');

		this.slidesAmount = this.slide.length;
		this.currentSlide = 0;

		// Init slider size
		this.setSize();
		// Click to slide left
		this.slider.querySelector('#left').onclick = function () {
			return _this.slideLeft();
		};
		// Click to slide right
		this.slider.querySelector('#right').onclick = function () {
			return _this.slideRight();
		};

		// Adaptive sizes
		window.onresize = function () {
			return _this.setSize();
		};
	}

	// Resize slider


	_createClass(Vlslider, [{
		key: 'setSize',
		value: function setSize() {
			var _this2 = this;

			this.slidesWrapper.style.width = this.slider.offsetWidth * this.slide.length + 'px';
			this.slide.forEach(function (slide) {
				return slide.style.width = _this2.slider.offsetWidth + 'px';
			});
			this.slidesWrapper.style.marginLeft = -this.slider.offsetWidth * this.currentSlide + 'px';
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
		// Slide to destination slide

	}, {
		key: 'slideTo',
		value: function slideTo(destinationSlide) {
			this.slidesWrapper.style.marginLeft = -this.slider.offsetWidth * destinationSlide + 'px';
			this.currentSlide = destinationSlide;
		}
	}]);

	return Vlslider;
}();