'use sctrict';

var $: any;

class Vlslider {
	private slider: any;
	private slides: any;
	private slide: any;

	private slidesAmount: number;
	private currentSlide: number;
	private drag: boolean;

	public constructor(slider: any) {
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
		this.slider.mousedown(() => {
			this.drag = true;
		});
		this.slider.mousemove((e: any) => {
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
			this.slideTo(this.currentSlide);
		});

		console.log("Vlslider created :)");
	}

	// Resize slider
	private setSize() {
		this.slides.width(this.slider.width() * this.slide.length);
		this.slide.width(this.slider.width());
	}
	private slideToCursor(offset: number) {
		console.log(offset);
		this.slides.css({ 'margin-left': offset });
	}

	// Slide to destination slide
	public slideTo(destinationSlide: number) {
		this.slides.animate({ 'margin-left': -this.slider.width() * destinationSlide }, 500);
		this.currentSlide = destinationSlide;
	}
	// Slide left
	public slideLeft() {
		this.currentSlide === 0 ? this.slideTo(this.slidesAmount - 1) : this.slideTo(this.currentSlide - 1);
	}
	// Slide right
	public slideRight() {
		this.currentSlide === this.slidesAmount - 1 ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
	}


}
