(function(){
     var navbar;

     $(document).ready(function(){
          navbar = $('.navbar').height();
     });
     
     $('.scroll').click(function(event){
          event.preventDefault();
          //calculate destination place
          var dest = 0;
          if ($(this.hash).offset().top > $(document).height() - $(window).height() + navbar) {
               dest = $(document).height() - $(window).height() + navbar;
          } else {
               dest = $(this.hash).offset().top - navbar;
          }
          //go to destination
          $('html').animate({scrollTop:dest}, 1000, 'swing');
     });
})();