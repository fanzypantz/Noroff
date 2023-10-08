$( document ).ready(function() {
    $(".faq-container").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        let $this = $(this);

        if ( !$this.hasClass('open') ) {
            $this.find('.faq-title').css("transform", "translate(-50%, -50%) rotate(0)");
            $this.animate({
                height: '500px',
            }, 250, function() {
                $this.find('.faq-text').fadeIn("fast");
                $this.addClass('open');
            });
        } else {
            let height = null;
            if ($(window).width() > 775) {
                $this.find('.faq-title').css("transform", "translate(-50%, -50%) rotate(-5deg)");
            }
            console.log($(window).width());
            if ($(window).width() > 583) {
                height = '75px';
            } else {
                height = '150px'
            }
            $this.find('.faq-text').fadeOut("fast");
            $this.animate({
                height: height,
            }, 250, function() {
                $this.removeClass('open');
            });
        }
    });
});
