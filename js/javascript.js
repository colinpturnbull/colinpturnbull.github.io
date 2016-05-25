function sayHello() {
   alert("Hello World")
}

$(document).ready(function() {

   $('a').on('click touchend', function(e) {
      var el = $(this);
      var link = el.attr('href');
      window.location = link;
   });

});