<template>
   
  <div class="flex
        xm:flex-col
        sm:flex-col
        md:flex-col
        h-screen
        w-screen
        p-5
        ">
    <header class="font-bold max-w-6xl w-full mx-auto">404 NOT FOUND</header> 
    <div
      class="
        flex
        xm:flex-col
        sm:flex-row
        justify-center
        items-center
        flex-grow
        w-full
        max-w-6xl
        mx-auto
        my-auto
        
      "
    >
      <img class="xm:h-82 xm:pb-20 sm:h-64 md:h-96" src="../assets/images/Scarecrow.png" alt="" />
      <div class="xm:pl-5 sm:pl-20">
        <h1 class="font-bold xm:text-5xl sm:text-6xl font-mono leading-normal">
          I have bad news <br class="xm:hidden sm:hidden md:hidden lg:block">
          for you
        </h1>
        <h1 class="xm:text-xl max-w-md sm:text-2xl  font-mono py-10">
          The page you are looking for might be removed or is temporarily
          unavailable
        </h1>
        <button
          class="
            flex
            justify-center
            h-16
            px-6
            bg-slate-600
            items-center
            text-white
            font-mono

          "
        >
          BACK TO HOMEPAGE
        </button>
      </div>
    </div>
    <footer class="text-center font-mono opacity-50">
      created by <u class="font-bold">Ritzu</u> - devChallenges.io
    </footer>
  </div>
</template>