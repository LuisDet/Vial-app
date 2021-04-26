<template>
  <form class="form" @submit.prevent="sendForm">
    <FormLeft>
      <FormInputControl v-if="section !== 'testimonio'">
        <label for="title">Titulo</label>
        <input
          id="title"
          v-model="articleTitle"
          type="text"
          name="title"
          required
        />
      </FormInputControl>
      <FormInputControl
        v-if="section === 'servicio' || section === 'testimonio'"
      >
        <label for="description">Descripcion</label>
        <textarea
          id="description"
          v-model="articleDescription"
          name="description"
          cols="30"
          rows="10"
          required
        ></textarea>
      </FormInputControl>
      <FormInputControl v-if="section === 'blog'">
        <label for="resume">Descripción</label>
        <textarea
          id="resume"
          v-model="articleResume"
          name="resume"
          rows="3"
          minlength="90"
          maxlenght="130"
          placeholder="Breve descripción del articulo..."
          spellcheck="true"
          required
        ></textarea>
      </FormInputControl>
      <div v-if="section === 'blog'" class="form-description">
        <div
          v-quill:myQuillEditor="{
            theme: 'snow',
            modules: {
              toolbar: toolbarOptions,
            },
          }"
          :content="htmlEditor"
          @ready="onEditorReady($event)"
          @change="onEditorChange($event)"
        ></div>
      </div>
    </FormLeft>
    <FormRight>
      <FormCard>
        <FormInputControl v-if="section === 'servicio'">
          <label for="category">Categoria</label>
          <select id="category" v-model="articleCategory" name="category">
            <option
              v-for="category of categories"
              :key="category.recId"
              :value="category.category"
            >
              {{ category.category }}
            </option>
          </select>
        </FormInputControl>
        <FormInputControl v-if="section === 'blog'">
          <label for="date">Fecha</label>
          <input
            id="date"
            v-model="articleDate"
            type="date"
            name="date"
            required
          />
        </FormInputControl>
        <FormInputControl v-if="section === 'blog'">
          <label for="author">Autor</label>
          <input
            id="author"
            v-model="articleAuthor"
            type="text"
            name="author"
            required
          />
        </FormInputControl>
        <FormInputControl>
          <button id="send" class="btn btn--blue">{{ buttonText }}</button>
        </FormInputControl>
      </FormCard>
      <FormCard v-if="section !== 'testimonio'">
        <img
          id="image-preview"
          :src="imagePreview"
          class="image-preview-upload"
        />
        <label for="image" class="image-upload"
          >Seleccionar imágen destacada</label
        >
        <input
          id="image"
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg"
          @input="loadPreviewImage"
        />
      </FormCard>
    </FormRight>
  </form>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          title: '',
          description: '',
          category: 'Transporte',
          imageUrl:
            'https://res.cloudinary.com/dugzgpblw/image/upload/v1617290723/upload-solid_xi5ia6.svg',
          author: '',
          resume: '',
          date: '',
        }
      },
    },
    section: {
      type: String,
      default: '',
    },
    statusCreate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      articleTitle: this.article.title,
      articleDescription: this.article.description,
      articleCategory: this.article.category,
      imagePreview: this.article.imageUrl,
      articleDate: this.article.date,
      articleAuthor: this.article.author,
      articleResume: this.article.resume,
      htmlEditor: '',
      toolbarOptions: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote'],

        [{ header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],
        [('link', 'image')],
        ['clean'], // remove formatting button
      ],
    }
  },
  computed: {
    categories() {
      return this.$store.state.service.categories
    },
    buttonText() {
      return this.statusCreate ? 'Publicar' : 'Actulizar'
    },
  },
  mounted() {
    this.$store.dispatch('service/setCategory')
  },
  methods: {
    async sendForm(value) {
      if (
        this.imagePreview ===
          'https://res.cloudinary.com/dugzgpblw/image/upload/v1617290723/upload-solid_xi5ia6.svg' &&
        this.section !== 'testimonio'
      )
        return

      if (this.section === 'servicio') {
        const data = {
          title: this.articleTitle,
          description: this.articleDescription,
          category: this.articleCategory,
          imageUrl: this.imagePreview,
        }
        if (this.statusCreate) {
          this.$store.dispatch('service/createService', {
            data,
          })
        } else {
          this.$store.dispatch('service/updateService', {
            id: this.article.recId,
            data,
          })
        }
        this.$router.push('/admin/servicios')
      }
      if (this.section === 'blog') {
        const data = {
          title: this.articleTitle,
          description: this.htmlEditor,
          date: this.articleDate,
          author: this.articleAuthor,
          resume: this.articleResume,
          imageUrl: this.imagePreview,
        }
        if (this.statusCreate) {
          await this.$store.dispatch('blog/createBlog', {
            data,
          })
        } else {
          this.$store.dispatch('blog/updateBlog', {
            id: this.article.recId,
            data,
          })
        }
        this.$router.push('/admin/blogs')
      }

      if (this.section === 'categoria') {
        const data = {
          category: this.articleTitle,
          imageUrl: this.imagePreview,
        }
        if (this.statusCreate) {
          this.$store.dispatch('service/createCategory', {
            data,
          })
        } else {
          this.$store.dispatch('service/updateCategory', {
            id: this.article.recId,
            data,
          })
        }
        this.$router.push('/admin/categorias')
      }
      if (this.section === 'testimonio') {
        const data = {
          description: this.articleDescription,
        }
        if (this.statusCreate) {
          this.$store.dispatch('testimonial/createTestimonial', {
            data,
          })
        } else {
          this.$store.dispatch('testimonial/updateTestimonial', {
            id: this.article.recId,
            data,
          })
        }
        this.$router.push('/admin/testimonios')
      }
    },
    loadPreviewImage(value) {
      const that = this
      const file = value.target.files[0]
      if (file) {
        const reader = new FileReader()

        reader.onload = function () {
          that.imagePreview = this.result
        }

        reader.readAsDataURL(file)
      }
    },
    onEditorReady(editor) {
      this.htmlEditor = this.article.description
    },
    onEditorChange({ html }) {
      this.htmlEditor = html
    },
  },
}
</script>

<style scoped>
.form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 5rem;
}
.form input[type='file'] {
  display: none;
}

.form .image-upload {
  width: 100%;
  display: inline-block;
  color: #00107d;
  font-size: 1.8rem;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
}

.form .image-preview {
  display: block;
  width: 100%;
  height: 15rem;
  background-color: #c4c4c4;
  margin-bottom: 20px;
}

.form .image-preview-upload {
  width: 100%;
  height: 15rem;
  margin-bottom: 20px;
}
</style>
