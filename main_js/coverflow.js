var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',  //transform 적용
    grabCursor: true,  //아이콘 손모양 변경
    centeredSlides: true,  //중앙 센터
    slidesPerView: 'auto',  //너비고정
    loop: true,   //무한 슬라이드
    coverflowEffect: {
      rotate: -15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });