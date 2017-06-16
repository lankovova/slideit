class Vlslider {
	constructor(slider) {
		this.slider = slider.querySelector('.slider');
		this.slidesWrapper = this.slider.querySelector('.slides');
		this.slide = this.slidesWrapper.querySelectorAll('.slide');

		this.slidesAmount = this.slide.length;
		this.currentSlide = 0;

		// Init slider size
		this.setSize();
		// Click to slide left
		this.slider.querySelector('#left').onclick = () => this.slideLeft();
		// Click to slide right
		this.slider.querySelector('#right').onclick = () => this.slideRight();

		// Adaptive sizes
		window.onresize = () => this.setSize();
	}

	// Resize slider
	setSize() {
		this.slidesWrapper.style.width = this.slider.offsetWidth * this.slide.length + 'px';
		this.slide.forEach(slide => slide.style.width = this.slider.offsetWidth + 'px');
		this.slidesWrapper.style.marginLeft = -this.slider.offsetWidth * this.currentSlide + 'px';
	}

	// Slide left
	slideLeft() {
		(this.currentSlide === 0) ? this.slideTo(this.slidesAmount - 1) : this.slideTo(this.currentSlide - 1);
	}
	// Slide right
	slideRight() {
		(this.currentSlide === this.slidesAmount - 1) ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
	}
	// Slide to destination slide
	slideTo(destinationSlide) {
		this.slidesWrapper.style.marginLeft = -this.slider.offsetWidth * destinationSlide + 'px';
		this.currentSlide = destinationSlide;
	}
}
