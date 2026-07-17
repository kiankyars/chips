<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $nav } = useSlideContext()
const showChrome = computed(() => !['cover', 'section'].includes($nav.value.currentLayout))
</script>

<template>
  <div v-if="showChrome" class="course-chrome" aria-hidden="true">
    <div class="course-chrome__label">
      <span class="course-chrome__mark" />
      <span>CHIPS / THE FIVE LAYERS OF AI</span>
    </div>
  </div>
</template>
