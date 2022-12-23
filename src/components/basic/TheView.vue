<template>
  <main>
    <div class="container py-4">
      <MyButton @click="sayHello"></MyButton>
      <hr />
      <FancyButton>Click!!</FancyButton>
      <FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
      <hr />
      <AppCard>
        <!-- <template v-slot:[slotArgs]>제목입니다.</template>
        <template v-slot:default></template>
        <template #footer>푸터입니다.</template> -->
        <template v-slot="slotProps">
          {{ slotProps.childMessage }}
        </template>
      </AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from '@/components/basic/MyButton.vue';
import FancyButton from '@/components/basic/FancyButton.vue';
import AppCard from '@/components/basic/AppCard.vue';
import { reactive, ref } from 'vue';
export default {
  components: {
    MyButton,
    FancyButton,
    AppCard,
  },
  setup() {
    const items = reactive([
      {
        id: 1,
        name: '사과',
      },
    ]);

    const sayHello = () => {
      alert('안녕하세요!!');
    };

    const slotArgs = ref('header');
    return { sayHello, slotArgs };
  },
};
</script>

<style scoped>
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 12px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
