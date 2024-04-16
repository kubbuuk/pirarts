let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
        clickabale :true,
        dynamicBullets : true,
        renderBullet :function(index,classname){
            return '<span class="'+classname +'">'+ (index+1)+'</span>'
        }
    },
    mousewheel: true,
    keyboard: true,
})