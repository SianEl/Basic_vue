<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter v-model:title="params.title_like" v-model:limit="params._limit">
    </PostFilter>
    <hr class="my-4" />
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goPage(item.id)"
        ></PostItem>
      </template>
    </AppGrid>
    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="page => (params._page = page)"
    ></AppPagination>
    <hr class="my-5" />
    <template v-if="posts && posts.length > 0">
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import PostItem from '@/components/practice/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/practice/AppCard.vue';
import AppPagination from '@/components/practice/AppPagination.vue';
import AppGrid from '@/components/practice/AppGrid.vue';
import PostFilter from '@/components/practice/posts/PostFilter.vue';
import { ref, computed, watchEffect } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
});

//pagination
const totalCount = ref(0);
const pageCount = computed(() => {
  return Math.ceil(totalCount.value / params.value._limit);
});

const fetchPosts = async () => {
  try {
    // getPosts() // Promise - 비동기 객체
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //   });
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers['x-total-count'];
    // ({data: posts.value} = await getPosts())
  } catch (error) {
    console.error(error);
  }
};
watchEffect(fetchPosts); // 콜백함수(fetchPosts)안에 있는 반응형 데이터가 변경되는 것을 감지해 다시 호출
// fetchPosts();
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
