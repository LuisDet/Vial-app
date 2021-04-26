<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  position: relative;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: #f2f2f2;
}
</style>
