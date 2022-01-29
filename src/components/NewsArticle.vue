<template>
  <div class="flex items-start space-x-4">
    <div class="w-1/3">
      <img :src="newsItem.field_image[0].url" class="font-bold py-2 w-64 h-auto" />
      <ul class="flex list-disc space-x-8 py-2 px-4">
        <template v-for="hashtag in newsItem.field_tags" :key="hashtag">
          <li>{{ hashtag.target_id }}</li>
        </template>
      </ul>
    </div>
    <div class="w-2/3">
      <span>{{ newsItem.created[0].value }}</span>
      <h1 class="font-bold py-2">{{ newsItem.title[0].value }}</h1>
      <p class="font-thin">{{ newsItem.body[0].value.slice(3, -6).substr(0,290) }} <span>Read More ...</span></p>
    </div>
    <!-- {{ newsItem.title }} -->
  </div>
</template>

<script>
export default {
  name: "NewsArticle",
  props: ["newsItem"],
  components: {},
};
</script>

<style scoped></style>
