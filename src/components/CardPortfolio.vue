<template>
  <div>
    <div
      class="h-[570px] w-full rounded-lg overflow-hidden bg-white dark:bg-[#363636] shadow-2xl"
    >
      <img class="h-[260px] w-[583px] sm:w-[475px] lg:w-[396px] " src="../assets/rin.webp" alt="" />
      <div class="p-4 flex flex-col justify-between h-[310px]">
        <h5 class="text-xl text-center dark:text-white">
          Project Tile goes here
        </h5>

        <p
          style="
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            display: -webkit-box;
          "
          class="dark:text-white"
        >
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </p>

        <span class="text-sm dark:text-[#CCCCCC]"
          >Tech stack: HTML, JavaScript, SASS, React</span
        >
        <div class="flex justify-between text-white gap-4">
          <!-- <div class="flex gap-4 items-center">
              <font-awesome-icon icon="fa-solid fa-link" />
              <a href="#">Live Preview</a>
            </div>
            <div class="flex gap-4 items-center">
              <font-awesome-icon icon="fa-brands fa-github" />
              <a href="#">View Code</a>
            </div> -->
          <div class="bg-slate-400 rounded-xl p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-code-slash"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </div>

          <a class="button-sea-green rounded-xl p-2 w-full text-center" href="#"
            >Live View</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>

.button-sea-green {
  background-color: #6c9a6c;
}
.button-sea-green:hover {
  /*  transition: all 600ms ease-in-out; */
  background-color: rgb(143, 188, 143, 0.9);
}
</style>
