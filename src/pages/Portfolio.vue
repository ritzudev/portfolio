<template>
  <div class="min-h-screen dark:bg-[#191919] scrollable-container">
    <HeaderPort />
    <div class="px-6 max-w-7xl mx-auto">
      <body class="h-full transition-all duration-700">
        <!-- <ModelViewer /> -->
        <section
          id="home"
          class="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 dark:text-white min-h-[calc(100vh-65px)]"
        >
          <h1 class="text-4xl md:text-5 xl lg:text-7xl">
            Hola
            <span
              class="animate-wiggle-more animate-infinite animate-ease-in-out inline-block"
              >👋</span
            >, <br />

            Mi nombre es <br />
            <span id="textName"> Alex FZ</span>, <br />
            Front End Development
          </h1>

          <div
            style="clip-path: circle(50% at 50% 50%)"
            class="p-1 bg-gradient-to-r from-sky-500 to-emerald-400"
          >
            <img
              style="clip-path: circle(50% at 50% 50%)"
              class="w-64 h-64 md:w-80 md:h-80"
              src="../assets/images_port/myAvatar.svg"
              alt="rin"
            />
          </div>
        </section>
        <section
          id="about"
          class="dark:text-white grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-center py-4"
        >
          <div class="col-span-1 lg:col-span-2">
            <h1 class="text-5xl text-[#8fbc8f]">Sobre Mí</h1>
            <br />
            <p class="text-lg max-w-3xl">
              ¡Hola! Soy Alex, un entusiasta del desarrollo front-end con más de 2 años
              de experiencia con el framework de Vue.
            </p>
            <br />
            <p class="text-lg max-w-3xl">
              Especializado en HTML, CSS y JavaScript, tengo experiencia en
              frameworks como Vue. Siempre estoy buscando formas de aprender y
              crecer en el siempre cambiante mundo del desarrollo web.
            </p>
            <br />

            <h1 class="text-5xl text-[#8fbc8f]">Experiencia</h1>
            <br />

            <div class="flex gap-6 flex-col py-6">
              <ExperienceCard />
            </div>

            <EducationPort />
          </div>

          <div class="flex justify-center">
            <img
              src="../assets/svgs/undraw_programming.svg"
              alt="svg-programming"
            />
          </div>
        </section>
        <StackPort />

        <section
          id="Proyectos"
          class="flex flex-col text-center min-h-[calc(100vh-65px)] py-10"
        >
          <h1 class="text-4xl dark:text-white">Proyectos</h1>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center py-10 gap-6 text-start"
          >
            <CardPortfolio />
          </div>
        </section>
      </body>
      <section id="contact" class="w-full py-8 md:h-[676px]">
        <div class="flex flex-col md:flex-row justify-between gap-10">
          <div class="flex flex-col md:h-[612px] justify-between">
            <div class="flex flex-col gap-6">
              <h1 class="dark:text-white text-7xl">Contacto</h1>
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
              <span>Nombre:</span>
              <input v-model="formEmail.asunto" type="text" name="name" />
            </div>
            <div class="input-contact">
              <span>Email:</span>
              <input v-model="formEmail.email" type="email" name="email" />
            </div>
            <div class="input-contact">
              <span>Mensaje:</span>
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
              :disabled="isLoading"
            >
              Enviar
            </button>
          </div>
        </div>
      </section>
    </div>

    <FooterPort />
    <div
      :class="[
        isLoading
          ? 'w-[90%] md:w-80 border-[#666]'
          : 'h-[5.5rem] w-[90%] md:w-[440px] border-[#49d761]',
      ]"
      class="fixed bg-white shadow-2xl border-2 bottom-10 right-6 xl:right-10 p-4 rounded-md border-l-8 flex items-center gap-4 transition-all duration-1000 ease-in-out"
      v-if="isShow"
    >
      <span v-if="isLoading" class="flex justify-center w-full">
        <svg
          class="animate-spin -ml-1 mr-3 h-6 w-6 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Procesando...
      </span>

      <div v-else class="flex flex-row items-center w-full gap-4">
        <font-awesome-icon
          icon="fa-check-circle"
          class="text-[#49d761]"
          size="lg"
        />
        <div class="flex-grow overflow-hidden">
          <span class="text-lg">Enviado</span>
          <p style="white-space: nowrap; overflow: hidden" class="text-[#666]">
            Mensaje enviado correctamente
          </p>
        </div>
        <font-awesome-icon
          @click="isShow = false"
          icon="fa-close"
          class="text-[#666] cursor-pointer"
          size="lg"
        />
      </div>
    </div>
    <!-- <div
      style="background-color: var(--greenP)"
      class="absolute w-20 h-10 top-0 -z-10 left-[1000px]"
    ></div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import DarkModeVue from "../components/DarkMode.vue";
import CardPortfolio from "../components/CardPortfolio.vue";
import HeaderPort from "../components/portfolio/Header.vue";
import EducationPort from "../components/portfolio/Education.vue";
import StackPort from "../components/portfolio/Stack.vue";
import FooterPort from "../components/portfolio/Footer.vue";
import ModelViewer from "../components/portfolio/ModelViewer.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ExperienceCard from "../components/ExperienceCard.vue";
import axios from "axios";

export default {
  components: {
    DarkModeVue,
    CardPortfolio,
    FontAwesomeIcon,
    ExperienceCard,
    HeaderPort,
    EducationPort,
    StackPort,
    FooterPort,
    ModelViewer,
  },
  setup() {
    const isMenu = ref(false);
    const isShow = ref(false);
    const isLoading = ref(false);
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
      this.isShow = true;
      this.isLoading = true;
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

        this.isLoading = false;

        await setTimeout(() => {
          this.isShow = false;
        }, 5000);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    return {
      isMenu,
      formEmail,
      isShow,
      isLoading,
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

.backdrop-blur-lg {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
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
