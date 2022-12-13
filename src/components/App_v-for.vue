<template>
  <div>
    <h2>v-for item</h2>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item }}</li>
    </ul>
    <hr />
    <h2>v-for item, index</h2>
    <ol>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ol>
    <hr />
    <h2>짝수만 출력</h2>
    <ul>
      <template v-for="(item, index) in items" :key="index">
        <li v-if="item.id % 2 === 0">
          {{ item }}
        </li>
      </template>
    </ul>
    <hr />
    <h2>짝수만 출력 - computed</h2>
    <ul>
      <template v-for="(item, index) in evenItems" :key="index">
        <li>
          {{ item }}
        </li>
      </template>
    </ul>
    <hr />
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ index }} - {{ key }} - {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  setup() {
    const items = reactive([
      { id: 1, message: 'Java' },
      { id: 2, message: 'HTML' },
      { id: 3, message: 'CSS' },
      { id: 4, message: 'Javascript' },
    ]);

    const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

    const myObject = reactive({
      title: '제목',
      author: '홍길동',
      publishedAt: '2016-04-01',
    });

    return {
      items,
      evenItems,
      myObject,
    };
  },
};
</script>

<style lang="scss" scoped></style>
