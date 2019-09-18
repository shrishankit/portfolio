<template>
  <div>
    <mainheader></mainheader>
    <transition name="slide-fade">
      <div v-if="show" class="bigbanner">
        <div class style="height:100%">
          <!-- <h1 class="title">Animation Test</h1> -->

          <!-- <teffect2></teffect2> -->
          <div class="columns is-gapless">
            <div class="column">
              <div class="">
                <div class="typewriterposition">
                  <terminaleffect></terminaleffect>
                </div>
              </div>
            </div>
          </div>
           
          <div class="columns is-gapless">
            <div class="column">
              <div class="onend" style="padding-right: 188px;">
                <a class="button is-primary is-rounded" @click="moveBanner('up')">Rounded</a>
              </div>
            </div>
          </div>
        </div>
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
import terminaleffect from "../components/terminaleffect";
import teffect2 from "../components/topimg";
export default {
  components: {
    mainheader,
    terminaleffect,
    teffect2
  },
  data() {
    return {
      up: false,
      show: true,
      scrollPosition: null,
      screenWidth : null,
      screenHight : null
    };
  },
  mounted() {
    window.addEventListener("resize", this.changeButton);
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
    },
    changeButton:function(sizeEvent){
      console.log("Wh",sizeEvent.target.innerWidth,sizeEvent.target.innerHeight);
      this.screenWidth = sizeEvent.target.innerWidth
      this.screenHight = sizeEvent.target.innerHeight
    }
  }
};
</script>
<style scoped>
</style>