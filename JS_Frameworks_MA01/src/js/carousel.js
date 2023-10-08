const Carousel = function() {
  let $parent;
  let carouselLength = 0;
  let position = 0;
  let canHover = true;
  let isAnimating = false;

  this.init = function(id) {
    $parent = $(`#${id}`);
    // Assign a key to each image container
    $('.carousel-image-container').each(function(index, element) {
      this.setAttribute('data-key', index);
      carouselLength++;
    });

    // Bind the various events
    bindHover();
    bindLeft();
    bindRight();
  };

  function bindHover() {
    $parent.find('.carousel-image').hover(
      function() {
        // Entering hover state
        if (
          !$(this)
            .parent()[0]
            .hasAttribute('style') &&
          canHover
        ) {
          // Get aspect ratio from the natural image size of the file
          // Calculate the width based on this and set the new width
          const aspectRatio = $(this)[0].naturalWidth / $(this)[0].naturalHeight;
          const width = 500 * aspectRatio;
          const remainingWidth = $parent.width() - width;
          $(this)
            .parent()
            .css('width', `${width}px`);

          // Set the width of the other images in view
          const key = $(this)
            .parent()
            .data('key');

          switch (
            $(this)
              .parent()
              .data('key') - position
          ) {
            case 1:
              $parent.find(`[data-key='${key + 1}']`).css('width', remainingWidth / 2 + 'px');
              $parent.find(`[data-key='${key - 1}']`).css('width', remainingWidth / 2 + 'px');
              break;
            case 2:
              $parent.find(`[data-key='${key - 1}']`).css('width', remainingWidth / 2 + 'px');
              $parent.find(`[data-key='${key - 2}']`).css('width', remainingWidth / 2 + 'px');
              break;
            default:
              $parent.find(`[data-key='${key + 1}']`).css('width', remainingWidth / 2 + 'px');
              $parent.find(`[data-key='${key + 2}']`).css('width', remainingWidth / 2 + 'px');
              break;
          }
        }
      },
      function() {
        // Leaving Hover state
        if (
          $(this)
            .parent()[0]
            .hasAttribute('style') &&
          canHover
        ) {
          $(this)
            .parent()
            .removeAttr('style');

          // Set the width of the other images in view
          const key = $(this)
            .parent()
            .data('key');
          switch (
            $(this)
              .parent()
              .data('key') - position
          ) {
            case 1:
              $parent.find(`[data-key='${key + 1}']`).removeAttr('style');
              $parent.find(`[data-key='${key - 1}']`).removeAttr('style');
              break;
            case 2:
              $parent.find(`[data-key='${key - 1}']`).removeAttr('style');
              $parent.find(`[data-key='${key - 2}']`).removeAttr('style');
              break;
            default:
              $parent.find(`[data-key='${key + 1}']`).removeAttr('style');
              $parent.find(`[data-key='${key + 2}']`).removeAttr('style');
              break;
          }
        }
      }
    );
  }

  function bindLeft() {}

  function bindRight() {
    $parent.find('.carousel-arrow-right').click(function() {
      if (position + 1 < carouselLength && !isAnimating) {
        position += 1;
      }
    });
  }
};

module.exports = Carousel;
