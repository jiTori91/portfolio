$(document).ready(function(){

	//변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);
    //$("section").css('height',ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		ht = $(window).height();	
		$("section").height(ht);
	});	

    
	//메뉴 버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index(); // 0 1 2 3
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;	//실제 이동할 거리(스크롤의 top)		
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});
	
    $(window).on("scroll",function(){	 //메뉴 활성화
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		
		/*
		if(scroll>=ht*0 && scroll< ht*1){
			$("#menu li").removeClass();
			$("#menu li").eq(0).addClass("on");
		}
		if(scroll>=ht*1 && scroll< ht*2){
			$("#menu li").removeClass();
			$("#menu li").eq(1).addClass("on");
		}
		if(scroll>=ht*2 && scroll< ht*3){
			$("#menu li").removeClass();
			$("#menu li").eq(2).addClass("on");
		}
		if(scroll>=ht*3 && scroll< ht*4){
			$("#menu li").removeClass();
			$("#menu li").eq(3).addClass("on");
		}
	   */
		
		for(var i=0; i<5;i++){  //해당 스크롤에 위치에 대한 메뉴 활성화
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			};
		}
	});


		//section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel",function(event, delta){    
			    var ind = $(this).index(); // 0 1 2 3
				var cnt = $("section").size()-1; //3
		        //console.log(cnt);
			    console.log(delta);
				//위로휠(+1) , 아래로휠(-1)
            //마우스 휠을 올렸을때	
              if (delta == 1 && ind!=0) { //+1 
                //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
                 var prev = $(this).prev().offset().top;
                 //문서 전체를 prev에 저장된 위치로 이동
                 $("html,body").stop().animate({"scrollTop":prev},'slow');
                 return false;
                //마우스 휠을 내렸을때	 
              }else if (delta == -1 && ind!=cnt) {  //-1
                //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
                 var next = $(this).next().offset().top;
                 //문서 전체를 next에 저장된 위치로 이동
                 $("html,body").stop().animate({"scrollTop":next},'slow');   
                 return false;                                      
              }
			 
    });
    
  




// const talk = [
// 	"<span>안녕!? 처음만나는 사이네!</span>",
// 	"<span>발전 가능성이 무궁무진한 나를 섬에 초대해줘!</span>",
// 	"<span>이웃주민이 되면 뭐든 할 수 있게 될거야</span>",
// 	"<span>날 초대해주겠어?</span>"
// ]
// let sec0index = 0;

// $(function(){
// 	$('#nextbtn').on('click',
// 		function(){
// 			sec0index++
// 			// console.log(sec0index)
// 			if(sec0index >= talk.length){
// 				sec0index = 0;
// 			}
// 		$('#sec0talk').html(talk[sec0index]);
// 		}
// 	);
		
// }); 

const talk = [
	"<span>처음만나는 사이네!</span>",
	"<span>발전 가능성이 무궁무진한 나를 섬에 초대해줄래?</span>",
	"<span>이웃주민이 되면 뭐든 할 수 있게 될거야</span>",
	"<span>날 초대해줄래?</span>"
];
let sec0index = 0;

$('#nextbtn').on('click',
	function(){
		// 인덱스 증가
		sec0index++;
		
		// 대화가 끝났을 때 (sec0index가 talk.length인 4가 되었을 때)
		if (sec0index === talk.length) {
			// 1. 현재 섹션의 인덱스(section0이므로 0)
			const nowsecindex = 0; 
			// 2. 다음 섹션의 스크롤 위치 (ht * 1)
			const nextsectop = ht * (nowsecindex + 1);
			
			// 해당 스크롤 위치값으로 문서를 스르륵 이동 (메뉴 클릭과 동일한 속도 사용)
			$("html,body").stop().animate({"scrollTop":nextsectop}, 1400);
			
			// 인덱스를 초기화하지 않고, 버튼을 비활성화하거나 다음 클릭을 막는 것이 일반적입니다.
			// 여기서는 다음 클릭을 막지 않고, 인덱스를 다시 0으로 초기화하여
			// 사용자가 다시 section0으로 돌아왔을 때 대화가 다시 시작되도록 합니다.
			sec0index = 0;
			
			// 스크롤 이동 후 함수 종료
			return;
		}
		
		// 일반적인 대화 진행 시: 다음 대화 내용을 표시
		$('#sec0talk').html(talk[sec0index]);
	}
);
// ------------------------------------------------------------------


});

