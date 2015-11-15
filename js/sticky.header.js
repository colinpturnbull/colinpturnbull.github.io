$(document).ready(function() {
   $(window).scroll(function() {
       
       var headerH = $('.large-12.columns').outerHeight(true);
       console.log(headerH);
//this will calculate header's full height, with borders, margins, paddings
       var scrollVal = $(this).scrollTop();
        if ( scrollVal > headerH ) {
            $('#navbar').addClass('navbar-fixed');
        } else {
            $('#navbar').removeClass('navbar-fixed');
        }
    });
 });