<template>
  <div class="about">
    <div class="background background-about" :style="imageBackground"></div>
    <Wrapper>
      <BaseTitle color="red" class="block" :class="textAlign">
        {{ title.toUpperCase() }}
      </BaseTitle>
      <slot></slot>
    </Wrapper>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: 'https://static.zerochan.net/Edward.Elric.full.200105.jpg',
    },
    position: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageBackground() {
      const img = `
        background: linear-gradient(${this.grade()}deg ,transparent 28.56%,rgba(0, 5, 53, 0.8) 72.07%), url(${
        this.image
      });
      background-size: cover;
      background-position: center;
      z-index: -1;
      @media screen and (max-width: 500px){
         background: linear-gradient(rgba(0, 5, 53, 0.8) 100%), url(${
           this.image
         });
      }`
      return img
    },
    textAlign() {
      return this.position === 'right' ? 'position-right' : null
    },
  },
  methods: {
    grade() {
      switch (this.position) {
        case 'top':
          return 0
        case 'bottom':
          return 360
        case 'right':
          return 90
        case 'left':
          return 270
      }
    },
  },
}
</script>

<style>
.about {
  max-height: 54.5rem;
  height: 100%;
  position: relative;
  padding: 10rem 0;
}

.about p {
  margin-bottom: 3rem !important;
}
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.background-testimonial {
  background-blend-mode: soft-light, normal, normal;
  background-size: cover;
  background-position: top;
}

.background-contact {
  background-blend-mode: soft-light, normal;
  background-size: cover;
  background-position: center;
}
.position-right {
  margin-left: 40vw !important;
}
.position-left {
  margin-right: 40vw !important;
}

@media screen and (max-width: 500px) {
  .about {
    max-height: auto;
    height: 100%;
    position: relative;
    padding: 10rem 0;
  }
  .position-right {
    margin-left: 0 !important;
  }
  .position-left {
    margin-right: 0 !important;
  }
}
</style>
