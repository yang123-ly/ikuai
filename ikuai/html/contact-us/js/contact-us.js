$(function() {

	function debounce(fn, wait, immediate) {
	    var timeout;
	    return function () {
	        var context = this;
	        var args = arguments;
	        if (timeout) {
	            clearTimeout(timeout);
	        }
	        if (immediate) {
	            var callNow = !timeout;
	            timeout = setTimeout(() => {
	                timeout = null;
	            }, wait)
	            if (callNow) {
	                fn.apply(context, args);
	            }
	            else {
	                timeout = setTimeout(function () {
	                    fn.apply(context, args);
	                }, wait);
	            }
	        }
	    }
	}
	$(window).scroll(debounce(a, 400, 1))
	function a(){
	if($(this).scrollTop()>0){
		$(".go_up").stop().fadeIn()
	}else{
		$(".go_up").stop().hide()
	}
	}
})
