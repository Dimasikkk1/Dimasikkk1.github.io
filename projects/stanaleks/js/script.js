(function(){
    $(document).ready(function(){
        var href = document.location.href;
        var pageName = href.substr(href.lastIndexOf('/') + 1);

        function addScript(scripts) {
            for (let i = 0; i < scripts.length; i++) {
                var script = document.createElement('script');
                script.src = 'js/' + scripts[i];
                document.body.appendChild(script);
            }
        }

        addScript([
            'popper.min.js',
            'bootstrap.min.js',
            'jquery.fancybox.min.js'
        ]);
        
        if (pageName == 'portfolio.html' || pageName == 'portfolio.html#') {
            for (let i = 0; i < 14; i++) {
                $('.gallery-container').append('<div class="col-xm-2 m-1 mx-auto"><a class="mb-1" data-fancybox="gallery" href="img/portfolio/'+i+'.jpg"><img class="gallery-img" src="img/portfolio/'+i+'.jpg"></a></div>');
            }
        }

        var pageIndex = $('#navbar').data('current-page');
        $('.nav-link').eq(pageIndex).addClass('active');

        setInterval(function(){
            $('.navbar').css('opacity', $(window).scrollTop() > 0 && !$('.navbar').is(':hover') ? 0.7 : 1);
        }, 100);
        
        if (pageName == 'request.html' || pageName == 'contacts.html') {
            $(':input').inputmask();
    
            $('#submit').click(function(){
                return $('#form-phone').inputmask('isComplete');
            });
        }

        $('#form-phone').keypress(function (e){
            var charCode = (e.which) ? e.which : e.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
        });
    });
})();