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

		this.slidesAmount = this.slide.length;
		this.currentSlide = 0;

		// Init slider size
		this.setSize();
		// Click to slide left
		this.slider.find('#left').click(function () {
			return _this.slideLeft();
		});
		// Click to slide right
		this.slider.find('#right').click(function () {
			return _this.slideRight();
		});

		// Adaptive sizing
		$(window).resize(function () {
			_this.setSize();
			_this.slides.css({ 'margin-left': -_this.slider.width() * _this.currentSlide });
		});

		// Drag functionality
		// this.drag = false;
		// this.prevMargin = 0;

		// this.draggingEvents();
	}

	// Resize slider


	_createClass(Vlslider, [{
		key: 'setSize',
		value: function setSize() {
			this.slides.width(this.slider.width() * this.slide.length);
			this.slide.width(this.slider.width());
		}

		// TODO: Slide if enough draged
		// TODO: Prevent sliding to empty space
		// Move slider to cursor offset

	}, {
		key: 'slideToCursor',
		value: function slideToCursor(offset) {
			this.slides.css({ 'margin-left': this.prevMargin + offset - this.dragStartPos });
		}

		// Slide to destination slide

	}, {
		key: 'slideTo',
		value: function slideTo(destinationSlide) {
			this.slides.css({ 'margin-left': -this.slider.width() * destinationSlide });
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

		// TODO: Implement this shit

	}, {
		key: 'draggingEvents',
		value: function draggingEvents() {
			var _this2 = this;

			// Mouse drag events
			this.slider.mousedown(function (event) {
				_this2.drag = true;
				_this2.dragStartPos = event.pageX - _this2.slider.offset().left;
			});
			this.slider.mousemove(function (event) {
				if (_this2.drag) {
					var x = event.pageX - _this2.slider.offset().left;
					_this2.slideToCursor(x);
				}
			});
			this.slider.mouseup(function () {
				_this2.drag = false;
				_this2.prevMargin = parseInt(_this2.slides.css("margin-left"));
			});
			this.slider.mouseleave(function () {
				_this2.drag = false;
				_this2.prevMargin = parseInt(_this2.slides.css("margin-left"));
			});
		}
	}]);

	return Vlslider;
}();