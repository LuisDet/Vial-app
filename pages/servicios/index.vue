<template>
  <section>
    <Wrapper>
      <div
        v-for="element of fullService"
        :id="element.category.recId"
        :key="element.category.recId"
        class="category-container"
      >
        <h2 v-if="element.services" class="service-title">
          {{ element.category.category }}
        </h2>
        <CardContainer class="service-container">
          <ManageCard
            v-for="service of element.services"
            :id="service.recId"
            :key="service.recId"
            :title="service.title"
            :image="service.imageUrl"
          >
            <CutText :text="service.description" :cut="130" />
          </ManageCard>
        </CardContainer>
      </div>
    </Wrapper>
  </section>
</template>

<script>
export default {
  layout(context) {
    return 'blog'
  },
  head() {
    return {
      title: 'Servicios',
    }
  },
  computed: {
    fullService() {
      const response = []
      this.categories.forEach((category) => {
        const newServiceArray = this.services.filter(
          (service) => service.category === category.category
        )
        if (newServiceArray.length !== 0) {
          response.push({
            category,
            services: newServiceArray,
          })
        }
      })
      return response
    },
    services() {
      return this.$store.state.service.services
    },
    categories() {
      return this.$store.state.service.categories
    },
  },
  async mounted() {
    this.$store.commit('changeSection', { section: 'servicios' })
    let services = this.$store.state.service.services
    if (services.length === 0) {
      await this.$store.dispatch('service/setServices')
      await this.$store.dispatch('service/setCategory')
      services = this.$store.state.service.services
    }
  },
}
</script>

<style scoped>
.service-container {
  padding: 70px 0;
}
.service-title {
  font-size: 36px;
  font-weight: 700;
  color: #00107d;
  text-align: center;
}
p {
  font-size: 18px;
  font-weight: 400;
  color: #000535;
}
</style>
