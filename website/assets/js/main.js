$('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('nav-toggle--active');
  });


$elem1 = $('.trainee_image');
// $elem2 = $('.');
var scrollState = 'top';

$(window).scroll(function(){ 
    
    var scrollPos = $(window).scrollTop();

    if( ( scrollPos != 0 ) && ( scrollState === 'top' ) ) {
        $(".trainee_image").css({"transform":"scale(.9)"});
        scrollState = 'scrolled';
    }       
    else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {
        $(".trainee_image").css({"transform":"scale(1)"});
        scrollState = 'top';
    }

});
