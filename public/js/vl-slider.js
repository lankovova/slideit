'use sctrict';
var $;
var Vlslider = (function () {
    // private dragStartPos: number;
    function Vlslider(slider) {
        var _this = this;
        this.slider = slider.find('.slider');
        this.slides = this.slider.find('.slides');
        this.slide = this.slides.find('.slide');
        this.drag = false;
        this.slidesAmount = this.slide.length;
        this.currentSlide = 0;
        // Init slider size
        this.setSize();
        // Click to slide left
        this.slider.find('#left').click(function () { _this.slideLeft(); });
        // Click to slide right
        this.slider.find('#right').click(function () { _this.slideRight(); });
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
    Vlslider.prototype.setSize = function () {
        this.slides.width(this.slider.width() * this.slide.length);
        this.slide.width(this.slider.width());
    };
    // TODO: Drag moving
    // Move slider to cursor offset
    Vlslider.prototype.slideToCursor = function (offset) {
        // let prevMargin = parseInt(this.slides.css("margin-left"));
        // console.log(prevMargin);
        // this.slides.css({ 'margin-left': offset - this.dragStartPos });
    };
    // Slide to destination slide
    Vlslider.prototype.slideTo = function (destinationSlide) {
        this.slides.animate({ 'margin-left': -this.slider.width() * destinationSlide }, 500);
        this.currentSlide = destinationSlide;
    };
    // Slide left
    Vlslider.prototype.slideLeft = function () {
        this.currentSlide === 0 ? this.slideTo(this.slidesAmount - 1) : this.slideTo(this.currentSlide - 1);
    };
    // Slide right
    Vlslider.prototype.slideRight = function () {
        this.currentSlide === this.slidesAmount - 1 ? this.slideTo(0) : this.slideTo(this.currentSlide + 1);
    };
    return Vlslider;
}());
