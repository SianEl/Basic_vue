<template>
  <div>
    <TheNav></TheNav>
    <TheView></TheView>
    <!-- <AppCard></AppCard> -->
  </div>
</template>

<script>
import TheNav from '../../components/lectures/17/TheNav.vue';
import TheView from '../../components/lectures/17/TheView.vue';
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
