(function() {
    $(document).ready(function(){
        $('.header').height($(window).height() - 70);
        
        $(window).on('resize', function(){
            $('.header').height($(window).height() - 70);
        });
        
        $('.dropdown-item').click(function(){
            switch ($(this).text()) {
                case 'Москва':
                    $('#navbarDropdownMenuLink').text('Москва');
                    $('#phone').text('+7(495)-151-19-01');
                    $('#inputCity').val(3).change();
                    $('#addr').text('Москва, м. Киевская, ул. Киевская, д.7, подъезд 7, 6-ой этаж БЦ «Легион III»');
                    $('#timings').html(
                        'Приемная комиссия<br>' +
                        '9:00-18:00<br>' +
                        '+7(495)-151-19-01<br><br>' +
                        'Учебная часть<br>' +
                        '9:00-18:00<br>' + 
                        '+7(495)-132-44-00<br>' +
                        '+7(903)-299-28-29<br>' +
                        '@Itstep_russia');
                    break;
                case 'Санкт-Петербург':
                    $('#navbarDropdownMenuLink').text('Санкт-Петербург');
                    $('#phone').text('+7(812)-407-16-63');
                    $('#inputCity').val(2).change();
                    $('#addr').text('Санкт Петербург, пл. Александра Невского дом 2, лит. Е, БЦ «Москва», 10 этаж, офис приемной 1002 (метро пл. Александра Невского 1 - зеленая ветка)');
                    $('#timings').html(
                        'Приемная комиссия<br>' +
                        '10:00-20:00<br>' +
                        '+7(812)-407-16-63<br>' +
                        'spb@itstep.org<br>' +
                        '+7(981)-241-16-63');
                    break;
                case 'Владивосток':
                    $('#navbarDropdownMenuLink').text('Владивосток');
                    $('#phone').text('+7(999)-202-61-36');
                    $('#inputCity').val(1).change();
                    $('#addr').text('Владивосток, ул. Ленина, 2');
                    $('#timings').html(
                        'Приемная комиссия<br>' +
                        '+7(999)-202-60-55<br>' +
                        '+7(999)-210-20-90<br><br>' +
                        'Учебная часть<br>' +
                        'Пн-Сб 9:00-18:00<br>' + 
                        '+7(999)-202-61-36<br>');
                    break;
                case 'Новосибирск':
                    $('#navbarDropdownMenuLink').text('Новосибирск');
                    $('#phone').text('+7(383)-285-01-85');
                    $('#inputCity').val(1.5).change();
                    $('#addr').text('Новосибирск, ул. Советская 64/1, 3 этаж, 305 кабинет');
                    $('#timings').html(
                        'Приемная комиссия<br>' +
                        'Будни 10:00-20:00<br>' +
                        'Выходные 10:00-16:00<br>' +
                        '+7(383)-285-01-85<br>' +
                        'nsk@itstep.org<br><br>' +
                        'Учебная часть<br>' +
                        'Будни 10:00-20:00<br>' + 
                        'Выходные 10:00-16:00<br>' + 
                        '+7(965)-821-79-01<br>' + 
                        'HR отдел<br>' + 
                        'strebkova@itstep.org<br>' + 
                        '+7(965)-821-79-01<br>');
                    break;
                case 'Ростов-на-Дону':
                    $('#navbarDropdownMenuLink').text('Ростов-на-Дону');
                    $('#phone').text('+7(863)-310-04-05');
                    $('#inputCity').val(1.2).change();
                    $('#addr').text('Ростов-на-Дону, ул. Социалистическая, дом 141, 4 этаж');
                    $('#timings').html(
                        'Приемная комиссия<br>' +
                        'Пн-Пт 9:00-19:00<br>' +
                        'Сб 9:00-18:00<br>' +
                        'Вс выходной на летний период<br>' +
                        '+7(863)-310-04-05<br>' +
                        '+7(938)-122-50-41<br>' +
                        'rostov@itstep.org');
                    break;
            }
        });
    });

    $(':input').inputmask();

    $('#enrollSubmit').click(function(){
        return $('#inputPhone').inputmask('isComplete');
    });

    setInterval(function() {
        var el = document.querySelector(".bvi-open");
        var sel = el.getAttribute("style");
      
        if (sel == 'display: none;') {
            $('.bvi-show').css('display', 'block');
            $('.bvi-panel-close').addClass('nav-item nav-link');
        }
        else {
            $('.bvi-show').css('display', 'none');
            $('.bvi-panel-close').removeClass('nav-item nav-link');
        }
      }, 1000);
})();