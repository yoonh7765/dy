const swiper = new Swiper('.swiper-box-1 .swiper', {
  spaceBetween:20,
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-box-1 .swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-box-1 .swiper-button-next',
    prevEl: '.swiper-box-1 .swiper-button-prev',
  },

});
$(document).ready(function(){ var currentPosition = parseInt($(".quickmenu").css("top")); $(window).scroll(function() { var position = $(window).scrollTop(); $(".quickmenu").stop().animate({"top":position+currentPosition+"px"},1000); }); });
AOS.init();