class Vlslider {
	constructor(slider) {
		this.slider = slider.find('.slider');
		this.slides = this.slider.find('.slides');
		this.slide = this.slides.find('.slide');

		this.slidesAmount = this.slide.length;
		this.currentSlide = 0;

		// Init slider size
		this.setSize();
		// Click to slide left
		this.slider.find('#left').click(() => this.slideLeft());
		// Click to slide right
		this.slider.find('#right').click(() => this.slideRight());

		// Adaptive sizing
		$(window).resize(() => {
			this.setSize();
			this.slides.css({ 'margin-left': -this.slider.width() * this.currentSlide });
		});

		// Drag functionality
		// this.drag = false;
		// this.prevMargin = 0;

		// this.draggingEvents();
	}

	// Resize slider
	setSize() {
		this.slides.width(this.slider.width() * this.slide.length);
		this.slide.width(this.slider.width());
	}

	// TODO: Slide if enough draged
	// TODO: Prevent sliding to empty space
	// Move slider to cursor offset
	slideToCursor(offset) {
		this.slides.css({ 'margin-left': this.prevMargin + offset - this.dragStartPos });
	}

	// Slide to destination slide
	slideTo(destinationSlide) {
		this.slides.css({ 'margin-left': -this.slider.width() * destinationSlide });
		this.currentSlide = destinationSlide;
	}
	// Slide left
	slideLeft() {
		(this.currentSlide === 0) ? this.slideTo(this.slidesAmount - 1) : this.slideTo(this.currentSlide - 1);
	}
	// Slide right
	slideRight() {
		(this.currentSlide === (this.slidesAmount - 1)) ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
	}

	// TODO: Implement this shit
	draggingEvents() {
		// Mouse drag events
		this.slider.mousedown(event => {
			this.drag = true;
			this.dragStartPos = event.pageX - this.slider.offset().left;
		});
		this.slider.mousemove(event => {
			if (this.drag) {
				let x = event.pageX - this.slider.offset().left;
				this.slideToCursor(x);
			}
		});
		this.slider.mouseup(() => {
			this.drag = false;
			this.prevMargin = parseInt(this.slides.css("margin-left"));
		});
		this.slider.mouseleave(() => {
			this.drag = false;
			this.prevMargin = parseInt(this.slides.css("margin-left"));
		});
	}
}
