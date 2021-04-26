<template>
  <main>
    <section class="section-padding">
      <Wrapper>
        <BaseTitle class="center t--blue">SERVICIOS</BaseTitle>
        <BaseText center class="mb-5">
          Estamos especializados en darte un servicio de alto estándar,
          llevándote a lugares turisticos y donde desees ir.
        </BaseText>
        <CardContainer>
          <ManageCard
            v-for="category of categories"
            :id="category.recId"
            :key="category.recId"
            :title="category.category"
            :image="category.imageUrl"
            section="categorias"
          />
        </CardContainer>
      </Wrapper>
    </section>
    <section id="about">
      <About
        position="left"
        title="¿QUIÉNES SOMOS?"
        image="https://res.cloudinary.com/dugzgpblw/image/upload/v1617829048/Guatemala/9dcb4d12a279adc875ba06a6ecbfe918_x9xnhg.jpg"
      >
        <BaseText color="white" class="position-left">
          Una agencia enomarada de su cultura, de nuestra cultura guatemalteca,
          de nuestras bellas ciudades, de las placenteras playas y de nuestra
          gente alegre y única.
        </BaseText>
        <BaseText color="white" class="position-left">
          Tenemos más de 10 años de experiencia ofreciendo servicios de
          transporte a familias viajeras, grupos y organizaciones. Experiencia
          acumulada para darte la seguridad y el servicio memorable que
          necesitas al viajar.
        </BaseText>
        <BaseText color="white" class="position-left">
          Cada vez que viajas y conoces el mundo ayudas a construir 10,000
          hogares para nuestra gente guatemalteca que necesita de nuestra ayuda.
        </BaseText>
      </About>
      <About
        position="right"
        title="mision"
        image="https://res.cloudinary.com/dugzgpblw/image/upload/v1617829051/Guatemala/2df480084521e4debcb7dd2708d5e758_xsxrzt.jpg"
      >
        <BaseText color="white" class="position-right">
          Ser una agencia con un alto estándar de servicio al viajar a toda
          Guatemala dándote la seguridad, libertad y alegría de viajar en grupo.
          ayudar y llevar esperanza a nuestras familias guatemaltecas a tener un
          mejor hogar.
        </BaseText>
      </About>
      <About
        position="right"
        title="VISIÓN"
        image="https://res.cloudinary.com/dugzgpblw/image/upload/v1617829101/Guatemala/c642c46923d982e8ca5ecda58fd6ca6c_a7ulcp.jpg"
      >
        <BaseText color="white" class="position-right">
          Llegar a liderar la industria del turismo en Guatemala y que cada
          viajero tenga una historia digna de ser compartida, construiremos
          10,000 casas para nuestras familias guatemaltecas que necesitan de
          nosotros, porque esto es el espíritu de servicio que tiene cada
          guatemalteco que ama a su gente.
        </BaseText>
      </About>
    </section>
    <section class="section-padding">
      <Wrapper>
        <BaseTitle class="center t--blue">VALORES</BaseTitle>
        <CardContainer>
          <ManageCard
            title="Amor y Gracia"
            image="https://res.cloudinary.com/dugzgpblw/image/upload/v1617829263/Guatemala/e8ba9b060c5c7c50e77a8ad1601ef2cd_lgqi9k.jpg"
          >
            <BaseText center>
              Ponemos en práctica el amor y la gracia hacia nuestras familias
              guatemaltecas que necesitan un hogar y así mismo a nuestros
              viajeros que ponen en nuestras manos su deseo de viajar.
            </BaseText>
          </ManageCard>
          <ManageCard
            title="Felicidad"
            image="https://res.cloudinary.com/dugzgpblw/image/upload/v1617829046/Guatemala/6a18459562883ce682c8b8351cfe3aea_eamxcv.jpg"
          >
            <BaseText center>
              Viajar con felicidad nos da una vida plena y disfrutamos así de
              cada experiencia en nuestros viajes.
            </BaseText>
          </ManageCard>
          <ManageCard
            title="Liderazgo Integral"
            image="https://res.cloudinary.com/dugzgpblw/image/upload/v1617829060/Guatemala/a8e85f4e483f32c2609fced3ea675852_yaa5nu.jpg"
          >
            <BaseText center>
              Nuestro equipo tiene la prioridad de ser claros y transparentes
              con nuestros viajeros, se esfuerzan en añadir valor y dejar un
              legado.
            </BaseText>
          </ManageCard>
        </CardContainer>
      </Wrapper>
    </section>
    <section class="relative section-padding">
      <div class="background-about background-testimonial"></div>
      <Wrapper>
        <BaseTitle class="center t--blue">TESTIMONIOS</BaseTitle>
        <CardContainer>
          <TestimonialCard
            v-for="(limit, idx) of limitTestimonial"
            :key="idx"
            :text="limit"
          />
        </CardContainer>
      </Wrapper>
    </section>

    <section>
      <div class="subscribe-container">
        <div class="subscribe-image">
          <img src="~/assets/img/envelop.svg" alt="" />
        </div>
        <div class="subscribe-content">
          <BaseTitle class="title t--blue">¡SUSCRÍBETE!</BaseTitle>
          <BaseText>
            Para ser el primero en aprender sobre nuestros servicios y
            promociones únete a nuestra comunidad.
          </BaseText>
          <form method="post">
            <input id="email" type="email" name="email" />
            <button>Suscribirme</button>
          </form>
        </div>
      </div>
    </section>

    <section id="contact" class="contact relative">
      <div class="background-about background-contact"></div>
      <div class="contact-container">
        <div class="contact-info">
          <BaseTitle class="t--blue">CONTACTO</BaseTitle>
          <ul>
            <li>
              <IconMail />
              <a
                href="mailto:Agenciavail.informacion@gmail.com"
                class="text t--blue"
              >
                <BaseText> Agenciavail.informacion@gmail.com </BaseText>
              </a>
            </li>
            <li>
              <IconInstagram />
              <a
                href="https://www.instagram.com/agenciadeviajesvailgt/"
                target="_blank"
              >
                <BaseText> @agenciadeviajesvailgt </BaseText>
              </a>
            </li>
            <li>
              <IconWhatsapp />
              <a
                href="https://api.WhatsApp.com/send?phone=9548822762"
                target="_blank"
              >
                <BaseText> (954) 882-2762 </BaseText>
              </a>
            </li>
            <li>
              <IconFacebook />
              <a
                href="https://www.facebook.com/agendiadeviajesenguatemala/"
                class="text t--blue"
              >
                <BaseText> @agendiadeviajesenguatemala </BaseText>
              </a>
            </li>
          </ul>
        </div>
        <div class="contact-form">
          <form @submit.prevent="sendInfo">
            <div class="form-control">
              <BaseText link="name">Nombre</BaseText>
              <input id="name" v-model="name" type="text" name="name" />
            </div>
            <div class="form-control">
              <BaseText link="email"> Correo Electronico </BaseText>
              <input id="email" v-model="email" type="email" name="email" />
            </div>
            <div class="form-control">
              <BaseText link="message">Mensaje</BaseText>
              <textarea
                id="message"
                v-model="content"
                name="message"
                rows="3"
              ></textarea>
            </div>
            <div class="form-control">
              <button class="w-100">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      content: '',
    }
  },
  head: {
    title: 'Vail Agencia de Viejes',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Una agencia enomarada de su cultura, de nuestra cultura guatemalteca, de nuestras bellas ciudades, de las placenteras playas y de nuestra gente alegre y única.',
      },
    ],
  },
  computed: {
    categories() {
      return this.$store.state.service.categories
    },
    testimonials() {
      return this.$store.state.testimonial.testimonials
    },
    limitTestimonial() {
      const limitArr = []
      limitArr.push(this.testimonials[0]?.description || 'Hola')
      limitArr.push(this.testimonials[1]?.description || 'Hola')
      limitArr.push(this.testimonials[2]?.description || 'Hola')

      return limitArr
    },
  },
  mounted() {
    this.$store.commit('changeSection', { section: null })
    if (this.categories.length === 0) {
      this.$store.dispatch('service/setCategory')
    }
    if (this.testimonials.length === 0) {
      this.$store.dispatch('testimonial/setTestimonials')
    }
  },
  methods: {
    async sendInfo() {
      await this.$axios
        .post('/api/message', {
          name: this.name,
          firstname: this.email,
        })
        .then((res) => {
          // On clear le formulaire
          this.name = ''
          this.email = ''
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.section-padding {
  padding-block: 10rem;
}
.mt-3 {
  margin-top: 3rem;
}
.mb-5 {
  margin-bottom: 5rem;
}
.title-blog {
  font-size: 2.4rem;
}
.text-blog {
  font-size: 1.5rem;
  color: #000535;
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  display: block;
  background: #fff;
  text-decoration: none;
  width: 100%;
  padding: 1.3rem;
  border-radius: 10px;
  font-weight: 700;
}

.service-container {
  display: flex;
  margin-top: 10rem;
  flex-direction: column;
}

.service-title {
  text-align: center;
  font-size: 3.6rem;
  font-weight: 700;
  color: #00107d;
  margin-top: 4rem;
  margin-top: 2rem;
}

.background-testimonial {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: linear-gradient(180deg, #d49c31 0%, #fcf07d 100%),
    linear-gradient(180deg, #ffffff 12.43%, rgba(255, 255, 255, 0) 53.88%),
    url(~/assets/img/ed7340fba70a486c252a0d73226b7af5.jpg);
  background-blend-mode: soft-light, normal, normal;
  background-size: cover;
  background-position: top;
  z-index: -1;
}

.background-contact {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: linear-gradient(0deg, #00107d, #00107d),
    url(~/assets/img/ac8b60fed7156233397cb6c974440af4.jpg);
  background-blend-mode: soft-light, normal;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.relative {
  position: relative;
}

.position-right {
  margin-left: 40vw;
}
.subscribe-container {
  display: flex;
}
.subscribe-image {
  background: linear-gradient(180deg, #d49c31 0%, #fcf07d 100%);
  width: 32%;
  padding: 6rem 0;
}

.subscribe-image img {
  display: block;
  margin: auto;
}

.subscribe-content {
  width: 68%;
  background: #f2f2f2;
  padding: 6rem 0;
  padding-left: 10rem;
}

.subscribe-content p {
  max-width: 500px;
  width: 100%;
}

.subscribe-content form {
  margin-top: 5rem;
}

.subscribe-content input {
  background-color: #fff;
  max-width: 350px;
  width: 100%;
  padding: 1.2rem 2rem;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 1.8rem;
  color: #000535;
  margin-right: 2.5rem;
}

button {
  color: #fff;
  border-radius: 10px;
  border: none;
  background-color: #00107d;
  font-size: 1.8rem;
  padding: 1.3rem 1.5rem;
  cursor: pointer;
  transition: all 0.4s;
}

@media screen and (max-width: 768px) {
  .subscribe-container {
    flex-wrap: wrap;
  }
  .subscribe-image {
    width: 100%;
  }

  .subscribe-content {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  button {
    width: 100%;
    margin-top: 2rem;
  }
}

.w-100 {
  width: 100%;
}

button:hover {
  background-color: #000535;
}

.contact {
  padding: 10rem 0;
  width: 100%;
}
.contact-container {
  background-color: #f2f2f2;
  margin: auto;
  max-width: 110rem;
  padding: 4rem;
  display: flex;
  border-radius: 10px;
}

.contact-info {
  width: 40%;
  padding-right: 3.5rem;
}

.contact-info ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 3.5rem;
  padding: 0;
}

.contact-info ul li {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.contact-form {
  width: 60%;
  padding: 0 4rem;
  position: relative;
}

.contact-form::before {
  content: '';
  width: 5px;
  left: 0;
  height: 100%;
  position: absolute;
  background-color: #d9d9d9;
  border-radius: 20px;
}

.form-control {
  margin-top: 2rem;
}

.contact-form input,
.contact-form textarea {
  background-color: #fff;
  width: 100%;
  padding: 1.2rem 2rem;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 1.8rem;
  color: #000535;
}

@media screen and (max-width: 768px) {
  .contact-container {
    padding: 3rem;
    flex-wrap: wrap;
  }

  .contact-info {
    width: 100%;
    padding-right: 0;
    margin-bottom: 2rem;
  }

  .contact-form {
    width: 100%;
    padding: 0;
  }

  .contact-form::before {
    display: none;
  }
}

footer {
  background-color: #00107d;
  color: #fff;
  font-size: 1.8rem;
  margin: 0;
  padding: 2rem;
}

footer p {
  text-align: center;
  margin: 0;
}
</style>
