<template>
  <span class="block">
    <p v-if="!link" class="text" :class="[centered, fontColor]">
      <slot></slot>
    </p>
    <label
      v-if="link"
      class="text label"
      :for="link"
      :class="[centered, fontColor]"
    >
      <slot></slot>
    </label>
  </span>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'dark-blue',
    },
    link: {
      type: String,
      default: '',
    },
  },
  computed: {
    centered() {
      return this.center ? 'center' : null
    },
    fontColor() {
      return `t--${this.color}`
    },
  },
}
</script>

<style scoped>
.text {
  font-size: max(1.4rem, 1.3vw);
  font-weight: 400;
  margin: 0;
  color: #fff;
}
.t--white {
  color: #fff;
}
.label {
  display: block;
  margin-bottom: 10px;
}
</style>
