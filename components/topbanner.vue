<template>
  <div>
    <mainheader></mainheader>
    <transition name="slide-fade">
      <div v-if="show" class="bigbanner" :class="[{'slideInUp':up}]">
        <h1 class="title">Animation Test</h1>
        <a class="button is-primary is-rounded" @click="moveBanner('up')">Rounded</a>
      </div>
    </transition>
    <!-- Content Below Banner -->
    <div>
        <a class="button is-primary is-rounded" @click="moveBanner('down')">Rounded</a>
      <p>Test text</p>
    </div>
  </div>
</template>
<script>
import mainheader from "../components/header";
export default {
  components: {
      mainheader
  },
  data() {
    return {
      up: false,
      show: true,
      scrollPosition: null
    };
  },
  mounted() {
    // window.addEventListener("scroll", function() {
    //   var lastScrollTop = 0;
    //   // or window.addEventListener("scroll"....
    //   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //   if (st > lastScrollTop) {
    //     // downscroll code
    //     console.log("in down", this.show);
    //     if (lastScrollTop > 10) {
    //       this.show = false;
    //       this.up = true;
    //       console.log("in down", this.show);
    //     }
    //   } else {
    //     // upscroll code
    //     // console.log("up up");
    //     this.up = false;
    //   }
    //   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    //   console.log("Last Scrool", lastScrollTop);
    // });

    // window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    moveBanner(direction) {
      switch (direction) {
        case "up":
          this.up = true;
          this.show = false;
          break;
        case "down":
          this.up = false;
          this.show = true;
          break;
        default:
          break;
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    goUp() {
      console.log(this);
      this.up = true;
      console.log(this.up);
    }
  }
};
</script>
<style scoped>

</style>