<template>
  <div class="w-full max-w-3xl mx-auto">
    <template class="flex space-x-4 py-12">
      <router-link class="font-bold" to="/">home</router-link>
      <router-link class="font-bold" to="/news">News</router-link>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
