<template>
  <div
    id="todo"
    class="flex xl:flex-row xm:flex-col bg min-h-screen justify-evenly items-center py-8 min-w-[500px]"
  >
    <div class="flex flex-col gap-5 w-[345px]">
      <div class="flex flex-row justify-between items-end text-white">
        <h1 class="font-bold text-lg">cal</h1>
        <div class="flex items-end gap-4">
          THEME
          <div>
            <div class="flex justify-around font-bold">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>

            <div
              class="bg-[hsl(223,31%,20%)] min-w-[5rem] h-6 py-1 relative rounded-xl"
              @click="theme === 2 ? (theme = 0) : theme++"
            >
              <span
                v-if="theme === 0"
                class="w-4 h-4 bg-red-600 absolute left-2 rounded-full"
              ></span>
              <span
                v-if="theme === 1"
                class="w-4 h-4 bg-red-800 absolute left-8 rounded-full"
              ></span>
              <span
                v-if="theme === 2"
                class="w-4 h-4 bg-[hsl(176,100%,44%)] absolute right-2 rounded-full"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <input
        id="input"
        class="input w-full rounded-md pt-4 pb-2 px-4 text-white text-right text-3xl font-bold justify-center font-"
        type="text"
        v-model="value"
      />
      <section
        id="keyboard"
        class="key w-full rounded-md grid grid-cols-4 gap-4 p-4"
      >
        <button
          class="button text-center"
          v-for="item in keys"
          :key="item"
          @click="calculator(item)"
        >
          {{ item }}
          <!-- <button  @click="value += item ">
          
        </button> -->
        </button>

        <!-- <button @click="value = 7">7</button><button @click="value = 8">8</button><button>9</button
        ><button>DEL</button><button>4</button><button>5</button
        ><button>6</button><button @click="sumar()">+</button><button>1</button><button>2</button
        ><button>3</button><button>-</button><button>.</button><button>0</button
        ><button>/</button><button>X</button> -->
      </section>
    </div>
    <div class="flex flex-col gap-10 text-center">
      <div>
        <h1 class="text-white text-2xl py-2">Precio compra</h1>
        <div class="flex gap-2">
          <button @click="restar('c')" class="text-5xl font-extrabold pb-3 text-[hsl(224,36%,15%)]">-</button>
          <input
          class="input w-80 h-16 text-4xl rounded-md px-4 text-white"
          type="number"
          v-model="compra"
        />
        <button @click="sumar('c')" class="text-5xl font-extrabold pb-3 text-[hsl(224,36%,15%)]">+</button>
        </div>
        
      </div>

      <div>
        <h1 class="text-white text-2xl py-2">Precio Venta</h1>
        <div>
          <button @click="restar('v')" class="text-5xl font-extrabold pb-3 text-[hsl(224,36%,15%)]">-</button>
          <input
          class="input h-16 w-80 text-4xl rounded-md px-4 text-white"
          type="number"
          v-model="venta"
          @keypress.enter="addhistorial()"
        />
          <button @click="sumar('v')" class="text-5xl font-extrabold pb-3 text-[hsl(224,36%,15%)]">+</button>
        </div>
        
      </div>

      <div>
        <h1 class="text-white text-2xl py-2">Nombre</h1>
        <input
          class="input h-12 w-80 text-3xl rounded-md px-4 text-white"
          type="text"
          v-model="name"
          @keypress.enter="addhistorial()"
        />
        
      </div>

      <h1 class="text-7xl font-bold text-white">{{ result }}</h1>
    </div>
    <div class="max-h-[600px] overflow-y-scroll min w-72 px-8 ">
      <h1 class="text-4xl text-white font-bold">Historial</h1>
      <div
        class="flex flex-col gap-2 text-white border-2 rounded-lg p-4 my-2 "
        v-for="(item, index) in history"
        :key="item"
      >
      <div class="flex justify-between items-center">
        <span class="index">{{ index + 1 }}</span>
        <img @click="deleteItem(index)" class="h-5 text-red-700" src="../assets/imagese/icon-delete.svg" alt="">
      </div>
        
        <span>Nombre: {{ item.n }} </span>
        <span>Precio Compra: {{ item.c }} </span>
        <span>Precio Venta: {{ item.v }}</span>
        <span>PROFIT: {{ item.r }} </span>
      </div>
    </div>
  </div>
</template>

<!-- <script setup>
import { ref } from "vue";

const theme = ref(0);
const value = ref('')
const keys = ref(['7','8', '9', 'DEL',
                  '4','5', '6', '+', 
                  1,'2', '3', '-',
                  '.', 0, '/', '*',
                'RESET', '='])


function calculator(item) {
  let dato =  this.value
  if (item === 'DEL') {
   this.value = this.value.slice(0, -1)
  /*  console.log(this.value); */
  }
  else if(item === '=') {
    if (this.value.includes('+')) {
      const a = dato.split('+')
      console.log(a);
      this.value = (Number(a[0]) + Number(a[1])).toString() ;
    }
    if (this.value.includes('-')) {
      const a = dato.split('-')
      this.value = (Number(a[0]) - Number(a[1])).toString() ;
    }
    if (this.value.includes('*')) {
      const a = dato.split('*')
      this.value = (Number(a[0]) * Number(a[1])).toString() ;
    }

    if (this.value.includes('/')) {
      const a = dato.split('/')
      console.log(a);
      this.value = (Number(a[0]) / Number(a[1])).toString() ;
    }
    
  }
  else if(item === 'RESET'){
    this.value = ''
  }
  else{
    this.value += item
  }

  console.log(this.value)
}

</script> -->

<script>
export default {
  data() {
    return {
      theme: 0,
      value: "",
      keys: [
        "7",
        "8",
        "9",
        "DEL",
        "4",
        "5",
        "6",
        "+",
        1,
        "2",
        "3",
        "-",
        ".",
        0,
        "/",
        "*",
        "RESET",
        "=",
      ],
      compra: "",
      venta: "",
      name: "",
      history: [],
    };
  },
  methods: {
    calculator(item) {
      let dato = this.value;
      if (item === "DEL") {
        this.value = this.value.slice(0, -1);
        /*  console.log(this.value); */
      } else if (item === "=") {
        if (this.value.includes("+")) {
          const a = dato.split("+");
          console.log(a);
          this.value = (Number(a[0]) + Number(a[1])).toString();
        }
        if (this.value.includes("-")) {
          const a = dato.split("-");
          this.value = (Number(a[0]) - Number(a[1])).toString();
        }
        if (this.value.includes("*")) {
          const a = dato.split("*");
          this.value = (Number(a[0]) * Number(a[1])).toString();
        }

        if (this.value.includes("/")) {
          const a = dato.split("/");
          console.log(a);
          this.value = (Number(a[0]) / Number(a[1])).toString();
        }
      } else if (item === "RESET") {
        this.value = "";
      } else {
        this.value += item;
      }

      console.log(this.value);
    },
    addhistorial() {
      const obj = { c: this.compra, v: this.venta, n: this.name, r: this.result };
      this.history.push(obj);
    },
    deleteItem(i){
      console.log(i);
      this.history = this.history.slice(i, -1)
    },
    sumar(input) { 
      if (input === 'c') {
        this.compra = Number(this.compra + 100)
      }

      if (input === 'v') {
        this.venta = Number(this.venta + 100)
      }
    },
    restar(input) { 
      if (input === 'c') {
        this.compra = Number(this.compra - 100)
      }

      if (input === 'v') {
        this.venta = Number(this.venta - 100)
      }
    }
  },
  watch: {
    theme() {
      /* const all = document.querySelectorAll('.button').forEach((el) =>
          el.classList[this.theme == 0 ? "add" : "remove"]("active")
        ); */

      const todo = document.querySelector("#todo");
      const input = document.querySelector("#input");
      const key = document.querySelector("#keyboard");
      console.log(todo);
      if (this.theme === 0) {
        todo.classList.add("bg");
        todo.classList.remove("bg-tres");
        key.classList.remove("key-tres");
        key.classList.add("key");
        input.classList.remove("tres");

        document
          .querySelectorAll(".button")
          .forEach((el) => el.classList.remove("tres"));
      } else if (this.theme === 1) {
        //todo.classList[this.theme == 0 ? "add" : "remove"]("active")
        todo.classList.remove("bg");
        todo.classList.add("bg-dos");
        key.classList.remove("key");
        key.classList.add("key-dos");
        input.classList.add("dos");

        document
          .querySelectorAll(".button")
          .forEach((el) => el.classList.add("dos"));

        //todo.classList.toggle('bg-[hsl(10,0%,50%)]')
      } else {
        todo.classList.remove("bg-dos");
        todo.classList.add("bg-tres");

        key.classList.remove("key-dos");
        key.classList.add("key-tres");

        input.classList.remove("dos");
        input.classList.add("tres");

        document
          .querySelectorAll(".button")
          .forEach((el) => el.classList.remove("dos"));

        document
          .querySelectorAll(".button")
          .forEach((el) => el.classList.add("tres"));
      }
      //console.log(todo);
      //all.classList.add('active')
      //this.theme = this.theme++
      //console.log(all);
    },
    compra() {
      const tax = (this.compra * 5) /100
      this.venta = this.compra +  Math.round(tax / 100) * 100
    },
    venta() {
      if (Math.sign(this.result) === 1) {
        this.value = this.result;
      }
      
    },
  },

  computed: {
    result() {
      const result = Math.round(
        this.venta - (this.venta * 5) / 100 - this.compra
      );
      return result;
      //return (1200 )
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap");

.input {
  font-family: "Spartan", sans-serif;
  background-color: hsl(224, 36%, 15%);
}

.input.dos {
  background-color: hsl(0, 0%, 93%);
}

.input.tres {
  background-color: hsl(268, 71%, 12%);
}

button {
  padding: 0px 0px;
}

.bg {
  background-color: hsl(222, 26%, 31%);
}

.bg-dos {
  background-color: hsl(0, 0%, 90%);
}

.bg-tres {
  background-color: hsl(268, 75%, 9%);
}

.key {
  background-color: hsl(223, 31%, 20%);
}

.key-dos {
  background-color: hsl(0, 5%, 81%);
}

.key-tres {
  background-color: hsl(268, 71%, 12%);
}

.button {
  color: hsl(224, 36%, 15%);
  background-color: hsl(30, 25%, 89%);
  padding: 15px 5px 6px;
  font-size: 28px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 4px 0 hsl(28, 16%, 65%);
  cursor: pointer;
  opacity: 0.9;
  font-family: "Spartan", sans-serif;
}

.button.dos {
  background-color: hsl(45, 7%, 89%);
  box-shadow: 0 4px 0 hsl(35, 11%, 61%);
}

.button.tres {
  background-color: hsl(268, 47%, 21%);
  box-shadow: 0 4px 0 hsl(290, 70%, 36%);
  color: hsl(52, 100%, 62%);
}

.button.active {
  color: white;
  background-color: skyblue;
}

.button:hover {
  opacity: 1;
}

/* .tres:hover{

} */

.button:nth-child(4) {
  color: white;
  background-color: hsl(225, 21%, 49%);
  box-shadow: 0 3px 0 hsl(224, 28%, 35%);
  font-size: 18px;
}

.button:nth-child(4).dos {
  background-color: hsl(185, 42%, 37%);
  box-shadow: 0 3px 0 hsl(185, 58%, 25%);
}

.button:nth-child(4).tres {
  background-color: hsl(281, 89%, 26%);
  box-shadow: 0 3px 0 hsl(285, 91%, 52%);
}

.button:nth-child(17) {
  grid-column-start: 1;
  grid-column-end: 3;
  color: white;
  background-color: hsl(225, 21%, 49%);
  box-shadow: 0 3px 0 hsl(224, 28%, 35%);
  font-size: 18px;
  padding: 15px 5px 12px 5px;
}

.button:nth-child(17).dos {
  background-color: hsl(185, 42%, 37%);
  box-shadow: 0 3px 0 hsl(185, 58%, 25%);
}

.button:nth-child(17).tres {
  background-color: hsl(281, 89%, 26%);
  box-shadow: 0 3px 0 hsl(285, 91%, 52%);
}

.button:nth-child(18) {
  grid-column-start: 3;
  grid-column-end: 5;
  color: white;
  background-color: hsl(6, 63%, 50%);
  box-shadow: 0 3px 0 hsl(6, 70%, 34%);
  font-size: 18px;
  padding: 15px 5px 12px 5px;
}

.button:nth-child(18).dos {
  background-color: hsl(25, 98%, 40%);
  box-shadow: 0 3px 0 hsl(25, 99%, 27%);
}

.button:nth-child(18).tres {
  background-color: hsl(176, 100%, 44%);
  box-shadow: 0 3px 0 hsl(177, 92%, 70%);
  color: black;
}

.index {
  background-color: hsl(204, 85%, 46%);
  border-radius: 100%;
  width: 24px;
  height: 24px;
  font-family: "Spartan", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
}
</style>
