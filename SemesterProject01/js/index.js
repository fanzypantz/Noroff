$(document).ready(function() {
    $currentTarget = null;
    let isAnimating = false;

    $('.text-blob').click(function(e) {
        if (!isAnimating && $currentTarget === null) {
            $currentTarget = $(this);

            isAnimating = true;

            $currentTarget.animate({
                height: '100vh'
            }, '500');

            $('html, body').animate({
                scrollTop: ($currentTarget.offset().top)
            },500 ,function () {
                setTimeout(disableAnimation, 100)
            });

            function disableAnimation() {
                isAnimating = false;
            }
        } else if ($currentTarget !== null && !isAnimating) {
            resetCSS();
        }

    });

    $(window).scroll(function() {
        if (!isAnimating) {
            resetCSS();
        }
    });

    function resetCSS() {
        if ($currentTarget !== null) {

            isAnimating = true;

            $currentTarget.animate({
                height: '300px'
            }, '500', function () {
                setTimeout(disableAnimation, 100)
            });

            function disableAnimation() {
                isAnimating = false;
                $currentTarget = null;
            }

            $currentTarget.removeAttr('style');
        }
    }
});
