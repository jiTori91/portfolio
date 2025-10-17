
$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    
    var scroll = $(window).scrollTop();  
           
    if(scroll>600){
    $('.scale_img').css('transition','transform 1s ease-in-out').addClass('show')
    }
    
    //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);
        else if(scroll<=600){
            $('.scale_img').css('transition','transform .3s ease-out').removeClass('show')

        }
});
