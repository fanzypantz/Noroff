
$(document).ready(function() {

    $('#menu').click(function (e) {

        console.log('click');
        let $this = $(this);
        let $parent = $('#nav');
        console.log($this);
        console.log($parent);

        if (!$this.hasClass('open')) {
            console.log('open');
            $this.addClass('open');
            $parent.fadeIn('slow').css('display', 'flex');
        } else {
            $parent.fadeOut('slow', function () {
                $this.removeClass('open');
            });
        }
    });

});
