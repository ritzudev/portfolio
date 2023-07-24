<template>
  
  <div
    class="transition-all duration-1000 bg-[#C5E4E6] dark:bg-gray-900"
  >
    <DarkModeVue />
  <div class="h-[calc(100vh-70px)] flex flex-col justify-center items-center">
    <section class="flex flex-col ct:flex-row bg-white dark:bg-slate-600 p-5 rounded-2xl gap-5 transition-all duration-700">
      <div class="flex flex-col gap-4 max-w-sm p-5">
        <div>
          <h4 class="font-bold font-mono opacity-50 dark:opacity-100">Bill</h4>
          <div class="group">
            <span class="dollar">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
                <path
                  fill="#9EBBBD"
                  d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                />
              </svg>
            </span>

            <input
              @input="calculateAmount"
              placeholder="0"
              type="number"
              class="input bg-[#f4fafa] dark:bg-slate-800 transition-all duration-1000" 
              v-model="billl"
            />
          </div>
        </div>
        <div>
          <h4 class="font-bold font-mono opacity-50 dark:opacity-100 py-2">Select Tip %</h4>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
            <button
              v-for="tip in aTip"
              :key="tip.index"
              :style="{
                backgroundColor: this.sTip === tip ? 'hsl(172, 67%, 45%)' : '',
                color: this.sTip === tip ? 'hsl(183, 100%, 15%)' : '',
              }"
              type="button"
              class="rounded-lg py-2 font-bold font-mono text-2xl"
              @click="changeTip(tip)"
            >
              {{ tip }}%
            </button>
            <input
              type="number"
              v-model="customTip"
              class="inputC bg-[#f4fafa] dark:bg-slate-800 font-bold text-xl rounded-lg transition-all duration-1000"
              placeholder="Custom"
            />
          </div>
        </div>

        <div>
          <h4 class="font-bold font-mono opacity-50 dark:opacity-100">Number of People</h4>
          <div class="group">
            <img class="icon" src="../assets/images/icon-person.svg" alt="" />
            <input
              placeholder="0"
              type="number"
              class="input bg-[#f4fafa] dark:bg-slate-800 transition-all duration-1000"
              v-model="nPeople"
            />
          </div>
        </div>
      </div>
      <div
        style="background-color: hsl(183, 100%, 15%)"
        class="flex justify-between flex-col max-w-sm md:w-96 rounded-2xl p-5"
      >
        <div class="flex flex-col gap-6 py-5">
          <div class="flex justify-between items-center">
            <div>
              <h4 class="font-bold font-mono text-white">Tip Amounnt</h4>
              <h5 class="font-bold font-mono opacity-50 text-white">
                / person
              </h5>
            </div>

            <span class="flex font-bold text-5xl font-mono items-center">
              <img src="../assets/images/icon-dollar.svg" alt="" />
              {{ tipAmount }}</span
            >
          </div>

          <div class="flex justify-between items-center">
            <div>
              <h4 class="font-bold font-mono text-white">Total</h4>
              <h5 class="font-bold font-mono opacity-50 text-white">
                / person
              </h5>
            </div>
            <span class="flex font-bold text-5xl font-mono items-center">
              <img src="../assets/images/icon-dollar.svg" alt="" />
              {{ total }}</span
            >
          </div>
        </div>
        <button
          @click="reset"
          type="button"
          class="buttontwo rounded-lg py-2 font-bold"
        >
          RESET
        </button>
      </div>
    </section>
  </div>
    <!-- <h1 class="text-4xl pb-10">Para Terro que no sabe dar Propina xd</h1> -->
    
  </div>
</template>

<script>

import DarkModeVue from '../components/DarkMode.vue';

export default {
  components: {
    DarkModeVue
  },
  data() {
    return {
      tipAmount: "0.00",
      total: "0.00",
      billl: null,
      nPeople: null,
      sTip: null,
      aTip: [5, 10, 15, 25, 50],
      customTip: null,
    };
  },
  watch: {
    sTip() {
      if (this.billl != null || this.billl != "0.00") {
        this.calculateAmount();
      }
    },
    nPeople() {
      if (this.billl != null || this.billl != "0.00") {
        this.calculateAmount();
      }
    },
    customTip() {
      if (this.billl != null || this.billl != "0.00") {
        this.calculateAmount();
      }
    },
  },
  methods: {
    calculateAmount() {
      if (this.customTip != null) {
        this.sTip = this.customTip;
      }

      if (
        (this.billl != null || this.billl != "0.00") &&
        (this.nPeople === null || this.nPeople === "")
      ) {
        this.nPeople = 1;
      }

      this.tipAmount = ((this.billl * this.sTip) / 100 / this.nPeople).toFixed(
        2
      );

      // PARA QUE NO REDONDE y .slice(0, -1);

      this.total = (
        ((this.billl * this.sTip) / 100 + this.billl) /
        this.nPeople
      ).toFixed(2);

      // .slice(0, -1);
    },
    changeTip(value) {
      this.customTip = null;
      this.sTip = value;
    },
    reset() {
      (this.tipAmount = "0.00"),
        (this.total = "0.00"),
        (this.billl = null),
        (this.nPeople = null),
        (this.sTip = null),
        (this.customTip = null);
    },
    local() { 
      localStorage.setItem('theme',)
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap");

.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
}

.input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 3px solid transparent;
  border-radius: 8px;
  outline: none;
  color: hsl(183, 100%, 15%);

  text-align: right;
  font-size: 24px;
  font-weight: 700;
  font-family: "Space Mono", monospace;
}

.input:focus,
input:hover {
  outline: none;
  border-color: hsl(172, 67%, 45%);
  /* background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%); */
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 0.8rem;
  height: 1rem;
}

.inputC {
  width: 100%;
  line-height: 28px;
  padding: 0.5rem 0px;
  border: 3px solid transparent;
  border-radius: 8px;
  outline: none;
  color: hsl(183, 100%, 15%);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  font-family: "Space Mono", monospace;
}

.inputC:focus,
input:hover {
  outline: none;
  border-color: hsl(172, 67%, 45%);
  /* background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%); */
}

/* hsl(183, 100%, 15%) */

button {
  background-color: hsl(183, 100%, 15%);
}
button:hover {
  background-color: hsl(185, 41%, 84%);
  color: hsl(183, 100%, 15%);
}
.buttontwo {
  background-color: hsl(172, 67%, 45%);
  color: hsl(183, 100%, 15%);
}

.buttontwo:hover {
  background-color: hsl(185, 41%, 84%);
  color: hsl(183, 100%, 15%);
}

span {
  color: hsl(172, 67%, 45%);
}

.dollar {
  padding: 0px 1rem;
  position: absolute;
}

img {
  height: 30px;
  color: hsl(172, 67%, 45%);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>