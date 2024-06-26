wow = new WOW(
    {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();


$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 4700) {
        $('.logo').addClass('on');
    } else {
        $('.logo').removeClass('on');
    }
});

// AOS.init({
//     duration: 1200 //aos 나타나는 속도
// });

