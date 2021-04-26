<template>
  <div class="body">
    <main>
      <div class="wrapper">
        <div>
          <h2 class="control-panel_title">Categoria</h2>
        </div>
        <div>
          <NuxtLink to="/admin/categorias/create" class="btn btn--blue">
            Crear categoria
          </NuxtLink>
        </div>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category of categories" :key="category.recId">
              <td>{{ category.category }}</td>
              <td>
                <NuxtLink :to="'/admin/categorias/' + category.recId">
                  Editar
                </NuxtLink>
              </td>
              <td>
                <button @click="openModal(category.recId)">Borrar</button>
              </td>
              <ModalDelete
                :id="category.recId"
                @delete="deleteElement(category.recId)"
                @close="modalClose(category.recId)"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'authenticated',
  computed: {
    categories() {
      return this.$store.state.service.categories
    },
  },
  async mounted() {
    if (this.categories.length === 0)
      await this.$store.dispatch('service/setCategory')
  },
  methods: {
    openModal(id) {
      this.$modal.show(id)
    },
    deleteElement(id) {
      this.$store.dispatch('service/deleteCategory', { doc: id })
      this.modalClose()
    },
    modalClose(id) {
      this.$modal.hide(id)
    },
  },
}
</script>

<style scoped>
.body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.wrapper {
  padding: 0 3rem;
}

.control-panel_title {
  font-size: 36px;
  color: #000;
  margin-bottom: 4rem;
}

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

main {
  width: 85%;
  margin-left: 15vw;
}

.btn {
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn--blue {
  background-color: #00107d;
  color: #fff;
}

table {
  width: 100%;
  border-spacing: 0;
  -webkit-box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-color: #fff;
}

thead {
  background-color: #f2f2f2;
  padding: 0;
  margin: 0;
}

thead th {
  margin: 0;
  padding: 1.2rem 1rem;
  font-size: 1.5rem;
  text-align: left;
}

tbody tr:not(:last-child) {
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

tbody td {
  margin: 0;
  padding: 1.2rem 1rem;
  font-size: 1.5rem;
  text-align: left;
  color: #4f4f4f;
}

tbody td a,
tbody td button {
  padding: 10px;
  font-family: inherit;
  border: none;
  background-color: transparent;
  color: #00107d;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
}

tbody td a:hover,
tbody td button:hover {
  background-color: rgba(0, 16, 125, 0.2);
}
.form-category-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 1rem;
  gap: 1rem;
}

.form-category-container input {
  border: none;
  padding: 1rem;
  font-size: 1.4rem;
  color: #192a3e;
  border-radius: 10px;
  border: 1px solid #d9dee2;
}

.form-category-container button {
  border: none;
  background-color: #00107d;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  padding: 1rem 2rem;
  cursor: pointer;
}

.category-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 1rem;
  margin-bottom: 6rem;
}

.category-container .category-item {
  background-color: #d9dee2;
  padding: 0.8rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 10px;
  gap: 2rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.category-container .category-item .category-title {
  font-size: 1.4rem;
  margin: 0;
  color: #3c3c3c;
}

.category-container .category-item button {
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  color: #eb5757;
  font-weight: 700;
  font-size: 1.4rem;
  padding: 0.4rem;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.category-container .category-item button:hover {
  background-color: #eb5757;
  border-radius: 5px;
  color: #fff;
}
</style>
