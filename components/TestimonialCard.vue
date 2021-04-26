<template>
  <BaseCard>
    <div class="card-content">
      <BaseText center>
        <span class="block text-left testimonial-font t--dg-yellow">"</span>
        {{ text }}
        <span class="block testimonial-font t--dg-yellow text-right">"</span>
      </BaseText>
    </div>
  </BaseCard>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.card-content {
  background-color: #f2f2f2;
  padding: 2rem 3rem;
  flex-grow: 1;
}

.testimonial-font {
  font-size: 4.8rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}

.text {
  font-size: max(1.4rem, 1.3vw);
  font-weight: 400;
  margin: 0;
  color: #fff;
}

.t--dg-yellow {
  background: linear-gradient(180deg, #d49c31 10%, #fcf07d 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
</style>
