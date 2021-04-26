<template>
  <span>
    <h1 v-if="h === '1'" :class="backgroundColor">
      <slot></slot>
    </h1>
    <h2 v-if="h === '2'" :class="backgroundColor">
      <slot></slot>
    </h2>
    <h3 v-if="h === '3'" :class="backgroundColor">
      <slot></slot>
    </h3>
    <h4 v-if="h === '4'" :class="backgroundColor">
      <slot></slot>
    </h4>
    <h5 v-if="h === '5'" :class="backgroundColor">
      <slot></slot>
    </h5>
    <h6 v-if="h === '6'" :class="backgroundColor">
      <slot></slot>
    </h6>
  </span>
</template>
<script>
export default {
  props: {
    h: {
      type: String,
      default: '2',
    },
    color: {
      type: String,
      default: 'blue',
    },
  },
  computed: {
    backgroundColor() {
      return this.color === 'blue' ? 'blue' : 't--dg-yellow'
    },
  },
}
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: 700;
  margin-bottom: 5rem;
}
h2 {
  font-size: 3.6rem;
}

.t--dg-yellow {
  background: linear-gradient(180deg, #d49c31 10%, #fcf07d 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
</style>
