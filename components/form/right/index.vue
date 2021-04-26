<template>
  <div class="form-right">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.form-right {
  width: 40%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
</style>
