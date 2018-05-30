$(document).ready(function() {
	slickSlider();
	slickTestimonials();
});

function slickSlider() {

  $('.sliderImages').slick({
	infinite: true,
	dots: true,
	arrows: true
	
  });
}

function slickTestimonials() {

	$('.allTestimonials').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false
	
  });
}