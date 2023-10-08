
$( document ).ready(function() {
    let currentProduct = null;

    $(".product").on('click', function(event){
        currentProduct = $(this);
        event.stopPropagation();
        event.stopImmediatePropagation();
        currentProduct.parents(".category").fadeOut("slow", function () {
            let $parent = currentProduct.parents(".big-container").find('.product-details');

            $parent.fadeIn("slow", function () {
                if ($(window).width() < 775) {
                    $parent.get(0).scrollIntoView({
                        behavior: 'smooth'
                    })
                }
            });
        });
    });

    $(".back").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        $(this).parents(".big-container").find('.product-details').fadeOut("slow", function () {
            $(this).parents(".big-container").find('.category').fadeIn("slow", function () {
                if ($(window).width() < 775) {
                    currentProduct.get(0).scrollIntoView({
                        behavior: 'smooth'
                    })
                }
            });
        });
    });
});
