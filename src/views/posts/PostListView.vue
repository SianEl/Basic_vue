<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="4"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/practice/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/practice/AppCard.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const fetchPosts = async () => {
  try {
    // getPosts() // Promise - 비동기 객체
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //   });
    const { data } = await getPosts();
    posts.value = data;
    // ({data: posts.value} = await getPosts())
  } catch (error) {
    console.error(error);
  }
};
fetchPosts();
const goPage = id => {
  // router.push(`/posts/${id}`);
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  });
};
</script>

<style lang="scss" scoped></style>
