$(function() {


    // 回到顶部
    $("#topcontrol").children().mouseover(function() {
        $(this).addClass("go_up_h")
        $(this).mouseleave(function() {
            $(this).removeClass("go_up_h");
        })
    })
    $("#topcontrol").children().click(function() {
        if ($(window).scrollTop() > 0) {
            $("html,body").stop().animate({ scrollTop: 0 }, 600);
        }
    })
    if($(window).width() <  767) {
        $(".mod-list").children("li").addClass("menu_3")
    }else{
        $(".mod-list").children("li").removeClass("menu_3")
    }

    // 响应式判断,设备判断哪
    if($(window).width() <  767) {
        $(".menu_level").click(function() {
            $(this).parent().siblings().children("ul").hide();
            $(this).siblings("ul").toggle();
            $(this).siblings("ul").children("li").children("a").click(function() {
                $(this).siblings("ul").toggle();
            })
        })
        $(".item-102.deeper.parent.menu_3").click(function() {
            console.log($(this));
            $(this).addClass("opens")
        })
    }else{
            // 二级菜单
            $(".head_top .deeper").mouseover(function() {
                $(".menu_show").show();
                $(".menu_show .container").show();
                $(".menu_show .container .nav-child").html($(this).children("ul").html());
                $(".menu_show").mouseleave(function() {
                    $(".menu_show").hide();
                    $(".menu_show .container").hide();
                })
                // 字体变色
                $(this).children("a").css("color","rgb(50, 125, 241)")
                $(this).mouseleave(function() {
                    $(this).children("a").css("color","rgb(255, 255, 255)")
                })
    })
        $(".mod-list").children("li").removeClass("menu_3")
    }
})
function listenResize() {
    if($(window).width() <  767) {
        $(".mod-list").children("li").addClass("menu_3")
        $(".menu_show").css("display","none");
        $("li.deeper").click(function() {
            console.log($(this));
            $(this).children("ul").css("display","block")
        })
    }else{
            // 二级菜单
            $(".head_top .deeper").mouseover(function() {
                $(".menu_show").show();
                $(".menu_show .container").show();
                $(".menu_show .container .nav-child").html($(this).children("ul").html());
                $(".menu_show").mouseleave(function() {
                    $(".menu_show").hide();
                    $(".menu_show .container").hide();
                })
                // 字体变色
                $(this).children("a").css("color","rgb(50, 125, 241)")
                $(this).mouseleave(function() {
                    $(this).children("a").css("color","rgb(255, 255, 255)")
                })
    })
        $(".mod-list").children("li").removeClass("menu_3")
    }
}
listenResize()

$(window).resize( function  () {           //当浏览器大小变化时
    listenResize();
});