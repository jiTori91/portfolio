

//글로벌 네비게이션 처리코드
   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   //var on_off=false;  //false(안오버)  true(오버)
   var up_down = 'up';  //'up비주얼위일때','down'
   
      //  $('#headerArea').mouseenter(function(){
      //     // var scroll = $(window).scrollTop();
      //      $(this).css('background','#fff');
      //      $('.dropdownmenu li a').css('color','#333'); 
      //      //$('#headerArea h1 a').css('color','#333'); 
      //       //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
      //      on_off=true;
      //  });
   
      // $('#headerArea').mouseleave(function(){
      //      var scroll = $(window).scrollTop();  //스크롤의 거리
           
      //      if(scroll<smh-50 ){
      //          $(this).css('background','none').css('border-bottom','none'); 
      //          //$('.dropdownmenu li a').css('color','#333');
      //          //$('#headerArea h1 a').css('color','#333'); 
      //      }else{
      //          $(this).css('background','#fff'); 
      //          $('.dropdownmenu li a').css('color','#333');
      //          $('#headerArea h1 a').css('color','#333');
      //      }
      //     on_off=false;    
      // });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  
           //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh){//스크롤이 비주얼의 높이-header높이 까지 내리면
              // $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
              // $('.dropdownmenu li a').css('color','#333');
              // $('#headerArea h1 a').css('color','#333');
               $('#headerArea .header_inner').addClass('ch');
               $('#headerArea').css('height','100px');
               up_down = 'down';
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              //if(on_off==false){
                   //$('#headerArea').css('background','none').css('border-bottom','none');
                   //$('.dropdownmenu li a').css('color','#fff');
                  // $('#headerArea h1 a').css('color','#fff');
                   $('#headerArea .header_inner').removeClass('ch');
                   $('#headerArea').css('height','180px');
              //}
              up_down = 'up';
           }; 
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          if(up_down == 'up'){
            $('#headerArea').animate({height:380},'fast').clearQueue();
          }else{
            $('#headerArea').animate({height:300},'fast').clearQueue();
          }
          
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          if(up_down == 'up'){
            $('#headerArea').animate({height:180},'fast').clearQueue();
          }else{
            $('#headerArea').animate({height:100},'fast').clearQueue();
          }
          
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','red');
       },function() {
          $('.depth1',this).css('color','#333');
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:380},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:180},'normal').clearQueue();
    });


//상단 top이동 코드

$('.top_move').click(function(e){
   e.preventDefault();
   $('html,body').stop().animate({'scrollTop':0},1000) //상단으로 부드럽게 스크롤 이동

});

$(window).on('scroll',function(){//scroll위치변화생기면
   var scroll = $(window).scrollTop();//scrollTop의 위치를 변수에 담음
   var visual_height = $('.visual').height();
if(scroll>1050){
   $('.top_move').fadeIn('slow');
}else{
   $('.top_move').fadeOut('fast');
}
});

//패밀리 사이트 이동 코드

$('.family .arrow').toggle(function(e){//홀->리스트 보임
   e.preventDefault();
   $('.family .aList').fadeIn('slow');
   $(this).children('span').html('<span class="material-symbols-outlined"> remove </span>');
   $(this).children('span').css('right',' 3px').css( 'top', '0px');
},function(e){//짝->안보임
   e.preventDefault();
   $('.family .aList').fadeOut('fast');
   $(this).children('span').html('<span class="material-symbols-outlined"> add </span>');
   $(this).children('span').css('right',' 3px').css( 'top', '0px');
});


// 검색창 여닫기

$('.pop_onoff').toggle(function(e){
   e.preventDefault();
   $('.total_search_box').fadeIn('slow');

},function(e){
   e.preventDefault();
   $('.total_search_box').fadeOut('fast');
});










