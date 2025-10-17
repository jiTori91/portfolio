$(document).ready(function(){
    var cnt = $('.content_area .sub1_2TabButton li').size();
    $('.content_area .tab1').show(); // 첫번째 탭 내용만 열어라
    $('.content_area .sub1_2TabButton li:eq(0)'); //첫번째 탭메뉴 활성화
    $('.content_area .sub1_2TabButton li:eq(0) a').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
    $('.content_area .sub1_2TabButton li a').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.sub1_2TabButton li a');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $(".content_area .tab_title").hide(); //모든 탭내용을 안보이게...
          $(".content_area .tab_title:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
          $('.content_area .sub1_2TabButton li a').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });
   

  });

  $(document).ready(function () {
	var article = $('.tab5_table ul .article');  //모든 질문 답변 리스트
	article.find('.table').slideUp(100); // 모든 답변 닫아라
    article.find('.q').find('.chevDown').html('<i class="fas fa-chevron-down"></i>');
    // $('.content_area ul .article').find('.a').slideDown(100);//첫번쨰 답변만 열어
    // $('.content_area ul .article .q').find('span').html('<i class="fas fa-chevron-up"></i>');
	
	$('.tab5_table ul .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.table').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('.q').find('.chevDown').html('<i class="fas fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.table').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('.q').find('.chevDown').html('<i class="fas fa-chevron-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.table').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('.q').find('.chevDown').html('<i class="fas fa-chevron-down"></i>');
        }  
  });
  
  $('.all').toggle(function(e){
    e.preventDefault(); 
    article.find('.table').slideDown(100);
    article.removeClass('hide').addClass('show');
    article.find('.q').find('.chevDown').html('<i class="fas fa-chevron-up"></i>');
    $(this).html('<i class="fa-solid fa-minus"></i>');
    
},function(e){
    e.preventDefault(); 
    article.find('.table').slideUp(100);
    article.removeClass('show').addClass('hide');
    article.find('.q').find('.chevDown').html('<i class="fas fa-chevron-down"></i>');
    $(this).html('<i class="fa-solid fa-plus"></i>');
});
}); 

