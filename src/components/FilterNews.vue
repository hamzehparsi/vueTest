<template>
  <div class="pb-7">
    <input
      class="border-2 border-gray-400 px-2 py-1 rounded-lg"
      v-model="text"
      @input="ts()"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const text = ref("");
    if (text.value != '') {
      test()
    }
    function test(searchText) {
      store.commit("news/filteredNews", searchText);
    }
    function ts() {
      store.commit("news/ts");
    }
    return {
      test,
      ts,
      text,
    };
  },
};
</script>

<style scoped></style>
