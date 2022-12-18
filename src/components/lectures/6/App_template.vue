<template>
  <div>
    <p>문자열: {{ message }}</p>
    <!-- message가 바인딩 되어 !가 계속 추가되는 것을 확인 -->

    <p v-once>문자열: {{ message }}</p>
    <!-- 일회성으로 하는 v-once를 사용하여 message가 갱신되지 않는것을 확인-->
    <button v-on:click="addMessage">Click!</button>
    <hr />
    <p>{{ rowHtml }}</p>
    <!--일반 문자열-->

    <p v-html="rowHtml"></p>
    <!--HTML로 치환-->
    <hr />
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려보세요</div>
    <input type="text" :disabled="isInputDisabled" />
    <input v-bind="attrs" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('안녕하세요');
    const addMessage = () => {
      message.value = message.value + '!';
    };
    const attrs = {
      id: 'password-id',
      type: 'password',
      placeHolder: '비밀번호를 입력해주세요',
    };
    const rowHtml = ref('<strong>안녕하세요</strong>');
    const dynamicTitle = ref('안녕하세요!!!');
    const isInputDisabled = ref(true);
    return {
      message,
      rowHtml,
      dynamicTitle,
      attrs,
      isInputDisabled,
      addMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
