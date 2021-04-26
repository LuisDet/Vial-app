<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 30px;
}

@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
