$( document ).ready(function() {
    $("#menu-button").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        if ($(window).width() < 940) {
            let $this = $(this);
            let $parent = $this.parents(".header");
            console.log($this);
            console.log($parent);

            if (!$this.hasClass('open')) {
                console.log('Open');
                $this.addClass('open');
                $parent.animate({
                    height: '590',
                }, 250, function () {
                    $parent.find('.nav').fadeIn("fast");
                    $parent.find('.search').css("display", "flex").fadeIn("fast");
                });
            } else {
                console.log('Close');
                $parent.find('.nav').fadeOut("fast");
                $parent.find('.search').fadeOut("fast");
                $parent.animate({
                    height: '75px',
                }, 250, function () {
                    $this.removeClass('open');
                });
            }
        }
    });

    $( window ).resize(function() {
        let $header = $('.header');
        $header.css("height", "75px");
        $header.find('#menu-button').removeClass('open');

        if ($(window).width() < 940) {
            $header.find('.nav').css("display", "none");
            $header.find('.search').css("display", "none");
            $header.find('#menu-button').css("display", "block");
        } else {
            $header.find('.nav').css("display", "flex");
            $header.find('.search').css("display", "flex");
            $header.find('#menu-button').css("display", "none");
        }
    });
});
