<template>
  <header>
    <Wrapper>
      <menu>
        <div>
          <NuxtLink to="/"
            ><img
              src="https://res.cloudinary.com/dugzgpblw/image/upload/v1617219610/Logo_m0mqas.png"
              alt="Logo"
              width="170"
              class="logo"
          /></NuxtLink>
        </div>
        <HeaderNavigator />
      </menu>
    </Wrapper>
    <!-- <HeaderHero /> -->
    <slot></slot>
  </header>
</template>

<style scoped>
header {
  height: 60vh;
  overflow: hidden;
  margin-bottom: 30px;
}

header.index-header {
  /* width: 98.792vw; */
  height: 100vh;
  position: relative;
  top: 0;
}

menu {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 1024px) {
  header.index-header {
    /* width: 98.792vw; */
    height: auto;
    position: relative;
    padding: 0 0 10rem 0;
    top: 0;
  }
}

@media screen and (max-width: 768px) {
  img {
    width: 100px;
  }
}
</style>
