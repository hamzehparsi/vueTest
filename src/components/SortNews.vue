<template>
  <div class="py-4 space-x-4">
    <button class="bg-gray-200 rounded-md px-2 py-1" @click="sortNews()">Sort Accending</button>
    <button class="bg-gray-200 rounded-md px-2 py-1" @click="unSortNews()">Sort Descending</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    // const searchText = ref("");
    function sortNews() {
      store.commit("news/sortNews");
    }
    function unSortNews() {
      store.commit("news/unSortNews");
    }

    return {
      // test,
      sortNews,
      unSortNews,
    };
  },
};
</script>

<style scoped></style>
