$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 4000) {
        $('.logo').addClass('on');
    } else {
        $('.logo').removeClass('on');
    }
});

AOS.init({
    duration: 1200 //aos 나타나는 속도
});