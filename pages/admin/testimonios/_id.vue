<template>
  <div class="body">
    <main>
      <div class="wrapper">
        <div>
          <h2 class="control-panel_title">Actualizar testimonio</h2>
        </div>
        <div>
          <Form
            :article="testimonial"
            section="testimonio"
            :status-create="false"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'authenticated',
  computed: {
    testimonial() {
      const id = this.$route.params.id
      const testimonial = this.$store.state.testimonial.testimonials.find(
        (testimonial) => testimonial.recId === id
      )
      return testimonial
    },
  },
  mounted() {
    if (typeof this.testimonial === 'undefined') {
      this.$store.dispatch('testimonial/setTestimonials')
    }
  },
}
</script>

<style scoped>
.body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.wrapper {
  padding: 0 3rem;
}

.control-panel_title {
  font-size: 36px;
  color: #000;
  margin-bottom: 4rem;
}

main {
  width: 85%;
  margin-left: 15vw;
}

.btn {
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn--blue {
  background-color: #00107d;
  color: #fff;
}

#editor {
  background-color: #fff;
  border: none;
  padding: 2rem;
  font-size: 1.8rem;
}

div.ql-toolbar.ql-snow {
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  position: -webkit-sticky;
  position: sticky;
  top: 1px;
  z-index: 10;
}
</style>
