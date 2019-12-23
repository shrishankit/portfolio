<template>
  <div class="greybackground" style="height:100vh">
    <div class="exprience">
      <div class="aboutme">
        <span class="firsttext title is-1">Experience</span>
        <br />
        <br />
        <p class="intro textwhite">
          I'm the co-founder of Gruntwork, a company that helps startups get up
          and running on AWS with DevOps best practices and world-class
          infrastructure. Our mission is to make it an order of magnitude easier
          to understand, develop, and deploy software. We take care of all the
          "undifferentiated heavy lifting"—the grunt work—so that your team can
          focus on the products and services unique to your company.
        </p>
      </div>
      <div class="onend">
        <div class="wrapperprogbox">
          <h3>Language I speak</h3>

          <div class="content">
            <div class="progbargroup">
              <div>
                <transition-group
                  name="list"

                  @scroll="enter()"
                  v-on:leave.native="leave()"
                  
                  tag="p"
                >
                  <span
                    v-for="(item, index) in langs"
                    :key="index"
                    :item.sync="langs"
                  >
                    <progbar
                      :lang="item.langname"
                      :score="item.score"
                    ></progbar>
                  </span>
                </transition-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import progbar from "../components/progbar";
import { FadeTransition } from "vue2-transitions";
import Velocity from 'velocity-animate'
export default {
  components: {
    progbar,
    FadeTransition
  },
  data() {
    return {
      //   langs: ["Golang", "JavaScript", "TypeScript", "HTML", "CSS"],
      show: false,
      // displayList:false,
      style: { enter: 300, leave: 300 },
      langs: [
        { langname: "Golang", score: "63" },
        { langname: "JavaScript", score: "90" },
        { langname: "TypeScript", score: "34" },
        { langname: "HTML", score: "88" },
        { langname: "CSS", score: "65" }
      ]
    };
  },
  mounted() {
    this.init();
    this.$nuxt.$on("STAG_ANIMATE", this.AnimateDelayList());
  },
  methods: {
    init() {
      this.show = true;
      // this.AnimateDelayList();
    },
    AnimateDelayList() {
      // get vendor transition property
      this.displayList = true;
      var items = document.querySelectorAll(".staged-list-a .staged-list-item");

      var docElemStyle = document.documentElement.style;
      var transitionProp =
        typeof docElemStyle.transition == "string"
          ? "transition"
          : "WebkitTransition";

      console.log("Style element", docElemStyle, transitionProp, items);

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // stagger transition with transitionDelay
        item.style[transitionProp + "Delay"] = i * 50 + "ms";
        console.log("this is i", i);

        // item.classList.toggle("is-moved");
      }
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      console.log("Delay is:", delay);

      setTimeout(function() {
        Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
};
</script>
