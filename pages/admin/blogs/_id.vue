<template>
  <div class="body">
    <main>
      <div class="wrapper">
        <div>
          <h2 class="control-panel_title">Actualizar artículo</h2>
        </div>
        <div>
          <Form :article="blog" section="blog" :status-create="false" />
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
    blog() {
      const id = this.$route.params.id
      const blog = this.$store.state.blog.blogs.find(
        (blog) => blog.recId === id
      )
      return blog
    },
  },
  mounted() {
    if (typeof this.blog === 'undefined') {
      this.$store.dispatch('blog/setBlogs')
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
