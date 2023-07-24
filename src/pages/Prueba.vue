<template>
  <!-- <div
    class="flex flex-col justify-center items-center min-h-screen bg-green-400 py-10"
  >
    <div class="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
      <div class="md:row-span-2 sm:row-span-2">
        <div
          class="flex flex-col bg-indigo-900 rounded-xl max-w-xs xm:w-60"
        >
          <div
            class="
              flex
              xm:flex-row xm:p-5 xm:w-60
              sm:flex-col
              self-start
              bg-indigo-600
              rounded-xl
              sm:pr-20 sm:pl-4 sm:py-4
            "
          >
            <img
              class="
                xm:h-14 xm:w-14 xm:mt-1
                sm:my-4
                border-2
                rounded-full
                sm:h-20 sm:w-20
              "
              src="../assets/images/image-jeremy.png"
              alt=""
            />
            <div class="xm:flex-col xm:pl-3 xm:pr-2 flex">
              <h1 class="xm:text-xs opacity-60 text-white mt-3">Report for</h1>
              <h1 class="xm:text-lg sm:text-4xl text-white sm:pb-10 self-start">
                Ritzu <br class="xm:hidden sm:block" />
                Gozu
              </h1>
            </div>
          </div>
          <div
            class="
              flex
              xm:flex-row
              sm:flex-col
              xm:justify-around
              sm:justify-between sm:px-5 sm:h-40
              py-5
            "
          >
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
      </div>
      <div
        v-for="data in array"
        :key="data.index"
        v-bind:style="{ backgroundColor: data.color }"
        class="xm:h-36 sm:h-52 w-60 rounded-xl pr-2 "
      >
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
          <div
            class="
              flex
              xm:flex-row
              sm:flex-col
              xm:items-center xm:justify-between
              sm:items-start
            "
          >
            <h1 class="text-white sm:text-6xl xm:text-2xl pb-3">
              {{ data.timeframes[select].current + "hr" }}
            </h1>

            <h1 class="text-white text-opacity-60">
              Last Week - {{ data.timeframes[select].previous }} hr
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div id="prueba" class="bg-green-400 justify-center flex flex-col gap-4 items-center h-screen">
    <!-- <div>
      {{ frase}}
    <img height="200" width="300" :src="gif" alt="">
    </div> -->

    <div class="bg-slate-700 px-2 min-w-[5rem] h-6 py-1 relative rounded-xl" @click="theme === 2 ? theme = 0 : theme++">
      <span v-if="theme === 0" class="w-4 h-4 bg-red-600 absolute left-3 rounded-full"></span>
      <span v-if="theme === 1" class="w-4 h-4 bg-red-800 absolute left-8 rounded-full"></span>
      <span v-if="theme === 2" class="w-4 h-4 bg-sky-500 absolute right-3 rounded-full"></span>
    </div>
    <label for="tareas">Tareas</label>
    <input class="w-60 rounded-sm" type="text" v-model="tarea">
    {{value}}
    <button class="bg-sky-500 rounded-xl px-4 py-2" @click="addTask()">Agregar tarea</button>
    <ul>
      <li v-for="(task, index) in tareas" :key="task">
        {{ task }} {{ index}}
        <button class="bg-red-600" @click="deleteTask(index)">delete</button>
      </li>
    </ul>
    <div id="aea" class="pruebaclass second">

    </div>
  </div>
</template>

<script>


document.body.classList.remove('bg-green-400')


import Work from "../assets/images/icon-work.svg";
import Play from "../assets/images/icon-play.svg";
import Study from "../assets/images/icon-Study.svg";
import Exercise from "../assets/images/icon-Exercise.svg";
import Social from "../assets/images/icon-Social.svg";
import SelfCare from "../assets/images/icon-Self-care.svg";

export default {
  data() {
    return {
      select: "weekly",
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
      frase: '',
      gif: '',
      tarea: '',
      tareas: [],
      value: false,
      theme: 0,
    };
  },
  mounted() {
    //this.callApi()
    this.checkLocal()
    //this.addTask()
  },
  computed: {
    change(){
      this.value = !this.value
      const div = document.getElementById('aea');
      div.classList.remove('bg-green-400')
       if (this.value) {
        div.classList.add('bg-green-400')
      }else{
        div.classList.remove('bg-green-400')
      } 
    }
  },
  methods: { 
    addTask() {
      this.value = !this.value
      const div = document.getElementById('prueba');
      //div.classList.remove('bg-green-400')
       /* if (this.value) {
         div.classList.add('bg-green-400')
         this.value = false
      }else{
        this.value = true
        div.classList.remove('bg-green-400')
      }  */
      div.classList[this.value ? 'remove' : 'add']('bg-green-400')
      //div.classList.add('bg-green-400')
      //console.log(div.classList.DOMTokenList);
      //console.log(this.value = !this.value);
      /* this.tareas.push(this.tarea);
      this.tarea = '';
      const object = {}
      localStorage.setItem('tasklocal', JSON.stringify(this.tareas)) */
    },

    deleteTask(value){
     this.tareas.splice(value, 1)
      //this.tareas = filter;
      localStorage.setItem('tasklocal', JSON.stringify(this.tareas))
    },
    callApi() { 
      fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        this.frase = data.fact;
        console.log(this.frase);
        this.getGif(data.fact.split(' ', 3).join(' '))
      })
    },
    getGif(search) {
      console.log('s', search);
      fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${'Vg6cStRI4vjoCDWVV1Yr3SQFKHfm73me'}`)
      .then(res => res.json())
      .then(data => {
        this.gif = data.data[0].images.original.url;
      })
    },
    checkLocal(){
      if (localStorage.tasklocal != undefined) {
        this.tareas = JSON.parse(localStorage.tasklocal) 
      }
     
    }
    //"2cZkiFTayis79UdSapL6LHWlublpl7iy" ;
  }
};
</script>

<style scoped>
.pruebaclass{
  background-color: #000;
}
.second{
  background-color: white ;
}
</style>