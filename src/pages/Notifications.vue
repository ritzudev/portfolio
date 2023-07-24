<template>
  <div id="bg" class="bg">
    <button @click="check()">change</button>
    <div id="contenido" class="content">
      <header>
        <div class="noti">
          <h3>Notifications</h3>
          <span class="notinumber">3</span>
        </div>
        <h4>Mark all as read</h4>
      </header>
      <section>
        <article
          id="newmessage"
          v-for="(item, i) in messages"
          :key="item"
          :class="[item.new ? newmessage : read]"
        >
          <img :src="item.image" alt="" />
          <div style="width: 100%">
            <div class="message">
            <div >
              <div>
                <strong>{{ item.username }}</strong>
                {{ item.message }}
                <span v-if="item.new" class="newnoti" />
              </div>

              <p>{{ item.timeline }}</p>
            </div>
            
            <img
              v-if="i === 4"
              class="imgk"
              src="../assets/imagesn/image-chess.webp"
              alt=""
            />
          </div>
          <p class="reply" v-if="i === 3">
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </p>
          </div>
          
          
        </article>
      </section>

      <!--  -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const newmessage = "newmessage";
const read = "read";

const messages = ref([
  {
    image: "/src/assets/imagesn/avatar-mark-webber.webp",
    username: "Mark Webber",
    message: "reacted to your recent post My first tournament today!",
    timeline: "1m ago",
    new: true,
  },
  {
    image: "/src/assets/imagesn/avatar-angela-gray.webp",
    username: "Angela Gray",
    message: "followed you",
    timeline: "5m ago",
    new: true,
  },
  {
    image: "/src/assets/imagesn/avatar-jacob-thompson.webp",
    username: "Jacob Thompson",
    message: "has joined your group Chess Club",
    timeline: "1 day ago",
    new: true,
  },
  {
    image: "/src/assets/imagesn/avatar-rizky-hasanuddin.webp",
    username: "Rizky Hasanuddin",
    message: "sent you a private message",
    timeline: "5 days ago",
    new: false,
  },
  {
    image: "/src/assets/imagesn/avatar-kimberly-smith.webp",
    username: "Kimberly Smith",
    message: "commented on your picture",
    timeline: "1 week ago",
    new: false,
  },
  {
    image: "/src/assets/imagesn/avatar-nathan-peterson.webp",
    username: "Nathan Peterson",
    message:
      " reacted to your recent post 5 end-game strategies to increase your win rate",
    timeline: "2 weeks ago",
    new: false,
  },
  {
    image: "/src/assets/imagesn/avatar-anna-kim.webp",
    username: "Anna Kim",
    message: "left the group Chess Club",
    timeline: "2 weeks ago",
    new: false,
  },
]);

//const cont = document.getElementsByClassName("content");

//console.log(cont);

export default {
  data() {
    return {
      newmessage: "newmessage",
      read: "read",
      messages: [
        {
          image: "/src/assets/imagesn/avatar-mark-webber.webp",
          username: "Mark Webber",
          message: "reacted to your recent post My first tournament today!",
          timeline: "1m ago",
          new: true,
        },
        {
          image: "/src/assets/imagesn/avatar-angela-gray.webp",
          username: "Angela Gray",
          message: "followed you",
          timeline: "5m ago",
          new: true,
        },
        {
          image: "/src/assets/imagesn/avatar-jacob-thompson.webp",
          username: "Jacob Thompson",
          message: "has joined your group Chess Club",
          timeline: "1 day ago",
          new: true,
        },
        {
          image: "/src/assets/imagesn/avatar-rizky-hasanuddin.webp",
          username: "Rizky Hasanuddin",
          message: "sent you a private message",
          timeline: "5 days ago",
          new: false,
        },
        {
          image: "/src/assets/imagesn/avatar-kimberly-smith.webp",
          username: "Kimberly Smith",
          message: "commented on your picture",
          timeline: "1 week ago",
          new: false,
        },
        {
          image: "/src/assets/imagesn/avatar-nathan-peterson.webp",
          username: "Nathan Peterson",
          message:
            " reacted to your recent post 5 end-game strategies to increase your win rate",
          timeline: "2 weeks ago",
          new: false,
        },
        {
          image: "/src/assets/imagesn/avatar-anna-kim.webp",
          username: "Anna Kim",
          message: "left the group Chess Club",
          timeline: "2 weeks ago",
          new: false,
        },
      ],
      value: false,
    };
  },
  mounted() {
    //this.check()
  },
  methods: {
    check() {
      this.value = !this.value;
      const a = document.getElementById("bg");
      const b = document.getElementById("contenido");
      const c = document
        .querySelectorAll(".newmessage")
        .forEach((el) =>
          el.classList[this.value ? "add" : "remove"]("darktheme")
        );
      const d = document
        .querySelectorAll(".read")
        .forEach((el) =>
          el.classList[this.value ? "add" : "remove"]("darktheme")
        );
      a.classList[this.value ? "add" : "remove"]("darktheme");
      b.classList[this.value ? "add" : "remove"]("darktheme");
      //c.classList[this.value ? 'add' : 'remove']('darktheme')
      //a.classList.add('')

      console.log(c);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap");

.bg {
  background-color: var(--Very-light-grayish-blue);
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px;
  /* font-family: 'Plus Jakarta Sans', sans-serif; */
}

button {
  background-color: rgb(94, 225, 225);
  padding: 10px;
  margin: 10px 0px;
  border-radius: 10px;
  color: white;
}
.content {
  max-width: 675px;
  margin: 0px auto;
  background-color: var(--White);
  padding: 20px 14px;
  border-radius: 14px;
}

.content.darktheme {
  background-color: hsl(224deg 22% 21%);
}

.bg.darktheme {
  background-color: var(--Very-dark-blue);
  color: white;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 14px 0px;
  flex-wrap: wrap;
}

.noti {
  display: flex;
  gap: 14px;
}

.notinumber {
  background-color: var(--Blue);
  color: white;
  padding: 0px 10px;
  border-radius: 7px;
}

header .noti > h3 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: bold;
}

header > h4 {
  color: var(--Grayish-blue);
}

.message {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  /* flex-direction: column; */
}

.message > p {
  color: var(--Grayish-blue);
}

.newnoti {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: var(--Red);
  border-radius: 100%;
  margin-left: 6px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.newmessage {
  display: flex;
  gap: 14px;
  padding: 12px 14px;
  background-color: var(--Light-grayish-blue-1);
  border-radius: 14px;
}

.newmessage.darktheme {
  background-color: hsl(224deg 38% 17%);
}

.reply {
  border: 1px solid #ddd;
  padding: 18px;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
}

.reply:hover{
  background-color: var(--Light-grayish-blue-1);
  color: black;
  transition: all 600ms ease;
}

.imgk:hover{
  background-color: var(--Light-grayish-blue-1);
  cursor: pointer;
  padding: 4px;
  transition: all 600ms ease;
  border-radius: 8px;
}

.read {
  display: flex;
  gap: 14px;
  padding: 12px 14px;
  background-color: var(--White);
  border-radius: 14px;
  /* align-self: flex-start; */
}

.read.darktheme {
  background-color: hsl(224deg 38% 17%);
}
img {
  width: 40px;
  height: 40px;
}
@media screen and (max-width: 640px) {
  .content {
    max-width: 375px;
  }
}

/* @media screen and (min-width: 1200px) {
  .content{
    max-width: 775px;
  }
} */
</style>
