window.onload = function () {
    document.getElementById('startPage').style.opacity = '0.5';
    document.getElementById('upPage').style.opacity = '0.5';
}
$(function () {
    //tab切换
    var index = 0;
    $('.chooseBtn').click(function () {
        if (index % 2 == 0) {
            $('.hiddenMod').show();
            index++;
        } else {
            $('.hiddenMod').hide();
            index++;
        }
    })

    //分页-按钮组点击事件
    $('#pagesOne').click(function () {
        console.log('page1');
        $("body,html").animate({ scrollTop: 0 }, 100);
        $('.page2').hide();
        $('.page1').show();
        $(this).addClass('avticePage');
        $('#pagesTwo').removeClass('avticePage');
        $('#startPage').css('opacity','0.5');
        $('#upPage').css('opacity','0.5');
        $('#EndPage').css('opacity','1');
        $('#dowmPage').css('opacity','1');
    })
    $('#pagesTwo').click(function () {
        console.log('page2');
        $("body,html").animate({ scrollTop: 0 }, 100);
        $('.page1').hide();
        $('.page2').show();
        $(this).addClass('avticePage');
        $('#pagesOne').removeClass('avticePage');
        $('#startPage').css('opacity','1');
        $('#upPage').css('opacity','1');
        $('#EndPage').css('opacity','0.5');
        $('#dowmPage').css('opacity','0.5');
    })
    $('#upPage').click(function () {
        console.log('page1');
        $("body,html").animate({ scrollTop: 0 }, 100);
        $('.page2').hide();
        $('.page1').show();
        $('#pagesOne').addClass('avticePage');
        $('#pagesTwo').removeClass('avticePage');
        $('#startPage').css('opacity','0.5');
        $('#upPage').css('opacity','0.5');
        $('#EndPage').css('opacity','1');
        $('#dowmPage').css('opacity','1');
    })
    $('#dowmPage').click(function () {
        console.log('page2');
        $("body,html").animate({ scrollTop: 0 }, 100);
        $('.page1').hide();
        $('.page2').show();
        $('#pagesTwo').addClass('avticePage');
        $('#pagesOne').removeClass('avticePage');
        $('#startPage').css('opacity','1');
        $('#upPage').css('opacity','1');
        $('#EndPage').css('opacity','0.5');
        $('#dowmPage').css('opacity','0.5');
    })
    $('#startPage').click(function () {
        console.log('page1');
        $("body,html").animate({ scrollTop: 0 }, 100);
        $('.page2').hide();
        $('.page1').show();
        $('#pagesOne').addClass('avticePage');
        $('#pagesTwo').removeClass('avticePage');
        $('#startPage').css('opacity','0.5');
        $('#upPage').css('opacity','0.5');
        $('#EndPage').css('opacity','1');
        $('#dowmPage').css('opacity','1');
    })
    $('#EndPage').click(function () {
        console.log('page2');
        $("body,html").animate({ scrollTop: 0 }, 100);
        $('.page1').hide();
        $('.page2').show();
        $('#pagesTwo').addClass('avticePage');
        $('#pagesOne').removeClass('avticePage');
        $('#startPage').css('opacity','1');
        $('#upPage').css('opacity','1');
        $('#EndPage').css('opacity','0.5');
        $('#dowmPage').css('opacity','0.5');
    })
    //分页-按钮组禁用事件
    // if ($('#pagesOne').hasClass('avticePage')) {//失效（逻辑原因，未解决）
    //     $('#startPage').css('opacity', '0.5');
    //     $('#upPage').css('opacity', '0.5');
    //     $('#startPage').click(function () {
    //         console.log('no check');
    //         return false;
    //     });
    //     $('#upPage').click(function () {
    //         console.log('no check');
    //         return false;
    //     });
    // }
    // if ($('#pagesTwo').hasClass('acticePage')) {
    //     $('#EndPage').css('opacity', '0.5');
    //     $('#dowmPage').css('opacity', '0.5');
    //     $('#EndPage').click(function () {
    //         console.log('no check');
    //         return false;
    //     });
    //     $('#dowmPage').click(function () {
    //         console.log('no check');
    //         return false;
    //     });
    // }
    //第一次逻辑优化
    // if ( $('#startPage').css('display','none') ) {
    //     console.log(true);
    //     $('#pagesTwo').click(function () {
    //         console.log('page2');
    //         $("body,html").animate({ scrollTop: 0 }, 100);
    //         $('.pageMobile1').hide();
    //         $('.pageMobile2').show();
    //         $(this).addClass('avticePage');
    //         $('#pagesOne').removeClass('avticePage');
    //         $('#upPage').css('opacity','1');
    //         $('#dowmPage').css('opacity','0.5');
    //     })
    //     //应该清空该按钮的所有操作
    // }



})