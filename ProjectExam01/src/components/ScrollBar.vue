<template>
  <div id="scrollbar" class="scrollbar">
    <div
      id="scroll"
      class="scroll"
      v-bind:style="{ height: scrollHeight + 'px', top: scrollPercent + '%' }"
    ></div>
  </div>
</template>

<script>
let mapNumber = function (input, inMin, inMax, outMin, outMax) {
  return ((input - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// let lerp = function (min, max, fraction) {
//   return (max - min) * fraction + min;
// };

export default {
  name: 'ScrollBar',
  data() {
    return {
      scrollHeight: 0,
      scrollPercent: 0,
      scrollLength: null,
      isScrolling: false,
      currentFocus: 0,
    };
  },

  mounted() {
    // Attach the event listeners if this component is mounted, no need for them outside.
    // Thi should make it fairly portable
    window.addEventListener('wheel', this.handleScroll, { passive: false });
    window.addEventListener('resize', this.scrollToTop);

    // Information needed to resize the scrollbar
    let documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    this.scrollHeight = 1000 / (documentHeight / 1000);
    // Count the amount of elements with the scrolltarget CSS name, this is the amount of "pages" there are
    this.scrollLength = document.getElementsByClassName('scrolltarget').length;

    if (window.pageYOffset > 0) {
      setTimeout(() => {
        this.scrollToTop();
      }, 100);
    }
  },

  destroyed() {
    window.removeEventListener('wheel', this.handleScroll);
    window.removeEventListener('resize', this.scrollToTop);
  },

  methods: {
    scrollTo(duration, target) {
      // Start and begin animation
      window.scroll({ top: target, left: 0, behavior: 'smooth' });

      let animation = setInterval(() => {
        this.scroll();
      }, 0);

      setTimeout(() => {
        this.isScrolling = false;
        clearInterval(animation);
      }, duration);
    },

    scrollToTop() {
      this.scrollTo(600, 0);
      this.currentFocus = 0;
      // This is a rough fix due to the scrollbar animation precision
      setTimeout(() => {
        this.scroll();
      }, 700);
    },

    handleScroll(e) {
      if (e !== undefined) {
        e.preventDefault();
      }

      if (!this.isScrolling && this.currentFocus >= 0) {
        if (e.deltaY !== undefined && e.deltaY !== 0) {
          let windowHeight = window.innerHeight;
          if (e.deltaY > 0 && this.currentFocus < this.scrollLength - 1) {
            this.isScrolling = true;
            this.currentFocus = this.currentFocus + 1;
            this.scrollTo(600, window.pageYOffset + windowHeight);
          } else if (e.deltaY < 0 && this.currentFocus > 0) {
            this.isScrolling = true;
            this.currentFocus = this.currentFocus - 1;
            this.scrollTo(600, window.pageYOffset - windowHeight);
          } else {
            return false; // Cancel scroll if no direction
          }
        } else {
          // if (touchDirection === -1 && this.currentFocus > 0) {
          //   nextElement = backwards();
          // } else if (
          //   touchDirection === 1 &&
          //         this.currentFocus < this.scrollLength - 1
          // ) {
          //   nextElement = forward();
          // } else {
          //   return false; // Cancel scroll if no direction
          // }
        }
      }
    },

    scroll() {
      let docE = document.documentElement;
      let scrollPercentage =
        ((docE['scrollTop'] || document.body['scrollTop']) /
          ((docE['scrollHeight'] || document.body['scrollHeight']) -
            docE.clientHeight)) *
        100;
      let scrollbarHeight = window.innerHeight * 0.65; // corresponds to 65vh
      let scrollHeight = parseInt(
        document.querySelector('#scroll').style.height,
        10
      );
      let scrollDiffPercentage = scrollHeight * (100 / scrollbarHeight);
      this.scrollPercent = mapNumber(
        scrollPercentage,
        0,
        100,
        0,
        100 - scrollDiffPercentage + 0.3
      );
    },
  },
};
</script>

<style lang="scss">
body {
  overflow-y: hidden;
}
</style>
