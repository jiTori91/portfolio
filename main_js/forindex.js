var memo = [
    {title: '클라우스 메켈레 &#38; 파리 오케스트라', 
    Date: '2025년 06월 14일 &#38; 2025년 06월 15일',
    Descript: '경이로운 두 아티스트,<br>지휘자 클라우스 메켈레와 피아니스트 임윤찬<br>그리고 이들과 완벽한 호흡을 자랑하는 파리 오케스트라의 연주를 통해<br>아름다운 낭만주의 음악의 극치를 관객여러분들께 선물하고자 합니다.',
    imgsrc: 'content2_plannedEvent1-1.jpg'},
    {title: '스위스 로망드 오케스트라 & 양인모', 
    Date: '2025년 07월 05일 &#38; 2025년 07월 06일',
    Descript: '유럽을 대표하는 관현악단스위스 로마드 오케스트라와<br> 파가니니와 시벨리우스 국제 콩쿠르 동시 석권에 빛나는 양인모가 <br>펼치게 될 호연을 여러분들께 선사합니다. ',
    imgsrc: 'content2_plannedEvent2.jpg'},
    {title: '요나스 카우프만 오페라 콘서트', 
    Date: '2025년 03월 07일',
    Descript: '수식어가 필요없는 우리 시대의 최고의 테너, <br>요나스 카우프만이 10년만의 내한 무대로 한국을 찾으며 <br>결코 놓칠 수 없는가곡과 오페라를 아우르는 방대한 음악의 성찬을 차린다.',
    imgsrc: 'content2_plannedEvent4.jpg'}
];

memo[0].title, memo[0].Date, memo[0].Descript, memo[0].imgsrc

var ind = 0; // 인덱스 
var total = memo.length; // 배열 개수

  function conchange(){ // 방향키 클릭 시 생성되는 태그
      $('.plannedEvent .img_box img').attr('src','./main_images/'+memo[ind].imgsrc).hide().fadeIn('fast');

      $('.plannedEvent .img_box dt').html(memo[ind].title); // 태그 생성
      $('.plannedEvent .img_box dd:nth-of-type(1)').html(memo[ind].Date);
      $('.plannedEvent .img_box dd:nth-of-type(2)').html(memo[ind].Descript);
      $('.plannedEvent .cont2_arrow .text').text( (ind+1)+'/'+total); // 개수 리스트
  }

  $('.plannedEvent .prev').click(function(e){ 
      e.preventDefault();
      ind--; 
      if(ind==-1)ind=2;
      conchange(); // 입력한 함수 호출 > 그대로 출력
      
  });
  $('.plannedEvent .next').click(function(e){ 
      e.preventDefault();
      
      ind++; // 0 1 2 0 1 2 0 1 2
      if(ind==total)ind=0;
      conchange(); // 입력한 함수 호출 > 그대로 출력
      
  });




// notice content5_noticeAlll content4_Left

    var cont5L = document.getElementsByClassName("content5_Left")[0];
    cont5L.addEventListener("click", function(){window.location.href = "https://jitori91.mycafe24.com/gb/bbs/board.php?bo_table=notice&wr_id=18";
    
});