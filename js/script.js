let ChangeTour = $('.main_btna'),
    GetConsultation = $('.main_btn'),
    ButtonsCall = [$('.main_btna'), $('.main_btn'), $('nav > ul > li:eq(1) > a')],
    Close_btn = $('.close');

ButtonsCall.forEach(function(button){
 OpenModal(button);
});
// OpenModal(ChangeTour);

function OpenModal(button) {
    button.on('click', () => {
        // $('.overlay').fadein();
        $(".overlay").fadeIn(1000, () => {
            $('.overlay').css('display', 'block');
        });

        $(".modal").slideDown(1000, () => {
            $('.modal').css('display', 'block');
        });


    });
}


Close_btn.on('click', () => {

    $(".overlay").fadeOut(1000, () => {
        $('.overlay').css('display', 'none');
    });

    $(".modal").slideUp(1000, () => {
        $('.modal').css('display', 'none');
    });
});