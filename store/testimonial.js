export const state = () => ({
  testimonials: [],
})

export const mutations = {
  addTestimonials(state, payload) {
    state.testimonials = payload
  },
  addTestimonial(state, payload) {
    state.testimonials.push(payload.data)
  },
  updateTestimonial(state, { id, data }) {
    state.testimonials = state.testimonials.filter(
      (testimonial) => testimonial.recId !== id
    )
    if (typeof data !== 'undefined') {
      state.testimonials.push({ recId: id, ...data })
    }
  },
}

export const actions = {
  createTestimonial({ commit }, { data }) {
    console.log(data)
    this.$fire.firestore.collection('testimonial').doc(this.$uuid()).set(data)
    commit('addTestimonial', { data })
  },
  async setTestimonials({ commit }) {
    const serviceData = []
    const response = await this.$fire.firestore.collection('testimonial').get()
    for (const doc of response.docs) {
      serviceData.push({ recId: doc.id, ...doc.data() })
    }
    commit('addTestimonials', serviceData)
  },
  updateTestimonial({ commit }, { id, data }) {
    this.$fire.firestore.collection('testimonial').doc(id).update(data)
    commit('updateTestimonial', { id, data })
  },
  deleteTestimonial({ commit }, { id }) {
    this.$fire.firestore.collection('testimonial').doc(id).delete()
    commit('updateTestimonial', { id })
  },
}
