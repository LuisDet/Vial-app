<template>
  <div class="toolkit-container">
    <ModalDelete :id="id" slot="" @delete="deleteElement" @close="modalClose" />
    <div class="toolkit" :style="positionToolkit">
      <NuxtLink
        :to="{ path: `/admin/${section}/${id}` }"
        class="btn toolkit-edit"
      >
        Editar
      </NuxtLink>
      <button class="btn toolkit-delete" @click="$modal.show(id)">
        Eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    section() {
      return this.$store.state.section
    },
  },
  methods: {
    deleteElement() {
      this.$store.dispatch('service/deleteService', { doc: this.id })
      this.modalClose()
    },
    modalClose() {
      this.$modal.hide(this.id)
      this.showToolkit = !this.showToolkit
    },
  },
}
</script>

<style scoped>
.toolkit-container {
  height: 3vh;
}
.btn {
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 5px 20px;
  width: 100%;
  text-align: center;
  transition: all 0.2s;
  text-decoration: none;
}
.toolkit {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid rgb(222, 222, 223);
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.toolkit-edit {
  color: #00107d;
}
.toolkit-edit:hover {
  background-color: #00107d;
  color: #fff;
}
.toolkit-delete {
  color: #eb5757;
}
.toolkit-delete:hover {
  background-color: #eb5757;
  color: #fff;
}
</style>
