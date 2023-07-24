<template>
  <div class="flex items-center w-full justify-between mx-auto max-w-4xl ">
    <h1 class="px-2 font-bold">ritzu.dev</h1>
    <div>
      <button class="p-2 mt-2" v-if="session" ><img src="../assets/vue.svg" alt=""></button>
      <h1 v-else>Sing Out</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      session: true,
    };
  },
};
</script>