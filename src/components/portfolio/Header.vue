<template>
  <header
    class="py-2 sticky top-0 z-20 bg-white dark:bg-[#191919] w-full border-b dark:border-gray-600"
  >
    <div
      class="max-w-7xl mx-auto flex h-12 justify-between dark:text-[#A7A7A7] px-6 items-center"
    >
      <span class="text-2xl hover:animate-shake">&ltritzudev&gt</span>

      <nav class="z-20 relative">
        <div class="hidden items-center gap-4 md:flex justify-center text-xl">
          <a class="links-header" @click="scrollToSection('home')">Home</a>
          <a class="links-header" @click="scrollToSection('about')">About</a>
          <a class="links-header" @click="scrollToSection('tech')"
            >Tech Stack</a
          >
          <a class="links-header" @click="scrollToSection('projects')"
            >Projects</a
          >
          <a class="links-header" @click="scrollToSection('contact')"
            >Contact</a
          >
        </div>
      </nav>

      <nav class="flex flex-row items-center gap-4" id="header_list">
        <div class="flex items-center justify-start overflow-hidden gap-4">
          <!--  <a href="#" target="_blank">
              <img src="../assets/svgs/github.svg" alt="logo-github" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/svgs/linkedin.svg" alt="logo-linkedin" />
            </a> -->

          <DarkModeVue
            style="transform-origin: left"
            class="scale-[0.6] -mr-9"
          />
          <button
            class="border-slate-200 border-2 p-2 rounded-lg flex md:hidden"
            @click="isMenu = !isMenu"
            title="menu-list"
          >
            <font-awesome-icon
              icon="fa-solid fa-bars"
              size="lg"
              class="text-black dark:text-[#A7A7A7]"
            />
          </button>
          <div
            v-if="isMenu"
            class="absolute right-5 top-16 bg-[#2d2d2d] border-slate-200 p-4 w-56 rounded-lg dark:text-white text-lg"
          >
            <ul>
              <li>
                <a class="links-header" @click="scrollToSection('home')"
                  >Home</a
                >
              </li>
              <li>
                <a class="links-header" @click="scrollToSection('about')"
                  >About</a
                >
              </li>
              <li>
                <a class="links-header" @click="scrollToSection('tech')"
                  >Tech Stack</a
                >
              </li>
              <li>
                <a class="links-header" @click="scrollToSection('projects')"
                  >Projects</a
                >
              </li>
              <li>
                <a class="links-header" @click="scrollToSection('contact')"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import DarkModeVue from "../DarkMode.vue";
export default {
  components: {
    DarkModeVue,
  },
  setup() {
    const isMenu = ref(false);
    function scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      this.isMenu = false;
      if (element) {
        const offset =
          element.getBoundingClientRect().top +
          window.scrollY -
          (element == "home" ? 0 : 70);

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }

    return {
      isMenu,
      scrollToSection,
    };
  },
};
</script>
