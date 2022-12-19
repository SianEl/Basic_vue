<template>
  <div>
    <!-- div에 non-props 속성들이 들어간다 -> inheritAttrs:false로 방지-->
    <button class="btn btn-primary" type="button">My Button</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
