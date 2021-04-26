<template>
  <section>
    <Wrapper>
      <CardContainer class="service-container">
        <ManageCard
          v-for="blog of blogs"
          :id="blog.recId"
          :key="blog.recId"
          :title="blog.title"
          :image="blog.imageUrl"
        >
          <CutText :text="blog.resume" :cut="130" />
          <div class="blog-footer">
            <DateFormatter :date="blog.date" />
            <NuxtLink :to="blogLink + blog.recId">
              <BaseText>Leer Articulo</BaseText>
            </NuxtLink>
          </div>
        </ManageCard>
      </CardContainer>
    </Wrapper>
  </section>
</template>

<script>
import Wrapper from '../../components/Wrapper.vue'
export default {
  components: { Wrapper },
  layout(context) {
    return 'blog'
  },
  data() {
    return {
      blogs: this.$store.state.blog.blogs,
    }
  },
  head: {
    title: 'Blogs',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home Alone',
      },
    ],
  },
  computed: {
    blogLink() {
      return this.$route.fullPath + '/'
    },
  },
  async mounted() {
    this.$store.commit('changeSection', { section: 'blogs' })
    let blogs = this.$store.state.blog.blogs
    if (blogs.length === 0) {
      await this.$store.dispatch('blog/setBlogs')
      blogs = this.$store.state.blog.blogs
    }
    this.blogs = blogs
  },
}
</script>

<style scoped>
.service-container {
  padding: 70px 0;
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>
