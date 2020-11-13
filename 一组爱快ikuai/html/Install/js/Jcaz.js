$(function () {
    var index = 0;
    $('.chooseBtn').click( function () {
        if ( index % 2 == 0 ) {
            $('.hiddenMod').show();
            index++;
        } else {
            $('.hiddenMod').hide();
            index++;
        }
    })
})