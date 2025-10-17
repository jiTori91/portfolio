// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#fff'); //첫번째 불켜
    $('.btn1').css('width','160px'); // 버튼의 너비 증가
    $(".btn1").addClass('on');
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link'+ cnt +' .visual_text_1').delay(1300).animate({top:400, opacity:1},'slow');
    $('.gallery .link'+ cnt +' .visual_text_2').delay(3000).animate({top:480, opacity:1},'slow');
 
    if(cnt === 1){ // link1일 때만
    setTimeout(function(){
        $('.gallery .link1 .visual_text_2').addClass('spacing-anim');

        // 1.5초 후 클래스 제거 (다음 전환 때 다시 적용할 수 있도록)
        setTimeout(function(){
            $('.gallery .link1 .visual_text_2').removeClass('spacing-anim');
        }, 1500);

    }, 3600); // animate 시작 지연과 동일하게 맞춤
  }

    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
     $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
     //$('.gallery li:eq('+ (cnt-1) +')').fadeIn('slow');
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
      $('.mbutton').css('background','#fff'); //버튼불다꺼!!
      $('.mbutton').css('width','10px'); // 버튼 원래의 너비
      $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');
      $('.btn'+cnt).css('background','#fff');//자신만 불켜
      $('.btn'+cnt).css('width','160px');    

      $('.gallery li .visual_text_1').css('top',210).css('opacity',0);
      $('.gallery li .visual_text_2').css('top',230).css('opacity',0);
      $('.gallery .link'+ cnt +' .visual_text_1').delay(1300).animate({top:400, opacity:1},'slow');
      $('.gallery .link'+ cnt +' .visual_text_2').delay(3000).animate({top:480, opacity:1},'slow');

      if (cnt === 1) { // link1일 때만
      setTimeout(function(){
          $('.gallery .link1 .visual_text_2').addClass('spacing-anim');
          setTimeout(function(){
              $('.gallery .link1 .visual_text_2').removeClass('spacing-anim');
          }, 1500);
      }, 3600); 
    }

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 6000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 6000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(){  //각각의 버튼 클릭시
	     //var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.


      var ind = $(this).index('.mbutton');  // 0+1 1+1 2+1 3+1 4+1
      cnt = ind+1;  //해당 버튼 클릭시 index번호 + 1 -> cnt로 반환
		  // if($(this).is('.btn1')){  //첫번째 버튼 클릭??
			// 	 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  // }else if($(this).is('.btn2')){  //두번째 버튼 클릭??
			// 	 cnt=2; 
		  // }else if($(this).is('.btn3')){ 
			// 	 cnt=3; 
		  // }else if($(this).is('.btn4')){
			// 	 cnt=4; 
		  // }else if($(this).is('.btn5')){
			// 	 cnt=5; 
		  // } 

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }

            $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');
      $('.mbutton').css('background','#fff'); //버튼 모두불꺼
      $('.mbutton').css('width','10px');
      $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','160px');
      
      $('.gallery li .visual_text_1').css('top',210).css('opacity',0);
      $('.gallery li .visual_text_2').css('top',230).css('opacity',0);
      $('.gallery .link'+ cnt +' .visual_text_1').delay(1300).animate({top:400, opacity:1},'slow');
      $('.gallery .link'+ cnt +' .visual_text_2').delay(3000).animate({top:480, opacity:1},'slow');

      if(cnt === 1){ // link1일 때만
          setTimeout(function(){
              $('.gallery .link1 .visual_text_2').addClass('spacing-anim');

              // 1.5초 후 클래스 제거 (다음 전환 때 다시 적용할 수 있도록)
              setTimeout(function(){
                  $('.gallery .link1 .visual_text_2').removeClass('spacing-anim');
              }, 1500);

          }, 3600); // animate 시작 지연과 동일하게 맞춤
      }

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 6000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<i class="fa-solid fa-pause"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<i class="fa-solid fa-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   //중지상태로 변경
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 6000); //play버튼 클릭시  부활
		   $(this).html('<i class="fa-solid fa-pause"></i>');
		   onoff=true;   //동작상태로 변경
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){  //왼쪽/오른쪽 버튼을 클릭하면

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가  1 2 3 4 5 ~ 1 2 3 4 5
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소 5 4 3 2 1 ~ 5 4 3 2 1
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').fadeOut(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        

      $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');

    $('.mbutton').css('background','#fff'); //버튼 모두불꺼
    $('.mbutton').css('width','10px');
    $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','160px');

    $('.gallery li .visual_text_1').css('top',210).css('opacity',0);
    $('.gallery li .visual_text_2').css('top',310).css('opacity',0);
    $('.gallery .link'+ cnt +' .visual_text_1').delay(1300).animate({top:400, opacity:1},'slow');
    $('.gallery .link'+ cnt +' .visual_text_2').delay(3000).animate({top:480, opacity:1},'slow');
    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }
      if(cnt === 1){ // link1일 때만
          setTimeout(function(){
              $('.gallery .link1 .visual_text_2').addClass('spacing-anim');

              // 1.5초 후 클래스 제거 (다음 전환 때 다시 적용할 수 있도록)
              setTimeout(function(){
                  $('.gallery .link1 .visual_text_2').removeClass('spacing-anim');
              }, 1500);

          }, 3600); // animate 시작 지연과 동일하게 맞춤
      }
    timeonoff= setInterval( moveg , 6000); //부활

    if(onoff==false){ //타이머가 중지상태면...
      onoff=true; //동작 상태로 만든다
      $('.ps').html('<i class="fa-solid fa-pause"></i>');
    }
  });


});




