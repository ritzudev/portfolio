<template>
  <div v-for="(item, index) in experience" :key="index" class="flex flex-col gap-4 border-b-2 border-[#bce0bc] pb-6">
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
        <p>{{item.name}}</p>
      </div>
      <div class="flex gap-4 items-center">
        <font-awesome-icon
          icon="fa-calendar-alt"
          size="lg"
          class="text-[#8fbc8f]"
        />
        <p>{{item.date}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const experience = ref([
  {
    puesto: "Junior Web Developer",
    name: "Telemovil Data SAC",
    date: "Jan 2021 - July 2023",
  },
  {
    puesto: "Software Development Intern",
    name: "Telemovil Data SAC",
    date: "Jun 2019 - Jan 2021",
  },
]);
</script>

<style scoped></style>
