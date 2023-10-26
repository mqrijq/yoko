import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
const dva = () => {
    const swiper = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',    
        loop: true,
        speed: 400,
        autoplay: {
            delay: 1000, 
            // disableOnInteraction: false, 
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination-custom2',
        },
    
        navigation: {
          nextEl: null,
          prevEl: null,
        },  
    });
}

export default dva

