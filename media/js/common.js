// const cursor = document.getElementById('cursor');

// document.addEventListener('mousemove', e => {
//   cursor.style.top = e.clientY + 'px';
//   cursor.style.left = e.clientX + 'px';
// });
// document.addEventListener('mousedown', e => {

//   cursor.classList.remove('cursor_re');
//   void cursor.offsetWidth;
//   cursor.classList.add('cursor_re');

// const cursorB = document.createElement('div');
//   cursorB.classList.add('cursor_B');
//   cursorB.style.left = `${e.clientX}px`;
//   cursorB.style.top = `${e.clientY}px`;

//   document.body.appendChild(cursorB);

//   setTimeout(() => {
//     cursorB.remove();
//   }, 1000);
// });
  
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  var win_height =$(window).height();
  var header_height =$('header').height();

 
  if(scroll>win_height){ //300이상의 거리가 발생되면
      $('.top_move').fadeIn('slow');  //top보여라~~~~
  }else{
      $('.top_move').fadeOut('fast');//top안보여라~~~~
  }

  if(scroll>win_height-header_height){ //300이상의 거리가 발생되면
      $('header').css('background','#101010');  //header보여라~~~~
      $('header').css('border-bottom','1px solid #333');  
  }else{
      $('header').css('background','transparent');//top안보여라~~~~
      $('header').css('border-bottom','1px solid transparent');   
  }
});


$('.top_move').click(function(e){
  e.preventDefault();
   //상단으로 스르륵 이동합니다.
  $("html,body").stop().animate({"scrollTop":0},1000); 

});

//반응형 네비게이션 처리

  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    
  $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
      e.preventDefault();
      var documentHeight =  $(document).height(); //전체 페이지의 높이
      $("#gnb").css('height',documentHeight); //gnb의 높이를 전체 페이지 높이와 동일...

     if(op==false){//닫혀잇으면
       $("#gnb").animate({right:0,opacity:1}, 'fast');//메뉴나타남
       $('#headerArea').addClass('mn_open'); //햄버거 메뉴 닫기 효과
       op=true;
     }else{//열려잇으면 메뉴가
       $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
       $('#headerArea').removeClass('mn_open');
       op=false;
     }

  });
  
 
//네비 높이처리
var documentHeight =  $(document).height();
var screenSize = $(window).width(); 
if( screenSize > 1024){ 
   $("#gnb").height('auto');
}else{
   $("#gnb").height(documentHeight);
}


var current=0; // 1(소형테블릿이상) , 0(모바일)
$(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
   var screenSize = $(window).width(); 
   if( screenSize > 1024){ //소형테블릿 이상
     $("#gnb").css({right:0,opacity:1});
     $("#gnb").height('auto');
     current=1;
   }
   if(current==1 && screenSize <= 1024){
      $("#gnb").css({right:'-100%',opacity:0});
      $("#gnb").height(documentHeight);
      current=0;
   }
 }); 



 
 $('.down').click(function(e){
     e.preventDefault();
     screenHeight = $(window).height();
     $('html,body').animate({'scrollTop':screenHeight}, 1000);
 });


