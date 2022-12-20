<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-3">
        <PostItem
          :title="post.id"
          :content="post.content"
          :created-at="post.createdAt"
        ></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/practice/posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
const posts = ref([]);

const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();
</script>

<style lang="scss" scoped></style>
