class Vlslider {
	constructor(slider) {
		this.slider = slider.find('.slider');
		this.slides = this.slider.find('.slides');
		this.slide = this.slides.find('.slide');
		this.drag = false;

		this.slidesAmount = this.slide.length;
		this.currentSlide = 0;

		// Init slider size
		this.setSize();
		// Click to slide left
		this.slider.find('#left').click(() => { this.slideLeft(); });
		// Click to slide right
		this.slider.find('#right').click(() => { this.slideRight(); });

		// Mouse drag events
		this.slider.mousedown((e) => {
			this.drag = true;
			// this.dragStartPos = e.pageX - this.slider.offset().left;
		});
		this.slider.mousemove((e) => {
			if (this.drag) {
				let x = e.pageX - this.slider.offset().left;
				this.slideToCursor(x);
			}
		});
		this.slider.mouseup(() => {
			this.drag = false;
		});
		this.slider.mouseleave(() => {
			this.drag = false;
		});

		// Adaptive sizing
		$(window).resize(() => {
			this.setSize();
			this.slides.css({ 'margin-left': -this.slider.width() * this.currentSlide });
		});

		console.log("Vlslider created :)");
	}

	// Resize slider
	setSize() {
		this.slides.width(this.slider.width() * this.slide.length);
		this.slide.width(this.slider.width());
	}
	// TODO: Drag moving
	// Move slider to cursor offset
	slideToCursor(offset) {
		// let prevMargin = parseInt(this.slides.css("margin-left"));
		// console.log(prevMargin);
		// this.slides.css({ 'margin-left': offset - this.dragStartPos });
	}

	// Slide to destination slide
	slideTo(destinationSlide) {
		this.slides.animate({ 'margin-left': -this.slider.width() * destinationSlide }, 500);
		this.currentSlide = destinationSlide;
	}
	// Slide left
	slideLeft() {
		this.currentSlide === 0 ? this.slideTo(this.slidesAmount - 1) : this.slideTo(this.currentSlide - 1);
	}
	// Slide right
	slideRight() {
		this.currentSlide === this.slidesAmount - 1 ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
	}


}
