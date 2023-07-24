<template>
  <div class="max-w-5xl mx-auto" id="body">
    <nav
      class="flex justify-between items-center border-b-2 px-4 pt-6 flex-wrap"
    >
      <div class="flex flex-row items-end gap-6 flex-wrap">
        <img class="sm:hidden" src="../assets/imagese/icon-menu.svg" alt="" />
        <img class="pb-5" src="../assets/imagese/logo.svg" alt="" />
        <ul
          class="flex flex-row gap-4 text-slate-500 text-sm mt-3 font-bold xm:hidden sm:flex"
        >
          <li class="hover:text-black hover:cursor-pointer">Collections</li>
          <li class="hover:text-black hover:cursor-pointer">Men</li>
          <li class="hover:text-black hover:cursor-pointer">Women</li>
          <li class="hover:text-black hover:cursor-pointer">About</li>
          <li class="hover:text-black hover:cursor-pointer">Contact</li>
        </ul>
      </div>

      <div class="flex pb-5 items-center gap-6">
        <div @click="showmodal" class="cursor-pointer">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
          </svg>
        </div>

        <!-- MODAL CART -->
        <div
          v-if="modal"
          
          class=" md:right80 xl:right-96 right-10 top-20 bg-white shadow-lg w-80 h-60  absolute"
        >
          <h1 class="font-bold px-4 border-b-[1px] py-4">Cart</h1>

          <div
            v-if="cart.length === 0"
            class="flex justify-center items-center h-[190px]"
          >
            <span>Your cart is empty</span>
          </div>
          <div class="pt-6 px-4 flex flex-col gap-6" v-else>
            <div  
            class=" flex flex-row items-center gap-6"
          >
            <img
              class="w-12 rounded-md"
              src="../assets/imagese/image-product-1-thumbnail.jpg"
              alt=""
            />
            <div>
              <h4 class="text-sm">Fall Limited Edition Sneakers</h4>
              $123.00 x {{cart.length}} ${{price}}
            </div>
            
            <button @click="deleteproduct()">
              <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </button>
            
          </div>
          <button
            class="flex h-12 bg-orange hover:opacity-70 text-white font-7 w-full justify-center items-center rounded-lg"
          >
             Checkout
          </button>
          </div>
          
        </div>
        <!-- FIN -->
        <img
          class="w-9 cursor-pointer hover:border-2 hover:border-orange-600 hover:rounded-full overflow-hidden"
          src="../assets/imagese/image-avatar.png"
          alt=""
        />
      </div>
    </nav>
    <section class="grid md:grid-cols-2 py-20 px-10 gap-20">
      <div class="">
        <img
          class="rounded-lg"
          src="../assets/imagese/image-product-1.jpg"
          alt=""
        />
        <div class="grid grid-cols-4 gap-6 rounded-lg my-4">
          <div class="bordero">
            <img
              class="rounded-lg imageb"
              src="../assets/imagese/image-product-1-thumbnail.jpg"
              alt=""
            />
          </div>

          <div class="bordero">
            <img
              class="rounded-lg imageb"
              src="../assets/imagese/image-product-2-thumbnail.jpg"
              alt=""
            />
          </div>

          <div class="bordero">
            <img
              class="rounded-lg imageb"
              src="../assets/imagese/image-product-3-thumbnail.jpg"
              alt=""
            />
          </div>

          <div class="bordero">
            <img
              class="rounded-lg imageb"
              src="../assets/imagese/image-product-4-thumbnail.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 max-w-md pt-20">
        <h4 class="text-xs font-7 orange">SNEAKER COMPANY</h4>
        <h1 class="text-4xl font-7 pb-4">Fall Limited Edition Sneakers</h1>
        <h5 class="text-dark opacity-70 font-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </h5>
        <div class="flex gap-4 items-center">
          <h1 class="font-7 text-3xl">$125.00</h1>
          <span class="font-7">50%</span>
        </div>

        <del class="text-dark opacity-40 font-7">$250.00</del>

        <div class="flex gap-4">
          <div
            class="flex justify-center items-center gris gap-10 rounded-lg min-w-36"
          >
            <button
              class="orange py-6 pl-3"
              @click="count--"
              :disabled="count === 0"
            >
              <svg
                width="12"
                height="4"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                    id="a"
                  />
                </defs>
                <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
              </svg>
            </button>
            <h2 class="font-7">{{ count }}</h2>
            <button class="orange pr-3" @click="count++">
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                    id="b"
                  />
                </defs>
                <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
              </svg>
            </button>
          </div>
          <button
            @click="addCart()"
            :disabled="count===0"
            class="flex gap-6 bg-orange hover:opacity-70 text-white font-7 w-full justify-center items-center rounded-lg"
          >
            <img src="../assets/imagese/icon-cart.svg" alt="" /> Add to cart
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const modal = ref(false);
    const cart = ref([]);

    // expose to template and other options API hooks
    return {
      count,
      modal,
      cart,
    };
  },

  methods: {
    showmodal() {
      this.modal = !this.modal;
      console.log(this.modal);
    },
    addCart() {
      //const product = {name: 'Fall Limited Edition Sneakers', }
      this.cart.push(+1);
    },

    deleteproduct() { 
      
      this.cart = this.cart.slice(0, -1)
      //console.log(JSON.parse(JSON.stringify(this.cart.splice(1, 1))));
    }
  },

  computed: {
    price() { 
      const price = 125
      return price * this.cart.length
    }
  },

  /* mounted() {
    console.log(this.count) // 0
  }, */
};
/* export default {}; */
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

.font-4 {
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
}

.font-7 {
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 700;
}

.orange {
  color: hsl(26, 100%, 55%);
}

.bg-orange {
  background-color: hsl(26, 100%, 55%);
}
.gris {
  background-color: hsl(223, 64%, 98%);
}

span {
  background-color: hsl(25, 100%, 94%);
  color: hsl(26, 100%, 55%);
  border-radius: 6px;
  padding: 2px 10px;
}

.imageb:hover {
  /* border: 2px solid hsl(26, 100%, 55%); */
  filter: opacity(60%);
}

.bordero:active {
  border: 3px solid hsl(26, 100%, 55%);
  border-radius: 0.8rem;
  overflow: hidden;
}

li{
  border-bottom: 3px solid transparent;
  padding-bottom: 1.22rem;
}

li:hover{
  border-bottom: 4px solid hsl(26, 100%, 55%);
  
}
</style>
