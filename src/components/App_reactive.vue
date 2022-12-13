<template>
  <div>
    <button v-on:click="increment">Click {{ state.count }}</button>
    <button v-on:click="increment">Click {{ state.deep.count }}</button>
    <p>{{ message }}</p>
    <button v-on:click="addMessage">add Click</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const state = reactive({
      count: 0,
      deep: {
        count: 0,
      },
    });
    const increment = () => {
      state.count++;
      state.deep.count++;
    };

    const message = ref('Hello Vue!'); // reactive 함수는 객체형만 반응형으로 작업을 할 수 있다. -> message는 string타입이여서 반응형으로 대체되지 않음
    const addMessage = () => {
      message.value = message.value + '!';
    };

    console.log('message: ', message);
    console.log('message typeof: ', typeof message.value);

    return {
      state,
      message,
      increment,
      addMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
