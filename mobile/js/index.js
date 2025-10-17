//visual swiper area
    var swiper1 = new Swiper('.swiper1', {
      autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween: 5,  //단사이 여백
      loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      pagination: {   //페이지 네이션
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
      autoplay: {  //자동
        delay: 5000,
        disableOnInteraction: false
      },
      
    });
  

    var swiper2 = new Swiper('.swiper2', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: -15,
        stretch: 290,
        depth: 300,
        modifier: 1,
        slideShadows : false,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }

    });

  

    var swiper3 = new Swiper('.swiper3', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    var gdata = [ 
      {'title':'음악으로 하나 되는 곳', 'engtitle':'Bringing People Together with Music'},
      {'title':'모두를 위한 프로그램', 'engtitle':'Music for All'},
      {'title':'최상의 음향', 'engtitle':'State of the Art Acoustics'}
    ];
    var text = document.getElementById('bS_Txt');
    var output ='';

    output +='<ul>';
    output +='<li>'+ gdata[0].title +'</li>';
    output +='<li>'+ gdata[0].engtitle +'</li>';
    output +='</ul>';  
    text.innerHTML = output;

    swiper3.on('transitionEnd', function() {
        //console.log(swiper.realIndex);
        var sind = swiper3.realIndex;  // 0~9
        
        output ='<ul>';
        output +='<li>'+ gdata[sind].title +'</li>';
        output +='<li>'+ gdata[sind].engtitle +'</li>';
        output +='</ul>';  
        text.innerHTML = output;
    });


      // swiper_tab
    $(document).ready(function() {
      var swiper_tab = new Swiper('.swiper_tab', {
        autoHeight: true,
        speed : 500
      });

      swiper_tab.on('slideChange', function () {
        $(".tabs .active").removeClass('active');
        $(".tabs a").eq(swiper_tab.activeIndex).addClass('active');
      });
      
      $(".tabs a").on('touchstart mousedown', function(e) {
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        
        $(this).addClass('active');

        //swiper.swipeTo($(this).index());					
        swiper_tab.slideTo($(this).index());
      });
      
      $(".tabs a").click(function(e) {
      
        e.preventDefault();
      
      });
   
      var tdata = [ 
          {'title':'세계 최고 수준의 음향 설계 <br><span>나가타 어쿠스틱스</span>', 'engtitle':'&#8220;새로운 감동을 전하는 압도적인 음향&#8221; <br>&#8216;나가타 어쿠스틱스&#8217; 세계 최정상급 음향 장인들이소리의 완벽한 감동을 전합니다.'},
          {'title':'국내 최초로 선보이는 <br><span>빈야드 스타일</span>', 'engtitle':'&#8220;공연의 몰입도를 높여주는 객석&#8221;<br>&#8216;무대를 에워싼 2&#44;036석의 객석이섬세한 감동을 전합니다.'},
          {'title':'<span>라운드형 무대 리프트와</span><br>악기의 제왕 <span>파이프 오르간</span>', 'engtitle':'&#8220;클래식 공연에 최적화된 무대&#8221;<br>5&#44;000여 개 파이프의 풍부한 음색&#44; 무대 리프트&#44;품격 있는 조명이 다채로운 감동을 전합니다.'}
        ];
        var text = document.getElementById('iH_Txt');
        var output ='';

        output +='<dl>';
        output +='<dt>'+ tdata[0].title +'</dt>';
        output +='<dd>'+ tdata[0].engtitle +'</dd>'; 
        output +='</dl>';  
        text.innerHTML = output;

        swiper_tab.on('transitionEnd', function() {
            //console.log(swiper_tab.realIndex);
            var sind = swiper_tab.realIndex;  // 0~9
            
            output ='<dl>';
            output +='<dt>'+ tdata[sind].title +'</dt>';
            output +='<dd>'+ tdata[sind].engtitle +'</dd>';
            output +='</dl>';  
            text.innerHTML = output;
        });
      });


    
 var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
  
});




