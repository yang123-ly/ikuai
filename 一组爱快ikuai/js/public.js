$(function () {

    // 二级菜单
    $(".head_top .deeper").mouseover(function () {
        $(".menu_show").show();
        $(".menu_show .container").show();
        $(".menu_show .container .nav-child").html($(this).children("ul").html());
        $(".menu_show").mouseleave(function () {
            $(".menu_show").hide();
            $(".menu_show .container").hide();
        })
        // 字体变色
        $(this).children("a").css("color", "rgb(50, 125, 241)")
        $(this).mouseleave(function () {
            $(this).children("a").css("color", "rgb(255, 255, 255)")
        })
    })
    // 回到顶部
    $("#topcontrol").children().mouseover(function () {
        $(this).addClass("go_up_h")
        $(this).mouseleave(function () {
            $(this).removeClass("go_up_h");
        })
    })
    // $("#topcontrol").children().click(function() {
    //     if ($(window).scrollTop() > 0) {
    //         $("html,body").stop().animate({ scrollTop: 0 }, 600);
    //     }
    //     if ($(window).scrollTop() < 0) {
    //         $(this).fadeout(3000);
    //     }
    // })

    // $(window).scroll(function () {
    //     if (scrollTop() > 0) {
    //         $("#topcontrol").fadeIn(3000);
    //     }
    // })
})


$(function () {
    var gotop = $("#topcontrol");
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 600) {
            gotop.fadeIn(1000);
        } else {
            gotop.fadeOut(1000);
        }
    });
    gotop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});