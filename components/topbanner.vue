<template>
  <div>
    <mainheader></mainheader>
    <transition name="slide-fade">
      <!-- Main Content of home page -->

      <div v-if="show" class="bigbanner">
        <!-- style="height:100%" -->
        <!-- <div class="columns is-gapless"> -->
        <!-- <div class="column">
              <div class>
                <div class="typewriterposition">
                  <terminaleffect></terminaleffect>
                </div>
              </div>
            </div>
            <div class="column">
              <progchart></progchart>
            </div> -->
        <div class="">
          <div class="">
            <terminaleffect></terminaleffect>
          </div>
        </div>
        <div class="onend">
          <progchart></progchart>
        </div>

        <div class="columns is-gapless">
          <div class="column">
            <div class="center">
              <!-- <div class="buttonStyle1">
                <span @click="moveBanner('up')">Rounded</span>
              </div> -->
              <svg
                id="stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="0"
                height="0"
              >
                <defs>
                  <path
                    id="line"
                    d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    vector-effect="non-scaling-stroke"
                  />
                </defs>
              </svg>
              <a class="btn" @click="moveBanner('up')"
                >U Know Where to Click!
                <svg class="button-stroke" viewBox="0 0 154 13">
                  <use href="#line"></use>
                </svg>
                <svg class="button-stroke" viewBox="0 0 154 13">
                  <use href="#line"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Content Below Banner -->
    <div class="greybackground">
      <span class="button is-primary is-rounded" @click="moveBanner('down')"
        >Rounded</span
      >
      <timeline></timeline>
    </div>
  </div>
</template>
<script>
import mainheader from "../components/header";
import terminaleffect from "../components/terminaleffect";
import teffect2 from "../components/topimg";
import progchart from "../components/charts/prog";
import timeline from "../components/charts/timeline"
export default {
  components: {
    mainheader,
    terminaleffect,
    teffect2,
    progchart,
    timeline
  },
  data() {
    return {
      up: false,
      show: true,
      scrollPosition: null,
      screenWidth: null,
      screenHight: null
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
    changeButton: function(sizeEvent) {
      console.log(
        "Wh",
        sizeEvent.target.innerWidth,
        sizeEvent.target.innerHeight
      );
      this.screenWidth = sizeEvent.target.innerWidth;
      this.screenHight = sizeEvent.target.innerHeight;
    }
  }
};
</script>
<style scoped>
</style>
