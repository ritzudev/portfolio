<template>
  <div
    v-for="(item, index) in experience"
    :key="index"
    class="flex flex-col gap-4 border-b-2 border-[#bce0bc] pb-6"
  >
    <div class="flex justify-between items-center">
      <span class="text-xl text-[#666666]">{{ item.puesto }}</span>
      <span
        class="bg-[#D7FFE0] text-[#018C0F] text-xs sm:text-sm py-2 px-6 rounded-3xl text-center"
        >Full Time</span
      >
    </div>
    <div class="flex w-full justify-between text-[#A7A7A7]">
      <div class="flex gap-4 items-center">
        <font-awesome-icon
          icon="fa-building"
          size="lg"
          class="text-[#8fbc8f]"
        />
        <p>{{ item.name }}</p>
      </div>
      <div class="flex gap-4 items-center">
        <font-awesome-icon
          icon="fa-calendar-alt"
          size="lg"
          class="text-[#8fbc8f]"
        />
        <p>{{ item.date }}</p>
      </div>
    </div>
    <p class="text-[#3a3838] dark:text-white">
      {{ item.description }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const experience = ref([
  {
    puesto: "Junior Web Developer",
    name: "Telemovil Data SAC",
    date: "Enero 2021 - Junio 2023",
    description: "Tuve la emocionante oportunidad de contribuir al desarrollo y mejora de la plataforma de facturación electrónica utilizando el framework VUE.JS y crear la aplicación movil con FLUTTER. Mi enfoque principal era garantizar una experiencia de usuario fluida y eficiente al corregir problemas existentes, implementar nuevas funciones y gestionar la emision de comprobantes electronicos consumiendo una API REST.",
  },
  {
    puesto: "Practicante de Desarrollo de Software",
    name: "Telemovil Data SAC",
    date: "Julio 2019 - Enero 2021",
    description:
      "Realice prácticas pre profesionales y adquirí experiencia en el manejo de bases de datos y también fortalecí mis habilidades en desarrollo web. Trabajé en  colaboración con el equipo de sistemas para corregir errores de bases de datos.",
  },
]);
</script>

<style scoped></style>
