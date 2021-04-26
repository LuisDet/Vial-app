<template>
  <BaseCard :id="id">
    <img v-show="hide" :src="image" :alt="title" srcset="" />
    <div class="card-content">
      <div class="card-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
    <!-- <Toolkit v-if="isAdmin" :id="id" @hideText="hideText" /> -->
  </BaseCard>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Hola',
    },
    image: {
      type: String,
      default: 'https://static.zerochan.net/Edward.Elric.full.200105.jpg',
    },
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hide: true,
      Authorized: true,
    }
  },
  computed: {
    isAdmin() {
      return this.$store.state.authenticated
    },
  },
  methods: {
    hideText({ hide }) {
      this.hide = hide
    },
  },
}
</script>
<style scoped>
img {
  width: 100%;
  max-height: 200px;
  height: 100%;
  display: block;
}
.image {
  width: 370px;
  /* height: 180px; */
}

.image img {
  width: 100%;
  max-height: 20rem;
}
.card-content {
  padding: 20px;
  background-color: #f2f2f2;
}
.card-header {
  margin-bottom: 15px;
}
.card-header h3 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #00107d;
  text-align: center;
}
</style>
