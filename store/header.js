export const state = () => ({
  title: 'Servicio',
  background: 'https://static.zerochan.net/Edward.Elric.full.200105.jpg',
})

export const mutations = {
  replaceTitle(state, payload) {
    state.title = payload.title
  },
  replaceBackground(state, payload) {
    state.background = payload.img
  },
}
