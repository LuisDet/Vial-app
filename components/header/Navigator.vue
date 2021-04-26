<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/servicios">Servicios</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ path: '/', hash: 'about' }" class="optional">
            Quienes somos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ path: '/', hash: 'contact' }" class="optional">
            Contacto
          </NuxtLink>
        </li>
        <li v-if="isAdmin">
          <NuxtLink :to="{ path: '/admin/servicios' }" class="nav-admin">
            Admin
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isAdmin() {
      return this.$store.state.authenticated
    },
  },
}
</script>

<style scoped>
nav ul {
  display: flex;
  gap: 36px;
  list-style: none;
  margin-top: 44px;
}

nav ul li a {
  font-size: 18px;
  color: white;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-decoration: none;
}
.nav-admin {
  background-color: #002982;
  padding: 5px 10px;
  border-radius: 5px;
}

@media screen and (max-width: 500px) {
  .optional {
    display: none;
  }
}
</style>
