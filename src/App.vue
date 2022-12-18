<template>
  <div>
    <TheNav></TheNav>
    <TheView></TheView>
    <!-- <AppCard></AppCard> -->
  </div>
</template>

<script>
import { ref } from 'vue';
import TheNav from './components/lectures/17/TheNav.vue';
import TheView from './components/lectures/17/TheView.vue';
export default {
  components: {
    TheNav,
    TheView,
  },
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
