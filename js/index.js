// Get the carousel element
var carousel = document.getElementById('testimonial-carousel');

var carouselObj = new bootstrap.Carousel(carousel, {
    interval: 4000,
    ride: true
});




// go to top of page btn
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        document.querySelector('.back-to-top-button').style.display = 'block';
    } else {
        document.querySelector('.back-to-top-button').style.display = 'none';
    }
});