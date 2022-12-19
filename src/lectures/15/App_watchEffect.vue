<template>
  <div>
    <form action="" @submit.prevent="save(title, contents)">
      <input v-model.lazy="title" type="text" placeholder="title" />
      <textarea v-model.lazy="contents" placeholder="contents"></textarea>
      <hr />
      <button>저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
    };

    watchEffect(() => {
      console.log('watchEffect');
      save(title.value, contents.value);
    });

    return {
      title,
      contents,
      save,
    };
  },
};
</script>

<style lang="scss" scoped></style>
