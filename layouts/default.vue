<template>
  <div>
    <TheHeader class="index-header">
      <div class="video-background">
        <video src="~/assets/img/background.mp4" autoplay loop muted></video>
      </div>
      <Wrapper>
        <h1 class="hero-text">
          Salir de tu hogar para conocer el mundo y regresar sabiendo que
          ayudaste a una familia... Eso no tiene precio.
        </h1>
      </Wrapper>
    </TheHeader>
    <Nuxt />
  </div>
</template>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.hero-text {
  max-width: 77rem;
  margin-top: 10%;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 58px;
  color: #fff;
}

video {
  width: 100%;
}

header {
  margin-bottom: 5rem;
}

.video-background {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

@media screen and (max-width: 768px) {
  video {
    width: auto;
    height: 100%;
  }
  .hero-text {
    margin-top: 30%;
    font-size: 4rem;
    line-height: 40px;
  }
}
</style>
