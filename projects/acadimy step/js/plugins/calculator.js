(function() {
    var teacher = 500,
        course = 0.5,
        city = 3,
        intensity = 72;

    $(document).ready(function(){
        $('#calcform').on('change', ':input', function(){
            var id = '#'+$(this).attr('id');

            switch ('#'+$(this).attr('id')) {
                case '#inputTeacherType':
                    teacher = $(id).val();
                    break;
                case '#inputCouseType':
                    course = $(id).val();
                    break;
                case '#inputCity':
                    city = $(id).val();
                    break;
                case '#inputIntensity':
                    intensity = $(id).val();
                    break;
            }

            $('#outputPrice').text((teacher * course * city * intensity).toLocaleString() + ' руб.');
        });

        $('#outputPrice').text((teacher * course * city * intensity).toLocaleString() + ' руб.');
    });
})();