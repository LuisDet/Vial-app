<template>
  <span>
    <div class="image-background" :style="imageBackground"></div>
    <div class="container">
      <div class="blog-content">
        <h1 class="blog-title">{{ headerTitle }}</h1>
        <div v-if="subText.author && subText.date" class="blog-info">
          <p>
            Escrito por <span>{{ subText.author }}</span>
          </p>
          <DateFormatter :date="subText.date" font-size="1.8" color="fff" />
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      author: '',
      date: '',
    }
  },
  computed: {
    headerTitle() {
      return this.$store.state.header?.title
    },
    imageBackground() {
      return `
      background-image: linear-gradient( 180deg, rgba(0, 5, 53, 0.8) 0,rgba(0, 0, 0, 0) 100% ), url(${this.$store.state.header.background});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `
    },
    subText() {
      return { author: this.author, date: this.date }
    },
  },
  watch: {
    $route() {
      this.author = ''
      this.date = ''
      this.setTitle()
    },
  },
  async mounted() {
    const id = this.$route.params.id
    let title = ''
    let img = ''
    if (typeof id === 'undefined') {
      const name = this.$router.currentRoute.name
      title = name.charAt(0).toUpperCase() + name.slice(1)
      img =
        'https://res.cloudinary.com/dugzgpblw/image/upload/v1617829066/Guatemala/144fee4ec2ca784fe3db575d223c899f_m3qhj3.jpg'
    } else {
      await this.$store.dispatch('blog/setBlogs')
      const blog = this.$store.state.blog.blogs.find(
        (blog) => blog.recId === id
      )
      title = blog?.title
      img = blog?.imageUrl
      this.author = blog?.author
      this.date = blog?.date
    }
    this.$store.commit('header/replaceTitle', { title })
    this.$store.commit('header/replaceBackground', { img })
    // this.setTitle()
  },
  methods: {
    setTitle() {
      const id = this.$route.params.id
      let title = ''
      let img = ''
      if (typeof id === 'undefined') {
        const name = this.$router.currentRoute.name
        title = name.charAt(0).toUpperCase() + name.slice(1)
        img =
          'https://res.cloudinary.com/dugzgpblw/image/upload/v1617829066/Guatemala/144fee4ec2ca784fe3db575d223c899f_m3qhj3.jpg'
      } else {
        const blog = this.$store.state.blog.blogs.find(
          (blog) => blog.recId === id
        )
        title = blog?.title
        img = blog?.imageUrl
        this.author = blog?.author
        this.date = blog?.date
      }
      this.$store.commit('header/replaceTitle', { title })
      this.$store.commit('header/replaceBackground', { img })
    },
  },
}
</script>

<style scoped>
.image-background {
  position: absolute;
  top: 0;
  width: 100%;
  height: 60vh;
  z-index: -1;
}
.blog-content {
  width: 100%;
  padding-top: 50px;
}
.blog-title {
  color: #fff;
  font-size: 3.6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;
}
</style>
