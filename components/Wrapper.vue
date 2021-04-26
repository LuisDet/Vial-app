<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  padding-inline: 10rem;
}

@media screen and (max-width: 768px) {
  .wrapper {
    padding-inline: 5rem;
  }
}

@media screen and (max-width: 500px) {
  .wrapper {
    padding-inline: 3rem;
  }
}
</style>
