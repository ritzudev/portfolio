<template>
  <div
    v-for="(item, index) in projectsCard"
    :key="index"
    class="h-[570px] w-full rounded-lg overflow-hidden bg-white dark:bg-[#363636] shadow-2xl border dark:border-none"
  >
    <div class="h-[260px] p-2 w-[583px] sm:w-full lg:w-full group overflow-hidden hover:scale-[1] transition-all  duration-[850ms] rounded-lg" >
      <img
      class="h-full w-full group-hover:scale-[1.5] transition-all  duration-1000 rounded-lg"
      :src="item.image"
      :alt="item.name"
    />
    </div>
    <div class="p-4 flex flex-col h-[310px] gap-4">
      <h5 class="text-xl text-center dark:text-white">
        {{ item.name }}
      </h5>

      <p
        style="
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        "
        class="dark:text-white flex flex-grow"
      >
        {{ item.description }}
      </p>

      <span class="text-sm dark:text-[#CCCCCC]"
        >Tech stack: {{ item.stack }}</span
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
        <a :href="item.github_link" class="bg-slate-400 opacity-80 hover:opacity-100 rounded-xl p-2">
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
        </a>

        <a
          :href="item.page_link"
          class="button-sea-green rounded-xl p-2 w-full text-center"
          href="#"
          >Live View</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import WeatherI from '../assets/images_port/weather-app.png'
import BVBEscudo from '../assets/images_port/bvb-escudo.jpg'
import RickMortyI from '../assets/images_port/rick&morty.png'
import TipsCalculator from '../assets/images_port/tips-calculator.png'

const projectsCard = ref([
  {
    name: "BVB News Blog",
    image: BVBEscudo,
    description:
      "Weather app, this is sample project description random things are here in description",
    github_link: "https://github.com/ritzudev/newsbvb",
    page_link: "https://newsbvb.netlify.app/",
    stack: " HTML, Tailwind, JavaScript, Vue",
  },
  {
    name: "Tips Calculator",
    image: TipsCalculator,
    description:
      "Weather app, this is sample project description random things are here in description",
    github_link: "https://github.com/ritzudev/weather-app",
    page_link: "https://weather-app-ritzu.netlify.app/",
    stack: " HTML, JavaScript, Vue",
  },
  {
    name: "Rick & Morty",
    image: RickMortyI,
    description:
      "Weather app, this is sample project description random things are here in description",
    github_link: "https://github.com/ritzudev/weather-app",
    page_link: "https://weather-app-ritzu.netlify.app/",
    stack: " HTML, JavaScript, NextJS",
  },
  {
    name: "Weather App",
    image: WeatherI,
    description:
      "Weather app, this is sample project description random things are here in description",
    github_link: "https://github.com/ritzudev/weather-app",
    page_link: "https://weather-app-ritzu.netlify.app/",
    stack: " HTML, JavaScript, NextJS",
  },
]);
</script>

<style scoped>
.button-sea-green {
  background-color: #73b173;
  opacity: 0.80;
}
.button-sea-green:hover {
  /*  transition: all 600ms ease-in-out; */
  /* background-color: rgb(143, 188, 143, 0.9); */
  opacity: 1;
}
</style>
