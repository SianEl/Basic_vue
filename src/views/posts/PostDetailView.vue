<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { deletePost, getPostById } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: String,
});

//const route = useRoute();
const router = useRouter();
// const id = route.params.id;
const post = ref({});
/**
 * ref 선언 시 장점 : 객체할당이 가능 <-> reactive 선언 시 단점: reactive로 객체할당할 경우 반응형을 잃음
 * ref 선언 시 단점 : 데이터 호출시 .value를 붙여야 함 <-> reactive 선언 시 장점 : 데이터 호출시 .value 안 붙여도 됨
 */

const fetchPost = async () => {
  try {
    console.log(typeof props.id);
    const { data } = await getPostById(props.id);
    //form.value = { ...data }; // 객체복사하며 대입
    // 객체복사를 하는 이유는 posts에서 데이터를 수정할 때 주소참조로 인해 연동되면서 값이 변하는 것을 막기 위해
    setPost(data);
  } catch (error) {
    console.error(error);
  }
};
fetchPost();

const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};

const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};

const goEditPage = () => {
  router.push({
    name: 'PostEdit',
    params: { id: props.id },
  });
};

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }
    await deletePost(props.id);
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
