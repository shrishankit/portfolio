<template>
  <div>
    <!-- <mainheader></mainheader> -->
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
    <div class="greybackground" style="height:100vh">
      <div class="column"><span style="padding: 14px 15px;" class="" @click="moveBanner('down')"
        ><i class="fas fa-chevron-left fa-3x"></i></span></div>
        <div class="aboutme">
          <span class="firsttext title is-1">ABOUT</span>&nbsp;<span class="secondtext subtitle is-3">ME</span>
          <br/>
          <br/>
          <p class="intro">I'm the co-founder of Gruntwork, a company that helps startups get up and running on AWS with DevOps 
            best practices and world-class infrastructure. Our mission is to make it an order of magnitude easier 
            to understand, develop, and deploy software. We take care of all the "undifferentiated heavy lifting"—the grunt work—so that your team can focus on the products and services unique to your company.</p>
        </div>
      <timeline></timeline>
      <div class="timelinebutton">
         <div class="onend timelinebuttomloc">
        <svg
                id="stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="0"
                height="0"
              >
                <defs>
                  <path
                    id="linenew"
                    d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    vector-effect="non-scaling-stroke"
                  />
                </defs>
              </svg>
              <nuxt-link @click="initiateProsses()" class="btn" to="/maindetails"
                >Details...
                <svg class="button-stroke" viewBox="0 0 154 13">
                  <use href="#linenew"></use>
                </svg>
                <svg class="button-stroke" viewBox="0 0 154 13">
                  <use href="#linenew"></use>
                </svg>
              </nuxt-link>
      </div>
      </div>
     
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
      display:true,
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
    },
    initiateProsses(){
      this.$nuxt.$emit("STAG_ANIMATE",this.display)
    }
  }
};
</script>
<style scoped>
</style>
