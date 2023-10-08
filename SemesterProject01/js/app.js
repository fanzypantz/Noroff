
$(document).ready(function() {
    let isShowing = true;

    $('#address_map').click(function(e) {
        if (isShowing === true) {
            $('#address').hide('fast');
            $('#address-button').show('fast', function () {
                isShowing = false;
            });

        }
    });

    $('#address-button').click(function(e) {
        if (isShowing === false) {
            $('#address-button').hide('fast');
            $('#address').show('fast', function () {
                isShowing = true;
            });

        }

    });


});
