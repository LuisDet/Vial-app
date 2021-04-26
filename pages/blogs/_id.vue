<template>
  <section>
    <Wrapper>
      <div class="ql-editor" v-html="blog"></div>
    </Wrapper>
  </section>
</template>

<script>
export default {
  layout(context) {
    return 'blog'
  },
  data() {
    return {
      blog: '<h1>Hola</h1>',
      title: 'Blog',
    }
  },
  head() {
    return {
      title: this?.title || 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home Alone',
        },
      ],
    }
  },
  async mounted() {
    const id = this.$route.params.id
    let blogs = this.$store.state.blog.blogs
    let blog = blogs.find((blog) => blog.recId === id)
    if (typeof blog === 'undefined') {
      await this.$store.dispatch('blog/setBlogs')
      blogs = this.$store.state.blog.blogs
      blog = blogs.find((blog) => blog.recId === id)
    }
    this.blog = blog.description
    this.title = blog.title
  },
}
</script>
<style scoped></style>
