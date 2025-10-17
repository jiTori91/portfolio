 const cursor = document.getElementById('cursor');

 document.addEventListener('mousemove', e => {
   cursor.style.top = e.clientY + 'px';
   cursor.style.left = e.clientX + 'px';
 });
 document.addEventListener('mousedown', e => {

   cursor.classList.remove('cursor_re');
   void cursor.offsetWidth;
   cursor.classList.add('cursor_re');

 const cursorB = document.createElement('div');
   cursorB.classList.add('cursor_B');
   cursorB.style.left = `${e.clientX}px`;
   cursorB.style.top = `${e.clientY}px`;

   document.body.appendChild(cursorB);

   setTimeout(() => {
     cursorB.remove();
   }, 1000);
 });


var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView:1,  //단수 (breakpoints: 의 포인트는 먼저 초기값을 모바일로 두어야 한다.640보다 작을 때)
    spaceBetween: 10,  //단사이 여백
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    // navigation: {    //이전/다음 버튼
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {   //페이지 네이션
      el: '.swiper1 .swiper-pagination',
      //dynamicBullets: true,
      clickable: true,
      //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    // autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
   
  });
  
  var gdata = [ 
    {'title':'assult'},
    {'title':'Skirmisher'},
    {'title':'Recon'},
    {'title':'Controller'},
    {'title':'Support'}
  ];
  var text = document.getElementById('legends_class');
  var output ='';
  
  output ='<p>'+ gdata[0].title +'</p>';
  text.innerHTML = output;
  
  swiper1.on('transitionEnd', function() {
      console.log(swiper1.realIndex);
      var sind = swiper1.realIndex;  // 0~9
      output ='<p>'+ gdata[sind].title +'</p>';
      text.innerHTML = output;
  });
  
  var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
      el: '.swiper2 .swiper-pagination',
      clickable: true,
    },
    centeredSlides: true,
    breakpoints:{
        640 : {   //브라우저가 640이상
        slidesPerView: 2,
        spaceBetween: 10
        },
        768 : {   //브라우저가 768이상
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024 : {  //브라우저가 1024이상
          slidesPerView: 3.5,
          spaceBetween: 20,
          centeredSlides: false,
        },
        1280 : {  //브라우저가 1280이상
          slidesPerView: 3.5,
          spaceBetween: 20
        }
      }
  });
  
