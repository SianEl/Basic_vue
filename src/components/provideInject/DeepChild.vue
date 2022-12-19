<template>
  <div class="card">
    <div class="card-header">DeepChild Component</div>
    <div class="card-body">
      <p>staticMessage: {{ staticMessage }}</p>
      <p>message: {{ message }}</p>
      <p>count: {{ count }}</p>
      <p>appMessage: {{ appMessage }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const staticMessage = inject('static-message', 'default message'); // inject('provide-key', 'default value')
    const { message, updateMessage } = inject('message');
    updateMessage('!');
    message.value = message.value + '!'; // 여기서 작업X
    const count = inject('count');

    const appMessage = inject('app-message');

    return { staticMessage, message, count, appMessage };
  },
};
</script>

<style lang="scss" scoped></style>
