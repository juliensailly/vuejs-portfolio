<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const locale = useI18n().locale

watch(locale, () => {
  updateText()
})

const props = defineProps({
  md: {
    type: String
  },
  disableHash: {
    type: Boolean,
    default: false
  }
})

var textIndications = {}

function updateText() {
  var md = props.md

  if (md == '' || md == null) md = '# Default Title\n\nDefault text'

  md = md.replaceAll(' **', ' <strong>').replaceAll('**', '</strong>').replaceAll('^^^ ', '</sup> ').replaceAll('^^^', '<sup>')

  md = md.match(/[^\n]+/g)
  textIndications = {}
  var index = 0

  md.forEach((line) => {
    if (line.startsWith('##')) {
      textIndications[index] = {
        type: 'h2',
        text: line.replace('##', props.disableHash ? '' : '#').trim()
      }
    } else if (line.startsWith('#')) {
      textIndications[index] = {
        type: 'h1',
        text: line.replace('#', props.disableHash ? '' : '#').trim()
      }
    } else {
      textIndications[index] = { type: 'p', text: line.trim() }
    }
    index++
  })
}

updateText()
</script>

<template>
  <div>
    <div v-for="(line, index) in textIndications" :key="index">
      <h1
        class="text-4xl font-sans font-extrabold dark:text-white"
        v-if="line.type == 'h1'"
        v-html="line.text"
      ></h1>
      <h2
        class="mb-2 text-2xl font-sans font-semibold dark:text-white"
        v-else-if="line.type == 'h2'"
        v-html="line.text"
      ></h2>
      <p class="mb-2 text-justify" v-else-if="line.type == 'p'" v-html="line.text"></p>
    </div>
  </div>
</template>
