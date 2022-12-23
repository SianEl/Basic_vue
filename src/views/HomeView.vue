<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid
      :items="itemsRef"
      #default="{ item }"
      col-class="col-3"
      @delete="deleteItemRef"
    >
      <AppCard>
        {{ item }}
      </AppCard>
    </AppGrid>
    <button
      type="button"
      @click="
        itemsRef.push({
          id: itemsRef.length + 1,
          name: '사과' + (itemsRef.length + 1),
          check: true,
        })
      "
    >
      추가
    </button>
    <hr class="my-4" />
    <AppGrid
      :items="itemsReactive.list"
      #default="{ item }"
      col-class="col-3"
      @delete="deleteItemReactive"
    >
      <AppCard>
        {{ item }}
      </AppCard>
    </AppGrid>
    <button
      type="button"
      @click="
        itemsReactive.list.push({
          id: itemsReactive.list.length + 1,
          name: '딸기' + (itemsReactive.list.length + 1),
          check: true,
        })
      "
    >
      추가
    </button>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppCard from '@/components/practice/AppCard.vue';
import AppGrid from '@/components/practice/AppGrid.vue';
const route = useRoute();
console.log('route.path: ', route.path);

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

let itemsRef = ref([
  { id: 1, name: '사과1', check: true },
  { id: 2, name: '사과2', check: true },
  { id: 3, name: '사과3', check: true },
  { id: 4, name: '사과4', check: true },
]);

let itemsReactive = reactive({
  list: [
    { id: 1, name: '딸기1', check: true },
    { id: 2, name: '딸기2', check: true },
    { id: 3, name: '딸기3', check: true },
    { id: 4, name: '딸기4', check: true },
  ],
});

const deleteItemRef = id => {
  let tempItems = itemsRef.value.filter(item => item.id !== id);
  itemsRef.value = tempItems;
};

const deleteItemReactive = id => {
  let tempItems = itemsReactive.filter(item => item.id !== id);
  itemsReactive = tempItems;
};

watch(itemsRef.value, (newValue, oldValue) => {
  console.log(newValue);
  console.log(oldValue);
});

const updateItemReactive = id => {
  // let tempItem = itemsReactive.find(item => item.id === id);
  // tempItem.check = !tempItem.check;
  itemsReactive[0].check = !itemsReactive[0].check;
};
</script>

<style lang="scss" scoped></style>
