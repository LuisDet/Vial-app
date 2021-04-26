export const state = () => ({
  services: [],
  categories: [],
})

export const mutations = {
  addService(state, payload) {
    state.services = payload
  },
  addCategory(state, payload) {
    state.categories = payload
  },
  removeService(state, doc) {
    state.services = state.services.filter((service) => service.recId !== doc)
  },
  removeCategory(state, doc) {
    state.categories = state.categories.filter(
      (category) => category.recId !== doc
    )
  },
  updateService(state, { id, data }) {
    state.services = state.services.filter((service) => service.recId !== id)
    state.services.push(data)
  },
  updateCategory(state, { id, data }) {
    state.categories = state.categories.filter(
      (category) => category.recId !== id
    )
    state.categories.push({ recId: id, ...data })
  },
}

export const actions = {
  createService(context, { data }) {
    this.$fire.firestore.collection('service').doc(this.$uuid()).set(data)
  },
  async setServices({ commit }) {
    const serviceData = []
    const response = await this.$fire.firestore.collection('service').get()
    for (const doc of response.docs) {
      serviceData.push({ recId: doc.id, ...doc.data() })
    }
    commit('addService', serviceData)
  },
  deleteService({ commit }, { doc }) {
    this.$fire.firestore.collection('service').doc(doc).delete()
    commit('removeService', doc)
  },
  updateService({ commit }, { id, data }) {
    this.$fire.firestore.collection('service').doc(id).update(data)
    commit('updateService', { id, data })
  },
  // Category
  createCategory(context, { data }) {
    this.$fire.firestore.collection('category').doc(this.$uuid()).set(data)
  },
  async setCategory({ commit }) {
    const categoryData = []
    const response = await this.$fire.firestore.collection('category').get()
    for (const doc of response.docs) {
      categoryData.push({ recId: doc.id, ...doc.data() })
    }
    commit('addCategory', categoryData)
  },
  deleteCategory({ commit }, { doc }) {
    this.$fire.firestore.collection('category').doc(doc).delete()
    commit('removeCategory', doc)
  },
  updateCategory({ commit }, { id, data }) {
    this.$fire.firestore.collection('category').doc(id).update(data)
    commit('updateCategory', { id, data })
  },
}
