<template>
  <div
    @click="handleClick"
    @mouseover="handleHover"
    @mouseleave="handleLeave"
    :class="
      'gallery-image-container ' + getClass() + (isHovering ? ' hovering ' : '')
    "
  >
    <img
      class="image fade"
      :src="require(`../assets/images/gallery0${index + 1}.jpg`)"
      alt=""
    />
    <p class="text">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'GalleryImage',

  data() {
    return {
      isHovering: false,
    };
  },

  props: {
    index: {
      type: Number,
      default: 0,
    },
    currentFocus: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },

  methods: {
    getClass() {
      if (this.index > this.currentFocus) {
        if (this.index > this.currentFocus + 1) {
          return 'far-right';
        } else {
          return 'right';
        }
      } else if (this.index === this.currentFocus) {
        return 'current-focus';
      } else if (this.index < this.currentFocus) {
        if (this.index < this.currentFocus - 1) {
          return 'far-left';
        } else {
          return 'left';
        }
      } else {
        return '';
      }
    },

    handleHover() {
      console.log('ree: ');
      if (this.currentFocus === this.index) {
        this.isHovering = true;
      }
    },

    handleLeave() {
      if (this.isHovering) {
        this.isHovering = false;
      }
    },

    handleClick() {
      this.$emit('handleClick', this.index);
    },
  },
};
</script>

<style lang="sass">
$delay: 500ms

.gallery-image-container
  position: absolute
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25)
  margin: 0
  transition: top $delay ease, left $delay ease, width $delay ease, height $delay ease, transform $delay ease, opacity $delay ease

  .text
    color: white
    padding-left: 20px
    margin: 0
    line-height: 40px
    background-color: #005288
    transition: color $delay ease, line-height $delay ease, font-size $delay ease

  img
    width: 100%
    height: calc(100% - 40px)
    object-fit: cover
    transition: height $delay ease

  &:hover
    cursor: pointer

.far-right, .far-left
  width: 300px
  height: 400px
  opacity: 0
  transform: scale(0)
  top: calc(100% - 400px)

.left, .right
  width: 300px
  height: 400px
  top: calc(100% - 400px)

  img
    height: calc(100% - 5px)

  .text
    color: #005288
    line-height: 5px
    font-size: 1px


.far-left
  left: 0
  transform-origin: bottom left

.far-right
  left: calc(100% - 300px)
  transform-origin: bottom right

.left
  left: 0
  transform-origin: bottom left
  transition: transform 250ms ease

  &:hover
    transform: scale(1.2)

.right
  left: calc(100% - 300px)
  transform-origin: bottom right
  transition: transform 250ms ease

  &:hover
    transform: scale(1.2)

.current-focus
  left: 50%
  top: 0
  transform: translateX(-50%)
  width: 400px
  height: 500px

.description
  margin: 0
  color: white
  padding: 20px
  transform: scaleY(0)
  opacity: 0
  background-color: #005288
  transition: transform 250ms ease, opacity 250ms ease
  border-top: 3px solid white
  transform-origin: top

.hovering
  height: 100%
  width: 500px


  .description
    transform: scaleY(1)
    opacity: 1
</style>
