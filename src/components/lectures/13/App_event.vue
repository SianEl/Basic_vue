<template>
  <div>
    <div>
      <button @click="counter++">counter {{ counter }}</button>
    </div>
    <hr />
    <div>
      <button @click="printEventInfo">printEventInfo</button>
    </div>
    <hr />
    <div>
      <button @click="printEventInfo2('hello world', $event)">
        inline event handler
      </button>
    </div>
    <hr />
    <input type="text" @keyup="onKeyUpHandler" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);
    const printEventInfo = event => {
      console.log(event.target);
      console.log(event.target.tagName);
    };

    const printEventInfo2 = (message, event) => {
      console.log('message: ' + message);
      console.log(event.target);
      console.log(event.target.tagName);
    };

    const onKeyUpHandler = event => {
      console.log('event.key: ', event.key);
    };

    return {
      counter,
      printEventInfo,
      printEventInfo2,
      onKeyUpHandler,
    };
  },
};
</script>

<style lang="scss" scoped></style>
