<template>
  <modal
    :name="id"
    :adaptive="true"
    :max-height="110"
    :max-width="450"
    style="background: rgba(0, 16, 125, 0.3)"
  >
    <p class="modal-text">¿Está seguro que desea eliminar este artículo?</p>
    <div class="modal-bottom-container">
      <button class="modal-bottom modal-bottom-delete" @click="deleteElement">
        Borrar
      </button>
      <button class="modal-bottom modal-bottom-close" @click="modalClose">
        Cancelar
      </button>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  methods: {
    deleteElement() {
      this.$emit('delete')
    },
    modalClose() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.modal-text {
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: #000;
  padding: 1rem;
}
.modal-bottom {
  border: none;
  padding: 10px 8px;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1.25px;
  cursor: pointer;
}
.modal-bottom:hover {
  filter: brightness(0.9);
}
.modal-bottom-delete {
  background: #eb5757;
  color: #fff;
}
.modal-bottom-close {
  background: #fff;
  color: #828282;
}
.modal-bottom-container {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
}
</style>
