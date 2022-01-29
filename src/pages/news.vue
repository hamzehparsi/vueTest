<template>
  <div class="divide-y-2">
    <FilterNews />
    <SortNews />
    <div v-for="newsItem in newsItems" :key="newsItem.id">
      <NewsArticle class="py-5" :newsItem="newsItem" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
import NewsArticle from "../components/NewsArticle.vue";
import FilterNews from "../components/FilterNews.vue";
import SortNews from "../components/SortNews.vue";

export default {
  name: "NewsPage",
  components: {
    NewsArticle,FilterNews,SortNews
  },
  setup(props) {
    const store = useStore();
    const newsItems = computed(() => store.state.news.newsItems);
    async function getNewsItems() {
      await store.dispatch("news/getNews");
    }
    getNewsItems();
    return {
      newsItems,
      getNewsItems,
    };
  },
};
</script>

<style scoped></style>
