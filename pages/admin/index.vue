<template>
  <div class="body">
    <div class="logo">
      <NuxtLink to="/"
        ><img
          src="https://res.cloudinary.com/dugzgpblw/image/upload/v1617219610/Logo_m0mqas.png"
          alt="Logo"
          width="170"
          class="logo"
      /></NuxtLink>
    </div>
    <div>
      {{ errorMessage }}
    </div>
    <form class="form" @submit.prevent="sendEmail">
      <FormInputControl>
        <label for="username">Nombre de usuario</label>
        <input id="username" v-model="email" type="text" />
      </FormInputControl>
      <FormInputControl>
        <label for="password">Contrasena</label>
        <input id="password" v-model="password" type="password" />
      </FormInputControl>
      <FormInputControl>
        <button>Iniciar Sesion</button>
      </FormInputControl>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'none',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    }
  },
  head() {
    return {
      title: 'Iniciar sesion',
    }
  },
  methods: {
    async sendEmail() {
      try {
        const response = await this.$store.dispatch('singUp', {
          email: this.email,
          password: this.password,
        })
        if (response) {
          this.$router.push('/')
        }
      } catch (err) {
        if (err.code === 'auth/wrong-password') {
          this.errorMessage = 'Algo salio mal'
        }
      }
    },
  },
}
</script>

<style scoped>
.body {
  display: grid;
  place-content: center;
  height: 100vh;
  background-image: url(~/assets/img/144fee4ec2ca784fe3db575d223c899f.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.logo {
  margin: auto;
}
.form {
  width: 100%;
  min-width: 560px;
  padding: 50px;
  background-color: #f2f2f2;
  border-radius: 10px;
}
button {
  background: #00107d;
  border: none;
  color: #fff;
  border-radius: 10px;
  padding: 13px;
  cursor: pointer;
}
</style>
