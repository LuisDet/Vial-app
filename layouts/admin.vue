<template>
  <div>
    <aside>
      <menu>
        <nav>
          <ul>
            <li>
              <NuxtLink to="/admin/servicios">
                <svg class="icon" viewBox="0 0 24 24">
                  <path
                    d="M17.4275 12.995C17.3225 12.695 17.0375 12.5 16.7 12.5H11.3075C10.9625 12.5 10.685 12.695 10.5725 12.995L9.5 16.0775L9.5075 20.21C9.5075 20.495 9.74 20.75 10.025 20.75H10.49C10.775 20.75 11 20.465 11 20.18V19.25H17V20.18C17 20.465 17.2325 20.75 17.5175 20.75H17.975C18.26 20.75 18.4925 20.495 18.4925 20.21L18.5 19.1825V16.0775L17.4275 12.995ZM11.3075 13.25H16.7L17.4725 15.5H10.535L11.3075 13.25ZM11 17.75C10.5875 17.75 10.25 17.4125 10.25 17C10.25 16.5875 10.5875 16.25 11 16.25C11.4125 16.25 11.75 16.5875 11.75 17C11.75 17.4125 11.4125 17.75 11 17.75ZM17 17.75C16.5875 17.75 16.25 17.4125 16.25 17C16.25 16.5875 16.5875 16.25 17 16.25C17.4125 16.25 17.75 16.5875 17.75 17C17.75 17.4125 17.4125 17.75 17 17.75Z"
                  />
                  <path
                    d="M12.5 11.75H13.25V7.25H7.25V11H3.5V20.75H4.25V11.75H8V8H12.5V11.75Z"
                  />
                  <path d="M7.25 13.25H5.75V14.75H7.25V13.25Z" />
                  <path d="M11 8.75H9.5V10.25H11V8.75Z" />
                  <path d="M7.25 16.25H5.75V17.75H7.25V16.25Z" />
                  <path d="M7.25 19.25H5.75V20.75H7.25V19.25Z" />
                </svg>
                Servicios
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/blogs">
                <svg class="icon" viewBox="0 0 18 18">
                  <path
                    d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11 14H4V12H11V14ZM14 10H4V8H14V10ZM14 6H4V4H14V6Z"
                  /></svg
                >Articulos del blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/admin/categorias">
                <svg
                  aria-hidden="true"
                  class="icon"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="th-list"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"
                  ></path>
                </svg>
                Categorias
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/testimonios">
                <svg class="icon" viewBox="0 0 18 18">
                  <path
                    d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11 14H4V12H11V14ZM14 10H4V8H14V10ZM14 6H4V4H14V6Z"
                  /></svg
                >Testimonios</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </menu>
    </aside>
    <Nuxt />
  </div>
</template>

<style scoped>
aside {
  width: 15%;
  -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #fff;
}
menu {
  margin: 0;
  padding: 0;
}

menu nav {
  margin: 0;
  padding: 0;
}

menu nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 0.5rem;
}

menu nav ul li {
  padding: 0.5rem 0;
  margin-top: 1rem;
  border-radius: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

menu nav ul li a {
  margin-top: 1rem;
  border-radius: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  padding: 5px 0;
}

menu nav ul li a .icon {
  fill: #828282;
  width: 30px;
  height: 30px;
  padding-left: 1rem;
}

menu nav ul .nuxt-link-active {
  background-color: #ffcd00;
}

menu nav ul .nuxt-link-activea {
  color: #00107d;
}

menu nav ul .nuxt-link-active .icon {
  fill: #00107d;
}
</style>
