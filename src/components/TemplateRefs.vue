<template>
  <div class="container py-4">
    <input ref="inputRef" type="text" />
    <p>{{ inputRef }}</p>
    <p v-if="inputRef">
      {{ inputRef.value }}, {{ $refs.inputRef.value }},
      {{ inputRef === $refs.inputRef }}
    </p>
    <hr />
    <ul>
      <!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
      <li
        v-for="fruit in fruits"
        :key="fruit"
        :ref="el => itemRefs.push(el.textContent)"
      >
        {{ fruit }}
      </li>
    </ul>
    <hr />
    <TemplateRefsChild ref="child"></TemplateRefsChild>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
export default {
  components: {
    TemplateRefsChild,
  },
  setup() {
    const inputRef = ref(null); // input태그의 ref값이랑 동일한 이름의 ref변수 선언
    onMounted(() => {
      inputRef.value.value = 'Hello Wrold!!';
      console.log('onMounted: ', inputRef.value);
      console.log(itemRefs.value);
      // itemRefs.value.forEach(item => console.log('item: ', item.textContent));
      itemRefs.value.forEach(item => console.log('item: ', item));

      console.log('child.message: ', child.value.message);
      console.log('child.sayHello: ', child.value.sayHello);
      child.value.sayHello();
    });

    const fruits = ref(['사과', '딸기', '포도']);
    const itemRefs = ref([]); //v-for에서 만든 DOM 요소를 itemRefs에 대입
    const child = ref(null);

    return { inputRef, fruits, itemRefs, child };
  },
};
</script>

<style lang="scss" scoped></style>
