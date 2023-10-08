
$(document).ready(function() {

    $('#mobile-button').click(function (e) {

        console.log('click');
        let $this = $(this);
        let $parent = $('#nav');
        console.log($this);
        console.log($parent);

        if (!$this.hasClass('open')) {
            console.log('open');
            $this.addClass('open');
            $parent.fadeIn('slow');
        } else {
            $parent.fadeOut('slow', function () {
                $this.removeClass('open');
            });
        }
    });

});
