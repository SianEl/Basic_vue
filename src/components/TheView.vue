<template>
  <main>
    <div class="container py-4">
      <PostCreate @create-post="createPost"></PostCreate>
      <hr class="my-4" />

      <div class="row g-3">
        <div class="col col-4">
          <AppCard title="제목1" contents="내용1"></AppCard>
        </div>
        <div class="col col-4">
          <AppCard
            :title="post.title"
            :contents="post.contents"
            :is-like="post.isLike"
            :type="post.type"
            @toggle-like="post.isLike = !post.isLike"
          ></AppCard>
        </div>
        <div class="col col-4">
          <AppCard
            v-bind="post"
            @toggle-like="post.isLike = !post.isLike"
          ></AppCard>
        </div>
        <div class="col col-4">
          <app-card
            :title="post.title"
            :contents="post.contents"
            :is-like="post.isLike"
            :type="post.type"
            @toggle-like="post.isLike = !post.isLike"
          ></app-card>
        </div>
        <div v-for="(item, index) in posts" :key="index" class="col col-4">
          <AppCard
            v-bind="item"
            @toggle-like="item.isLike = !item.isLike"
          ></AppCard>
        </div>
      </div>

      <hr class="my-4" />
      <!-- 
        사용자 정의 컴포넌트
        modelValue = props
        update:modelValue = event
      -->
      <LabelInput v-model="username" label="이름"></LabelInput>
      <LabelTitle v-model:title="username" label="제목"></LabelTitle>
    </div>
  </main>
</template>

<script>
import { reactive, ref, watch } from 'vue';
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
export default {
  components: {
    AppCard,
    PostCreate,
    LabelInput,
    LabelTitle,
  },
  setup() {
    const username = ref('');
    watch(username, (newValue, oldValue) => {
      console.log(oldValue, newValue);
    });
    const post = reactive({
      title: '제목2',
      contents: '내용2',
      type: 'notice',
      isLike: true,
    });

    const posts = reactive([
      { title: '제목01', contents: '내용01', isLike: true, type: 'news' },
      { title: '제목02', contents: '내용02', isLike: false, type: 'notice' },
      { title: '제목03', contents: '내용03', isLike: true, type: 'news' },
      { title: '제목04', contents: '내용04', isLike: false, type: 'news' },
      { title: '제목05', contents: '내용05', isLike: true, type: 'notice' },
    ]);

    const createPost = newPost => {
      posts.push(newPost);
    };

    return {
      username,
      post,
      posts,
      createPost,
    };
  },
};
</script>

<style lang="scss" scoped></style>
