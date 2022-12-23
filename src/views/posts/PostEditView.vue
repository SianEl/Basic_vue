<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PostForm from '@/components/practice/posts/PostForm.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  const { data } = await getPostById(id);
  //form.value = { ...data }; // 객체복사하며 대입
  // 객체복사를 하는 이유는 posts에서 데이터를 수정할 때 주소참조로 인해 연동되면서 값이 변하는 것을 막기 위해
  setForm(data);
};
fetchPost();

const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};

const goDetailPage = () => {
  router.push({ name: 'PostDetail', params: { id } });
};

const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    router.push({ name: 'PostDetail', params: { id } });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
