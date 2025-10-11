const swiper = new Swiper('.testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el:'.testimonials-pagination',
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
});