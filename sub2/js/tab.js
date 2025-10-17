// JavaScript Document

$(document).ready(function(){
    var cnt = $('.content_area .sub2_4_tap li').size();
    $('.content_area .sub2_4_tap li:eq(0)').show(); 
    $('.sub2_4_tap li:eq(0)');// 첫번째 탭 내용만 열어라
    $('.content_area .sub2_4_tap li:eq(0) a').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
    $('.content_area .sub2_4_tap li a').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.content_area .sub2_4_tap li a');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $(".content_area .sub2_cont4All").hide(); //모든 탭내용을 안보이게...
          $(".content_area .sub2_cont4All:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
          $('.content_area .sub2_4_tap li a').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });
   

  });

