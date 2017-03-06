$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll > 150) {
        $('#navbg').addClass('navbg').removeClass('positionabsolute');
        $('#logo').removeClass('none');
        $('#navtext a, i').removeClass('white').addClass('black');
    } else {
    	$('#navbg').removeClass('navbg').addClass('positionabsolute');
    	$('#logo').addClass('none');
    	$('#navtext a, i').addClass('white').removeClass('black');
    }
});