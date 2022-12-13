<template>
  <div>
    <div class="text" :class="classObject">텍스트 입니다.</div>
    <div class="text" :class="[activeClass, errorClass]">텍스트 입니다2.</div>
    <button type="button" v-on:click="toggle">toggle</button>
    <button type="button" v-on:click="hasError = !hasError">toggleError</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(false);

    const classObject = computed(() => {
      return {
        active: isActive.value && !hasError.value,
        'text-danger': !isActive.value && hasError.value,
      };
    });

    const activeClass = ref('active');
    const errorClass = ref('text-danger');

    const toggle = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      toggle,
      hasError,
      classObject,
      activeClass,
      errorClass,
    };
  },
};
</script>

<style scoped>
.active {
  font-weight: 900;
}
.text-danger {
  color: red;
}
</style>
