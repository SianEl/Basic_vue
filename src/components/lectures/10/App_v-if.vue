<template>
  <div>
    <h2 v-if="visible">Hello Vue3!</h2>
    <h2 v-else>false 입니다.</h2>
    <button v-on:click="visible = !visible">toggle</button>
    <hr />
    <h2 v-if="type === 'A'">A입니다.</h2>
    <h2 v-else-if="type === 'B'">B입니다.</h2>
    <h2 v-else-if="type === 'C'">C입니다.</h2>
    <h2 v-else>A, B, C가 아닙니다.</h2>
    <button v-on:click="type = 'A'">A</button>
    <button v-on:click="type = 'B'">B</button>
    <button v-on:click="type = 'C'">C</button>
    <button v-on:click="type = 'D'">D</button>
    <hr />
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <hr />
    <h1 v-show="ok">Title 입니다.</h1>
    <!-- v-show는 렌더링은 되어 있지만 display가none으로 바뀌는 형태, if는 렌더링 자체가 안되는 형태-->
    <button v-on:click="ok = !ok">show toggle</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(true);
    const type = ref('A');
    const ok = ref(true);
    return {
      visible,
      type,
      ok,
    };
  },
};
</script>

<style lang="scss" scoped></style>
