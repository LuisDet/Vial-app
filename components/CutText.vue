<template>
  <span>
    <BaseText :title="text">
      {{ textTruncated }}
    </BaseText>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    cut: {
      type: Number,
      default: null,
    },
  },
  computed: {
    textTruncated() {
      return this.truncateText()
    },
  },
  methods: {
    truncateText() {
      const textLength = this.text.length

      const mappedWord = []
      let accumulatedWordLength = 0

      if (textLength <= this.cut) {
        return this.text
      }

      const textSplit = this.text.split(' ')

      for (const word of textSplit) {
        accumulatedWordLength = word.length + accumulatedWordLength
        if (accumulatedWordLength <= this.cut) {
          mappedWord.push(word)
        } else {
          break
        }
      }
      return mappedWord.join(' ') + '...'
    },
  },
}
</script>
