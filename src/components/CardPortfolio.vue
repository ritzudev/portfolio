<template>
  <div>
    <div class="h-[570px] w-[375px] rounded-lg overflow-hidden bg-white dark:bg-[#363636] shadow-2xl">
        <img class="h-[260px] w-full" src="../assets/rin.png" alt="" />
        <div class="p-4 flex flex-col justify-between h-[310px]">
          <h5 class="text-xl text-center dark:text-white  ">Project Tile goes here</h5>

          <p class="dark:text-white">
            This is sample project description random things are here in
            description This is sample project lorem ipsum generator for dummy
            content
          </p>

          <span class="text-sm dark:text-[#CCCCCC]">Tech stack: HTML, JavaScript, SASS, React</span>
          <div class="flex justify-between dark:text-white">
            <div class="flex gap-4 items-center">
              <font-awesome-icon icon="fa-solid fa-link" />
              <a href="#">Live Preview</a>
            </div>
            <div class="flex gap-4 items-center">
              <font-awesome-icon icon="fa-brands fa-github" />
              <a href="#">View Code</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
a:hover{
  border-bottom: 1px solid;
}
</style>