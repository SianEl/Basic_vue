<template>
  <div>
    <div>
      <h1>양방향 바인딩</h1>
      <input type="text" v-model="inputValue" />
      <button @click="valueCheck">확인</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');

    const valueCheck = () => {
      console.log(inputValue.value);
    };

    return {
      inputValue,
      valueCheck,
    };
  },
};
</script>

<style lang="scss" scoped></style>
