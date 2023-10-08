<template>
  <section :id="id" class="one-page scrolltarget">
    <div
      @click="toggleSlogan"
      v-if="!isOpen"
      ref="slogan-button-01"
      :class="'slogan-button' + (buttonFade ? ' fade-out' : ' fade-in')"
    >
      <h3 class="quote-button">
        Show me <br />
        an Elon Musk quote!
      </h3>
    </div>
    <div
      @click="toggleSlogan"
      v-if="isOpen"
      :class="'slogan' + (sloganFade ? ' fade-out' : ' fade-in')"
    >
      <p class="text fade">
        {{ slogan }}
      </p>
      <p class="signature fade">-{{ author }}</p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Slogan',

  data() {
    return {
      isOpen: false,
      buttonFade: false,
      sloganFade: true,
    };
  },

  props: {
    id: {
      type: String,
      default: 'hero01',
    },
    slogan: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
  },

  methods: {
    toggleSlogan() {
      if (this.isOpen) {
        this.sloganFade = true;
        setTimeout(() => {
          this.isOpen = false;
          setTimeout(() => {
            this.buttonFade = false;
          }, 250);
        }, 500);
      } else {
        this.buttonFade = true;
        setTimeout(() => {
          this.isOpen = true;
          setTimeout(() => {
            this.sloganFade = false;
          }, 250);
        }, 500);
      }
    },
  },
};
</script>

<style lang="sass">



.slogan-button
    width: 150px
    height: 150px
    text-align: center
    background-color: white
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center
    color: rgb(0, 82, 136)
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.4)
    animation: heartbeat 2s ease-in-out 2s infinite both
    transition: transform 250ms ease, opacity 250ms ease
    transform-origin: center

    .quote-button
        width: 120px
        font-weight: 700

    &:hover
        cursor: pointer
        transform: scale(1.2)

.slogan
    backdrop-filter: blur(10px)
    opacity: 0
    width: 500px
    height: 500px
    border-radius: 50%
    padding: 75px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    transform: scale(0)
    transform-origin: center
    font-family: letter-gothic-std, monospace
    font-weight: 600
    color: white
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4)
    transition: transform 500ms ease, opacity 500ms ease

    .text
        margin: 0
        text-align: center
        font-size: 1.7em

    .signature
        position: absolute
        bottom: 15%

        font-size: 2em
        text-align: right
        font-family: wreath, serif
        font-weight: 400
        font-style: normal

    &:hover
        cursor: pointer

.fade-out
    opacity: 0
    transform: scale(0) !important

.fade-in
    opacity: 1
    transform: scale(1)
</style>
