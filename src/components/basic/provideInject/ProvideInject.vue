<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">ProvideInject Component</div>
      <div class="card-body">
        <button @click="count++">Click</button>
        {{ appMessage }}
        <ShallowChild></ShallowChild>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, readonly, inject } from 'vue';
import ShallowChild from './ShallowChild.vue';
export default {
  components: {
    ShallowChild,
  },
  setup() {
    const staticMessage = 'static message';
    const message = ref('message');
    const updateMessage = appendMessage => {
      message.value = message.value + appendMessage;
    };

    const count = ref(10);

    provide('static-messgae', staticMessage);
    provide('message', { message: readonly(message), updateMessage });
    provide('count', count);

    const appMessage = inject('app-message');
    return { count, appMessage };
  },
};
</script>

<style lang="scss" scoped></style>
