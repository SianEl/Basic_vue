<template>
  <div></div>
</template>

<script>
import { ref, watch, reactive } from 'vue';

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    const obj = reactive({
      count: 0,
    });

    // watch(
    //   () => x.value + y.value,
    //   (sum, oldValue) => {
    //     console.log('sum: ', sum);
    //     console.log(oldValue);
    //   },
    // );

    // watch([x, y], ([newX, newY], [oldX, oldY]) => {
    //   console.log('X: ' + newX, oldX);
    //   console.log('Y: ' + newY, oldY);
    // });

    // watch(
    //   () => {
    //     return obj.count;
    //   },
    //   (newValue, oldValue) => {
    //     console.log('newValue', newValue);
    //     console.log('oldValue', oldValue);
    //   },
    // );

    // watch(obj, (newValue, oldValue) => {
    //   console.log('newValue', newValue); // object 타입을 감지할 때는 같은 객체를 가리키고 있기 때문에 newValue, oldValue가 같은 값을 갖는다.
    //   console.log('oldValue', oldValue);
    // });

    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0,
      },
    });

    watch(person, newValue => {
      console.log('newValue: ', newValue);
    });

    return {
      x,
      y,
      obj,
      person,
    };
  },
};
</script>

<style lang="scss" scoped></style>
