<template>
  <div class="flex flex-col bg-yellow-300 min-h-screen">
    <NavBarVue />
    <section class="mt-32 mx-14">
    <h1 class="mx-auto max-w-4xl text-center xs:text-1xl text-7xl font-bold">
      El mejor Portfolio que vas a ver en tu vida!
    </h1>
    <p class="text-center max-w-2xl text-3xl mx-auto mt-4 opacity-70">
      Todas mis Skills y futuras Skills que voy a adquir, desde frameworks tanto
      front end como back end.
    </p>

    <div class="p-10 mb-10 bg-white mx-auto max-w-3xl mt-20 rounded-lg">
      <ul class="grid gap-4 xm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:xl:grid-cols-4 xl:grid-cols-4">
        <!-- <li>React</li>
        <li>Vue</li>
        <li>Flutter</li>
        <li>Reat Native</li> -->
        <div class="flex flex-col justify-center items-center border
         border-gray-200 py-2 rounded shadow-lg max-w-" 
         v-for="teg in tegnologias" :key="teg.index">
            <img class="max-w-sm max-h-14" :src="teg.svg" alt="">
            <h1>{{teg.name}}</h1>
        </div>
      </ul>
    </div>
  </section>
  </div>
  
</template>

<script>
import NavBarVue from './NavBar.vue';

export default {
  components: {
        NavBarVue
      },
    data() {
        return{
            tegnologias:[
                { name: 'React', svg: '/src/assets/bootstrap.svg'},
                { name: 'React', svg: '/src/assets/mysql-icon.svg'},
                { name: 'React', svg: '/src/assets/bootstrap.svg'},
                { name: 'React', svg: '/src/assets/mysql-icon.svg'},
                { name: 'React', svg: '/src/assets/bootstrap.svg'},
                { name: 'React', svg: '/src/assets/mysql-icon.svg'},
                { name: 'React', svg: '/src/assets/bootstrap.svg'},
                { name: 'React', svg: '/src/assets/mysql-icon.svg'},
            ]
        }
    }
}
</script>