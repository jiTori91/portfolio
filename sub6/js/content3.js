$(function() {
    const scroller = $('.sub6_cont3Tec');
    let isDown = false;
    let startX;
    let scrollLeft;

    // 마우스 누름 이벤트
    scroller.on('mousedown', (e) => {
        isDown = true;
        scroller.addClass('active');
        startX = e.pageX - scroller.offset().left;
        scrollLeft = scroller.scrollLeft();
    });

    // 마우스 떠남/올림 이벤트
    scroller.on('mouseleave mouseup', () => {
        isDown = false;
        scroller.removeClass('active');
    });

    // 마우스 이동 이벤트
    scroller.on('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scroller.offset().left;
        const walk = (x - startX) * 2; // 스크롤 속도 조절
        scroller.scrollLeft(scrollLeft - walk);
    });
});