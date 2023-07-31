<template>
  <div class="min-h-screen dark:bg-[#191919] scrollable-container">
    <header
      class="py-2 sticky top-0 z-10 bg-white dark:bg-[#191919] w-full border-b dark:border-gray-600"
    >
      <div
        class="max-w-7xl mx-auto flex h-12 justify-between dark:text-[#A7A7A7] px-6 items-center"
      >
        <span class="text-2xl hover:animate-shake">&ltritzudev&gt</span>

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
    <div class="px-6 max-w-7xl mx-auto">
      <body class="h-full transition-all duration-700">
        <section
          id="home"
          class="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 dark:text-white min-h-[calc(100vh-65px)]"
        >
          <h1 class="text-4xl md:text-5 xl lg:text-7xl">
            Hi
            <span
              class="animate-wiggle-more animate-infinite animate-ease-in-out inline-block"
              >👋</span
            >, <br />

            My name is <br />
            <span id="textName"> Alex FZ</span>, a <br />
            Front End Development
          </h1>
          <div
            style="clip-path: circle(50% at 50% 50%)"
            class="p-1 bg-gradient-to-r from-sky-500 to-emerald-400"
          >
            <img
              style="clip-path: circle(50% at 50% 50%)"
              class="w-64 h-64 md:w-80 md:h-80"
              src="../assets/rin.webp"
              alt="rin"
            />
          </div>
        </section>
        <section
          id="about"
          class="dark:text-white grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-center"
        >
          <div class="col-span-1 lg:col-span-2">
            <h1 class="text-5xl text-[#8fbc8f]">About Me</h1>
            <br />
            <p class="text-lg max-w-3xl">
              The Generator App is an online tool that helps you to export
              ready-made templates ready to work as your future website.
            </p>
            <br />
            <p class="text-lg max-w-3xl">
              It helps you to combine slides, panels and other components and
              export it as a set of static files: HTML/CSS/JS.
            </p>
            <br />

            <h1 class="text-5xl text-[#8fbc8f]">Work Experience</h1>
            <br />

            <div class="flex gap-6 flex-col py-6">
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
            </div>

            <h1 class="text-5xl text-[#8fbc8f]">Education</h1>
            <br />

            <div class="flex gap-6 flex-col py-6">
              <ExperienceCard />
            </div>
          </div>

          <div class="flex justify-center">
            <img
              src="../assets/svgs/undraw_programming.svg"
              alt="svg-programming"
            />
          </div>
        </section>
        <section
          id="tech"
          class="flex flex-col text-center min-h-[calc(100vh-65px)] justify-center"
        >
          <h3 class="text-4xl dark:text-white">My Tech Stack</h3>
          <h4 class="text-2xl text-[#666666] dark:text-[#A7A7A7]">
            Technologies I’ve been working with recently
          </h4>
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
        </section>

        <section id="projects" class="flex flex-col text-center">
          <h1 class="text-4xl dark:text-white">Project</h1>
          <h4 class="text-2xl text-[#666666] dark:text-[#A7A7A7]">
            Things I’ve built so far
          </h4>
        </section>
        <section>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center py-10 gap-6"
          >
            <CardPortfolio />
            <CardPortfolio />
            <CardPortfolio />
            <CardPortfolio />
          </div>
        </section>
      </body>
      <section id="contact" class="w-full py-8 md:h-[676px]">
        <div class="flex flex-col md:flex-row justify-between gap-10">
          <div class="flex flex-col md:h-[612px] justify-between">
            <div class="flex flex-col gap-6">
              <h1 class="dark:text-white text-7xl">Contact me</h1>
              <p class="dark:text-white">
                <font-awesome-icon
                  icon="fa-envelope"
                  size="xl"
                  class="text-[#8fbc8f]"
                />

                lexzum10@gmail.com
              </p>

              <p class="dark:text-white">
                <font-awesome-icon
                  icon="fa-location-dot"
                  size="xl"
                  class="text-[#8fbc8f] w-6"
                />

                Lima - Perú
              </p>
            </div>

            <img class="" src="../assets//svgs/undraw.svg" alt="" />
          </div>
          <div
            class="w-full md:w-[580px] rounded-xl flex gap-6 flex-col pt-4 pb-6 bg-[#f1f5f9] dark:bg-[#363636] pl-4 pr-6 shadow-2xl border-2 border-[#8fbc8f]"
          >
            <div class="input-contact">
              <span>Name:</span>
              <input v-model="formEmail.asunto" type="text" name="name" />
            </div>
            <div class="input-contact">
              <span>Email:</span>
              <input v-model="formEmail.email" type="email" name="email" />
            </div>
            <div class="input-contact">
              <span>Message:</span>
              <textarea
                v-model="formEmail.contenido"
                name="comments"
                id=""
                cols="30"
                rows="11"
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <button
              class="button-sea-green rounded-xl py-4 w-full text-center text-white text-2xl"
              type="submit"
              @click="sendMail"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>

    <footer
      class="flex justify-between max-w-7xl mx-auto py-10 dark:text-white px-6"
    >
      <h5>
        Designed and built by Ritzudev <span class="text-[#8fbc8f]">❤</span>
      </h5>
      <div class="flex gap-4 items-center">
        <a href="#" target="_blank">
          <img
              class=" dark:hidden h-[30px] w-[30px]"
              src="https://cdn.svgporn.com/logos/github-icon.svg"
              alt="github"
            />
            <img
              class=" hidden dark:block h-[30px] w-[30px]"
              src="https://logodix.com/logo/64439.png"
              alt="git"
            />
        </a>
        <a href="#" target="_blank">
          <img src="../assets/svgs/linkedin.svg" alt="logo-linkedin" />
        </a>
      </div>
    </footer>
    <div
      class="fixed w-[24%] h-22 dark:bg-white bg-[#66d866] bottom-10 right-10 p-4 rounded-md border-l-8 border-[#49d761] flex items-center justify-between"
      v-if="isShow"
    >
      <font-awesome-icon
        icon="fa-check-circle"
        class="text-[#49d761]"
        size="lg"
      />
      <div>
        <span class="text-lg">Success</span>
        <p class="text-[#666666]">Mensaje enviado correctamente</p>
      </div>
      <font-awesome-icon
        @click="isShow = false"
        icon="fa-close"
        class="text-[#666666]"
        size="lg"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import DarkModeVue from "../components/DarkMode.vue";
import CardPortfolio from "../components/CardPortfolio.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ExperienceCard from "../components/ExperienceCard.vue";
import axios from "axios";

export default {
  components: {
    DarkModeVue,
    CardPortfolio,
    FontAwesomeIcon,
    ExperienceCard,
  },
  setup() {
    const isMenu = ref(false);
    const isShow = ref(false);
    const formEmail = ref({
      email: "",
      asunto: "",
      contenido: "",
    });

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

    async function sendMail() {
      const path = "https://kind-gold-agouti-tutu.cyclic.app/api/";
      //const path =  'http://192.168.1.13:3000/api/';
      try {
        const response = await axios.post(path + "sendmail", {
          asunto: `${this.formEmail.email} - ${this.formEmail.asunto}`,
          contenido: this.formEmail.contenido,
        });
        this.formEmail = {
          email: "",
          asunto: "",
          contenido: "",
        };
        this.isShow = true;
        await setTimeout(() => {
          this.isShow = false;
        }, 2000);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    return {
      isMenu,
      formEmail,
      isShow,
      scrollToSection,
      sendMail,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap");

* {
  font-family: "Space Mono", monospace;
}

.pathProfile {
  fill: #666;
}

.pathProfile:focus {
  fill: #8fbc8f;
}

@media (prefers-color-scheme: dark) {
  .pathProfile {
    fill: #a7a7a7;
  }
}

/* 
h1 {
  font-size: 2.25rem ;
  line-height: 2.5rem ;
} */

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

.backdrop-blur-lg {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.links-header {
  /* padding: 0px 10px;
  margin: 0px 2px;
  border-radius: 8px; */
}
.links-header:hover {
  border-bottom: 1px solid;
  color: darkseagreen;
  cursor: pointer;
}

input {
  outline: none;
  font-size: 20px;
}

textarea {
  resize: none;
  outline: none;
}

.input-contact {
  display: flex;
  background-color: white;
  /* border: 1px solid; */
  box-shadow: 8px 8px #8fbc8f;
  border-radius: 6px;
  padding: 6px 20px;
  flex-direction: column;
  /* gap: 0.5rem; */
}

.button-sea-green {
  background-color: #6c9a6c;
  transition: 0.25s;
  /*  box-shadow: 8px 8px #8fbc8f; */
}

.button-sea-green:hover,
.button-sea-green:focus {
  box-shadow: inset -11.5em 0 0 0 #9dc59d, inset 11.5em 0 0 0 #9dc59d;
}

.close:focus {
  box-shadow: inset -3.5em 0 0 0 var(green), inset 3.5em 0 0 0 var(green);
}
</style>
