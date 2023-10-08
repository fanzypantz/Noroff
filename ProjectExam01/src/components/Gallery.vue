<template>
  <section class="container-normal gallery scrolltarget">
    <div class="images">
      <GalleryImage
        @handleClick="handleClick"
        :index="0"
        :current-focus="currentFocus"
        title="Arabsat-6A"
        description="The April 11 mission launched an advanced communications satellite called Arabsat-6A, which will provide communications services to customers living in the Middle East, Africa and parts of Europe. Onlookers turned out to enjoy the beautiful weather during the early-evening launch."
      />
      <GalleryImage
        @handleClick="handleClick"
        :index="1"
        :current-focus="currentFocus"
        title="Grid Fins"
        description="Falcon 9’s first stage is equipped with hypersonic grid fins that manipulate the direction of the stage’s lift during reentry. The fins are placed in an X-wing configuration and are stowed on ascent and deployed during reentry. The fins, which measure 4 feet by 5 feet, can roll, pitch, and yaw the 14-story stage autonomously in order to target a precision landing."
      />
      <GalleryImage
        @handleClick="handleClick"
        :index="2"
        :current-focus="currentFocus"
        title="Return from Space"
        description="The Falcon 9 first-stage landing tests were a series of controlled-descent flight tests conducted by SpaceX between 2013 and 2016. Since 2017, the first stage of Falcon 9 missions has been routinely landed if the rocket performance allowed it, and if SpaceX chose to recover the stage."
      />
      <GalleryImage
        @handleClick="handleClick"
        :index="3"
        :current-focus="currentFocus"
        title="Raptor Engines"
        description="The SpaceX Raptor is a full-flow, staged-combustion, methane-fueled rocket engine manufactured by SpaceX. The engine is powered by cryogenic liquid methane and liquid oxygen, rather than the RP-1 kerosene and LOX used in SpaceX's prior Merlin and Kestrel rocket engines."
      />
      <GalleryImage
        @handleClick="handleClick"
        :index="4"
        :current-focus="currentFocus"
        title="Dragon Capsule"
        description="Dragon is a free-flying spacecraft designed to deliver both cargo and people to orbiting destinations. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth. Currently Dragon carries cargo to space, but it was designed from the beginning to carry humans. The first demonstration flight under NASA's "
      />
    </div>
  </section>
</template>

<script>
import GalleryImage from './GalleryImage';

export default {
  name: 'Gallery',
  components: { GalleryImage },
  data() {
    return {
      currentFocus: 1,
      isAnimating: false,
    };
  },

  methods: {
    leftClick() {
      this.isAnimating = true;
      this.currentFocus = this.currentFocus - 1;
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },

    rightClick() {
      this.isAnimating = true;
      this.currentFocus = this.currentFocus + 1;
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },

    handleClick(index) {
      console.log('got event: ', index);
      if (index !== this.currentFocus && !this.isAnimating) {
        if (index > this.currentFocus) {
          this.rightClick();
        } else {
          this.leftClick();
        }
      }
    },
  },
};
</script>

<style lang="sass">
$delay: 500ms

.gallery
  display: flex
  align-items: center

  .images
    position: relative
    height: 60%
    width: 100%
    display: flex
</style>
