<template>
  <div
    class="bg-[#1e1e2e] min-h-screen flex flex-col gap-4 items-center text-white fuente py-6"
  >
    <div class="rounded-3xl border-2 borde p-1">
      <div class="flex justify-center bg-sky-400 rounded-3xl w-32 h-32">
        <img
          class="w-24"
          src="https://andres04u.github.io/portfolio/assets/img/perfil.png"
          alt=""
        />
      </div>
    </div>
    <h1 class="text-5xl text-center">Alex Flores</h1>
    <h4 class="text-sm">Desarrollador Web</h4>
    <ul class="flex justify-center gap-4 items-center">
      <a href="">
        <img class="w-5" src="../assets/flutter.svg" alt="" />
      </a>
      <a href="">
        <img class="w-5" src="../assets/dojo-icon.svg" alt="" />
      </a>
      <a href="">
        <img class="w-5" src="../assets/nodejs-icon.svg" alt="" />
      </a>
    </ul>
    <section class="flex items-center gap-4">
      <a href="#" class="bg-[#89b4fa] py-3 px-6 rounded-lg">Blog</a>
      <div class="grid grid-cols-3 gap-3">
        <a class="btnicons" href="#"
          ><img class="w-4" src="../assets/metamask-icon.svg" alt=""
        /></a>
        <a class="btnicons" href="#"
          ><img class="w-4" src="../assets/metamask-icon.svg" alt=""
        /></a>
        <a class="btnicons" href="#"
          ><img class="w-4" src="../assets/metamask-icon.svg" alt=""
        /></a>
      </div>
    </section>
    <section>
      <div
        class="flex overflow-x-auto xm:w-80 sm:w-auto gap-3 bg-[#313244] px-2 py-2 rounded-lg"
      >
        <button
          v-for="(item, i) in nav"
          :key="i"
          @click="select = i"
          :class="[select === i ? btnnavh : '', btnnav]"
        >
          {{ item }}
        </button>
      </div>
    </section>
    <section>
      <div v-if="select === 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="w-80 rounded-xl overflow-hidden">
          <img
            class=""
            src="https://andres04u.github.io/portfolio/assets/img/cache_cuantico.webp"
            alt=""
          />
        </div>
        <div class="w-80 rounded-xl overflow-hidden">
          <img
            class=""
            src="https://andres04u.github.io/portfolio/assets/img/cache_cuantico.webp"
            alt=""
          />
        </div>
        <div class="w-80 rounded-xl overflow-hidden">
          <img
            class=""
            src="https://andres04u.github.io/portfolio/assets/img/cache_cuantico.webp"
            alt=""
          />
        </div>
      </div>
      <div
        v-else-if="select === 1"
        class="grid sm:grid-cols-1 md:grid-cols-2 md:gap-24"
      >
        <div>
          <h2 class="py-4 font-bold text-center">Desarrollador Front End</h2>
          <ul class="grid grid-cols-2 py-4 gap-y-4 md:gap-x-20 text-center">
            <li v-for="item in abilitiesdev" :key="item" class="flex gap-2">
              <span
                ><svg
                  style="width: 20px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#89b4fa"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#89b4fa"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              {{ item }}
            </li>
            <!-- <li class="flex gap-2">
                <span
                  ><svg
                    style="width: 20px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#89b4fa"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#89b4fa"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg> </span
                >CSS
              </li>
              <li class="flex gap-2">
                <span
                  ><svg
                    style="width: 20px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#89b4fa"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#89b4fa"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg> </span
                >JavaScript
              </li> -->
          </ul>
        </div>
        <div>
          <h2 class="py-4 font-bold text-center">Otras Tercnologías</h2>
            <div class="flex justify-center">

            
            <ul class="grid grid-cols-2 py-4 gap-y-4 gap-x-20">
            <li v-for="item in abilitiesdev" :key="item" class="flex gap-2">
              <span
                ><svg
                  style="width: 20px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#89b4fa"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#89b4fa"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div v-else>c</div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const select = ref(1);
const nav = ref(["Proyectos", "Habilidades", "Repositorios"]);

const btnnav = ref("btn");
const btnnavh = ref("btna");
const abilitiesdev = ref([
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Git",
]);

/* const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value
})) */
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap");

.fuente {
  font-family: "Space Mono", monospace;
}

/*   .btn:hover{
  background-color: white;
  } */

/* bg-dark: #1e1e2e 
  hsl(210, 100%, 99%)
*/
</style>
