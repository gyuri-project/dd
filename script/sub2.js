$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 4000) {
        $('.logo').addClass('on');
    } else {
        $('.logo').removeClass('on');
    }
});

AOS.init({
    duration: 2500 //aos 나타나는 속도
});