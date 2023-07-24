<template>
  <div class="min-h-screen dark:bg-[#191919]">
    <div class="max-w-7xl h-full mx-auto transition-all duration-700 px-6">
      <header class="py-6">
        <div class="flex h-12 justify-between dark:text-[#A7A7A7]">
          <img src="../assets/dojo-icon.svg" alt="" />
          <nav class="flex flex-row items-center gap-4" id="header_list">
            <div class="hidden items-center gap-4 md:flex">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Tech Stack</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
            <div class="flex items-center justify-start overflow-hidden gap-4">
              <a href="#" target="_blank">
                <img src="../assets/svgs/github.svg" alt="logogithub" />
              </a>
              <a href="#" target="_blank">
                <img src="../assets/svgs/linkedin.svg" alt="logolinkedin" />
              </a>

              <DarkModeVue
                style="transform-origin: left"
                class="scale-[0.6] -mr-9"
              />
            </div>
            <font-awesome-icon
              icon="fa-solid fa-bars"
              size="xl"
              class="block md:hidden"
            />
          </nav>
        </div>
      </header>
      <main
        class="grid place-items-center grid-cols-1 md:grid-cols-2 gap-10 dark:text-white py-10"
      >
        <h1 class="text-4xl md:text-6xl">
          Hi
          <span
            class="animate-wiggle-more animate-infinite animate-ease-in-out inline-block"
            >👋</span
          >, <br />

          My name is <br />
          <span id="textName"> Alex FZ </span> <br />
          I build things for web
        </h1>
        <div
          style="clip-path: circle(50% at 50% 50%)"
          class="p-1 bg-gradient-to-r from-sky-500 to-emerald-400"
        >
          <img
            style="clip-path: circle(50% at 50% 50%)"
            class="w-64 h-64 md:w-80 md:h-80"
            src="../assets/rin.png"
            alt=""
          />
        </div>
      </main>
      <div class="flex flex-col text-center">
        <h3 class="text-4xl dark:text-white">My Tech Stack</h3>
        <h4 class="text-2xl text-[#666666] dark:text-[#A7A7A7]">
          Technologies I’ve been working with recently
        </h4>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-items-center gap-4 py-10"
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
      <div class="flex flex-col text-center">
      <h1 class="text-4xl dark:text-white">Project</h1>
      <h4 class="text-2xl text-[#666666] dark:text-[#A7A7A7]">
        Things I’ve built so far
      </h4>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  place-items-center py-10 gap-6 px-6">
      <CardPorfolio />
      <CardPorfolio />
      <CardPorfolio />
      <CardPorfolio />
    </div>
    </div>
    

    

    <footer class="flex justify-center py-10 dark:text-white">
      <h5>
        Designed and built by Ritzudev <span class="text-red-500">❤</span>
      </h5>
    </footer>
  </div>
</template>

<script setup>
import DarkModeVue from "../components/DarkMode.vue";
import CardPorfolio from "../components/CardPortfolio.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap");

* {
  font-family: "Space Mono", monospace;
}

.pathProfile {
  fill: #666;
}
@media (prefers-color-scheme: dark) {
  .pathProfile {
    fill: #a7a7a7;
  }
}

#textName {
  background: linear-gradient(
    90deg,
    rgba(18, 235, 222, 1) 2%,
    rgba(0, 255, 145, 1) 46%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.imgStack {
  width: 120px;
  height: 120px;
}
</style>
