export const state = () => ({
  blogs: [],
})

export const mutations = {
  addBlogs(state, payload) {
    state.blogs = payload
  },
  addBlog(state, { id, data }) {
    state.blogs.push({ recId: id, ...data })
  },
  updateBlog(state, { id, data }) {
    state.blogs = state.blogs.filter((blog) => blog.recId !== id)
    if (typeof data !== 'undefined') {
      state.blogs.push({ recId: id, ...data })
    }
  },
}

export const actions = {
  async createBlog({ commit }, { data }) {
    const id = this.$uuid()
    await this.$fire.firestore.collection('blog').doc(id).set(data)
    commit('addBlog', { id, data })
  },
  async setBlogs({ commit }) {
    const serviceData = []
    const response = await this.$fire.firestore.collection('blog').get()
    for (const doc of response.docs) {
      serviceData.push({ recId: doc.id, ...doc.data() })
    }
    commit('addBlogs', serviceData)
  },
  updateBlog({ commit }, { id, data }) {
    this.$fire.firestore.collection('blog').doc(id).update(data)
    commit('updateBlog', { id, data })
  },
  deleteBlog({ commit }, { id }) {
    this.$fire.firestore.collection('blog').doc(id).delete()
    commit('updateBlog', { id })
  },
}
