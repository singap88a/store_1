
var swiper = new Swiper(".sale_sec", {
      
    pagination:{
      el: ".swiper-pagination1",
      dynamicBullests: true,
      clickable: true
    },
    slidesPerView:2,
    spaceBetween:20,

    mousewheel: true,
    keyboard: true,

    autoplay:{
    delay:3000,
    
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  },
  loop:true,
  breakpoints:{
    1600:{
      slidesPerView:5,
      
    },
    1200:{
      slidesPerView:4,
      spaceBetween:30,
    },
    700:{
      slidesPerView:2,
      spaceBetween:15,
    },
    0:{
      slidesPerView:1,
      spaceBetween:20,
    }
  }
  }); 
 