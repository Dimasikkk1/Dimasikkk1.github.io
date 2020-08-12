(function() {
    $(document).ready(function(){
        $('.bvi-show').css('display', 'none');
        
        setInterval(function() {
            var el = document.querySelector(".bvi-open");
            var sel = el.getAttribute("style");
          
            if (sel == 'display: none;') {
                $('.bvi-show').css('display', 'block');
                $('.bvi-panel-close').addClass('nav-link');
            }
            else {
                $('.bvi-show').css('display', 'none');
                $('.bvi-panel-close').removeClass('nav-link');
            }
          }, 1000);
    });
})();