<template>
  <button class="fancy-btn">
    <slot :fancy-message="fancyMessage">Default Click!!</slot>
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const fancyMessage = ref('Fancy Message');
    return { fancyMessage };
  },
};
</script>

<style lang="scss" scoped></style>
