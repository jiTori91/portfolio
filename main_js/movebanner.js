// JavaScript Document

$(document).ready(function() {
   var position=0;  //최초위치
   var movesize=2; //이동 크기
   var timeonoff; //타이머 정보 변수
   
   $('.lotte_Donation ul').after($('.lotte_Donation ul').clone()); //복재
   // $('가져다 놓을 태그').after('기준태그');
   
   function partnerMove(){
        position-=movesize;  // 150씩 감소
    	$('.lotte_Donation_move').css('left',position);
		
		 if(position < -4000){
			   $('.lotte_Donation_move').css('left',-1000);//left값 초기화
			   position=-1000;//변수 초기화
		} 
		
   };

     timeonoff= setInterval(partnerMove, 50);
    
   	$('.lotte_Donation_move').hover(function(){
		clearInterval(timeonoff);//멈춤
	},function(){
		timeonoff= setInterval(partnerMove, 50);	//다시 종작_
	});
	
    
 });