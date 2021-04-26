function ExtensionUser(message) {
  this.message = message
  this.name = 'ExtensionUser'
}

export const state = () => ({
  section: null,
  authenticated: false,
})

export const mutations = {
  changeSection(state, { section }) {
    state.section = section
  },
  authenticated(state) {
    state.authenticated = true
  },
}

export const actions = {
  async singUp({ commit }, { email, password }) {
    const user = await this.$fire.auth.signInWithEmailAndPassword(
      email,
      password
    )
    if (user.code === 'auth/wrong-password') {
      throw new ExtensionUser('Algo salio mal')
    }
    if (typeof user.user.uid === 'string') {
      commit('authenticated')
      return true
    }
  },
}
