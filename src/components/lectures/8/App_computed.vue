<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <!-- <span>{{ teacher.lectures.length > 0 ? 'Yes' : 'No' }}</span> -->
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <hr />
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <hr />
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <hr />
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup() {
    const teacher = reactive({
      name: '짐코딩',
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
    });

    const hasLecture = computed(() => {
      // console.log 결과가 1번만 나온 것을 보아 computed는 결과를 캐싱처리한다.
      // 캐싱이 변경되는 시점은 반응형 데이터가 변경되는 시점이다.
      console.log('computed');
      return teacher.lectures.length > 0 ? 'Yes' : 'No';
    });

    const existLecture = () => {
      console.log('method');
      return teacher.lectures.length > 0 ? 'Yes' : 'No';
    };

    const firstName = ref('홍');
    const lastName = ref('길동');

    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value;
      },
      set(value) {
        console.log('value: ', value);
        console.log(value.split(' '));
        [firstName.value, lastName.value] = value.split(' '); // 구조분해 할당
      },
    });

    console.log('Console 출력: ', fullName.value);
    fullName.value = '짐 코딩';

    return {
      teacher,
      hasLecture,
      existLecture,
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
