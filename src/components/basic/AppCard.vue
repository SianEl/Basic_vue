<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header">#header</slot>
    </div>
    <div class="card-body">
      <slot :child-message="childMessage">#body</slot>
    </div>
    <div v-if="$slots.footer" class="card-footer text-muted">
      <slot name="footer">#footer</slot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const childMessage = ref('자식컴포넌트입니다.');
    return { childMessage };
  },
};
</script>

<style lang="scss" scoped></style>
