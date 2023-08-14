<template>
  <section
    id="tech"
    class="flex flex-col text-center min-h-[calc(100vh-80px)] justify-center"
  >
    <h3 class="text-4xl dark:text-white">Mis Habilidades</h3>
    <h4 class="text-2xl text-[#666666] dark:text-[#A7A7A7]">
      Tecnologías con las que he estado trabajando recientemente
    </h4>
    <div
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-items-center gap-4 py-10"
    >
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/html-5.svg"
        alt="html"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/css-3.svg"
        alt="css"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/javascript.svg"
        alt="javascript"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/vue.svg"
        alt="vue"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/bootstrap.svg"
        alt="bootstrap"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
        alt="tailwind"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/flutter.svg"
        alt="flutter"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/git-icon.svg"
        alt="git"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/visual-studio-code.svg"
        alt="visualstudio"
      />
      <img
        class="imgStack dark:hidden"
        src="https://cdn.svgporn.com/logos/github-icon.svg"
        alt="github"
      />
      <img
        class="imgStack hidden dark:block"
        src="https://logodix.com/logo/64439.png"
        alt="git"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/nodejs-icon.svg"
        alt="nodejs"
      />
      <img
        class="imgStack"
        src="https://cdn.svgporn.com/logos/vuetifyjs.svg"
        alt="vuetify"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.imgStack {
  width: 80px;
  height: 80px;
}

@media (min-width: 640px) {
  .imgStack {
    width: 120px;
    height: 120px;
  }
}
</style>
