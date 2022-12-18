<template>
  <div>
    <TheNav></TheNav>
    <TheView></TheView>
    <!-- <AppCard></AppCard> -->
  </div>
</template>

<script>
import TheNav from './TheNav.vue';
import TheView from './TheView.vue';
export default {
  components: {
    TheNav,
    TheView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
