<template>
  <p :style="dateStyle">{{ dateFormatted }}</p>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '000',
    },
    fontSize: {
      type: String,
      default: '1.4',
    },
  },
  computed: {
    dateFormatted() {
      const month = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ]
      const dateSplitted = this.date.split('-')

      const getMonth = month[+dateSplitted[1] - 1]

      return `${dateSplitted[2]} de ${getMonth}, ${dateSplitted[0]}`
    },
    dateStyle() {
      return `font-size: ${this.fontSize}rem;color: #${this.color};`
    },
  },
}
</script>
