<template>
  <div>
    <div class="slideInLeft">
      <div class="progbar">
        <span class="textwhite ">{{ lang }}</span>
        <!-- <transition-group name="list" tag="p"> -->
          <progress
            v-show="show"
            class="progress is-small is-primary progbartitle "
            :value="score"
            max="100"
            >15%</progress
          >
        <!-- </transition-group> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lang: "",
    score: ""
  },
  data() {
    return {
      show: false,
      isMoved: true
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.show = true;
      // this.AnimateDelayList();
      // this.$root.$on("STAG_ANIMATE",this.AnimateDelayList())
    },
    AnimateDelayList() {
      // get vendor transition property
      var moveButton = document.querySelector(".move-button");
      var items = document.querySelectorAll(".grid-a .grid-item");
      this.isMoved = false;

      for (var i = 0; i < items.length; i++) {
        // get function in closure, so i can iterate
        var toggleItemMove = getToggleItemMove(i);
        // stagger transition with setTimeout
        setTimeout(toggleItemMove, i * 50);
      }
    },
    getToggleItemMove(i) {
      var item = items[i];
      return function() {
        item.classList.toggle("is-moved");
      };
    }
  }
};
</script>
