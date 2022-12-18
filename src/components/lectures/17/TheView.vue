<template>
  <main>
    <div class="container py-4">
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
        <template v-for="(item, index) in posts" :key="index">
          <div class="col col-4">
            <AppCard
              v-bind="item"
              @toggle-like="item.isLike = !item.isLike"
            ></AppCard>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from './AppCard.vue';
export default {
  components: {
    AppCard,
  },
  setup() {
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
    return {
      post,
      posts,
    };
  },
};
</script>

<style lang="scss" scoped></style>
