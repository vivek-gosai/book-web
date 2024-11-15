window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(40,65);
    $("#num2").countMe(30, 30);
    $("#num3").countMe(40, 50);
    $("#num4").countMe(100,200);
}

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $("header").addClass('heder-top');
    }
    else {
        $("header").removeClass('heder-top');
    }
});

$(window).on('load', function(){
    $('.loader').delay('4000').fadeOut('fast');
})

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.mobile-menu-list').show();
        // console.log('gsggsgs');
    });
    $('.close').click(function(){
        $('.mobile-menu-list').hide();
    });

    new WOW().init();
})