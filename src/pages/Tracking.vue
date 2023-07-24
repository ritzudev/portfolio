<template>
  <div
    class="
      flex
      xm:flex-col
      md:flex-row
      bg-slate-900
      min-h-screen
      justify-center
      items-center
      w-screen
      p-5
      pb-8
    "
  >
    <div class="flex flex-col bg-indigo-900 rounded-xl my-5 max-w-xs xm:w-60">
      <div
        class="
          flex 
          xm:flex-row
          xm:p-5
          xm:w-60
          
          sm:flex-col
          self-start
          bg-indigo-600
          rounded-xl
          sm:pr-20
          sm:pl-4
          sm:py-4
        "
      >
        <img
          class="xm:h-14 xm:w-14 xm:mt-1 sm:my-4 border-2 rounded-full sm:h-20 sm:w-20"
          src="../assets/images/image-jeremy.png"
          alt=""
        />
        <div class="xm:flex-col xm:pl-3 xm:pr-2 flex ">
          <h1 class="xm:text-xs opacity-60 text-white mt-3">Report for</h1>
          <h1 class="xm:text-lg sm:text-4xl text-white sm:pb-16 self-start">
            Alex <br class="xm:hidden sm:block">
          </h1>
        </div>

        <!-- <h1 class="text-5xl text-white pb-12"></h1> -->
      </div>
      <div class="flex xm:flex-row sm:flex-col xm:justify-around sm:justify-between sm:pl-4 sm:h-40 py-5">
        <h1
          @click="select = 'daily'"
          :style="{ opacity: select === 'daily' ? 1 : 0.6 }"
          class="text-white opacity-60 hover:cursor-pointer self-start"
        >
          Daily
        </h1>
        <h1
          @click="select = 'weekly'"
          :style="{ opacity: select === 'weekly' ? 1 : 0.6 }"
          class="
            text-white
            opacity-60
            hover:cursor-pointer
            self-start
            active:opacity-100
          "
        >
          Weekly
        </h1>
        <h1
          @click="select = 'monthly'"
          :style="{ opacity: select === 'monthly' ? 1 : 0.6 }"
          class="
            text-white
            opacity-60
            hover:cursor-pointer
            self-start
            active:opacity-100
          "
        >
          Monthly
        </h1>
      </div>
    </div>
    <ul
      class="
        grid
        xm:grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:xl:grid-cols-3
        xl:grid-cols-3
        gap-8
        px-8
      "
    >
      <div
        v-for="data in array"
        :key="data.index"
        v-bind:style="{ backgroundColor: data.color }"
        class="xm:h-36 sm:h-52 w-60 rounded-xl pr-2  xm:my-2"
      >
        <!-- <img src="../assets/images/icon-Work.svg" alt=""> -->
        <img class="h-14 w-16 ml-auto" v-bind:src="data.img" alt="" />
        <div
          class="
          active:bg-indigo-500
            hover:cursor-pointer
            bg-indigo-900
            sm:h-44
            w-60
            xm:h-28
            p-4
            text-white
            rounded-xl
            flex flex-col
            justify-between
            -mt-4
            absolute
          "
        >
          <div class="flex flex-row justify-between">
            <h1 class="font-bold">{{ data.title }}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div class="flex xm:flex-row sm:flex-col xm:items-center xm:justify-between sm:items-start">
            <h1 class="text-white sm:text-6xl xm:text-2xl pb-3">
              {{ data.timeframes[select].current + 'hr'}} 
            </h1>

            <h1 class="text-white text-opacity-60">
              Last Week - {{ data.timeframes[select].previous }} hr
            </h1>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>

import Work from '../assets/images/icon-work.svg'
import Play from '../assets/images/icon-play.svg'
import Study from '../assets/images/icon-Study.svg'
import Exercise from '../assets/images/icon-Exercise.svg'
import Social from '../assets/images/icon-Social.svg'
import SelfCare from '../assets/images/icon-Self-care.svg'

export default {
  data() {
    return {
      select: 'weekly',
      color: "hsl(15, 100%, 70%)",
      array: [
        {
          title: "Work",
          timeframes: {
            daily: {
              current: 5,
              previous: 7,
            },
            weekly: {
              current: 32,
              previous: 36,
            },
            monthly: {
              current: 103,
              previous: 128,
            },
          },
          img: Work,
          color: "hsl(15, 100%, 70%)",
        },
        {
          title: "Play",
          timeframes: {
            daily: {
              current: 1,
              previous: 2,
            },
            weekly: {
              current: 10,
              previous: 8,
            },
            monthly: {
              current: 23,
              previous: 29,
            },
          },
          img: Play,
          color: "hsl(195, 74%, 62%)",
        },
        {
          title: "Study",
          timeframes: {
            daily: {
              current: 0,
              previous: 1,
            },
            weekly: {
              current: 4,
              previous: 7,
            },
            monthly: {
              current: 13,
              previous: 19,
            },
          },
          img: Study,
          color: "hsl(348, 100%, 68%)",
        },
        {
          title: "Exercise",
          timeframes: {
            daily: {
              current: 1,
              previous: 1,
            },
            weekly: {
              current: 4,
              previous: 5,
            },
            monthly: {
              current: 11,
              previous: 18,
            },
          },
          img: Exercise,
          color: "hsl(145, 58%, 55%)",
        },
        {
          title: "Social",
          timeframes: {
            daily: {
              current: 1,
              previous: 3,
            },
            weekly: {
              current: 5,
              previous: 10,
            },
            monthly: {
              current: 21,
              previous: 23,
            },
          },
          img: Social,
          color: "hsl(264, 64%, 52%)",
        },
        {
          title: "Self Care",
          timeframes: {
            daily: {
              current: 0,
              previous: 1,
            },
            weekly: {
              current: 2,
              previous: 2,
            },
            monthly: {
              current: 7,
              previous: 11,
            },
          },
          img: SelfCare,
          color: "hsl(43, 84%, 65%)",
        },
      ],
    };
  },
};
</script>