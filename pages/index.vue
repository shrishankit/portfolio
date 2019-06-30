<template>
  <div class>
    <div class="homepage">
      <div :class="[{sticky:true}]">
        <!-- Main container -->
        <mainheader></mainheader>
      </div>
      <!-- <section class="superlightpadding">
       <article class="media">
      <figure class="image is-128x128 sticky">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <div class="media-content">
        <div class="content">
          <p>
            <strong class="myfonts" style="font-size:20px">Shrish Ankit</strong>
            </p>
        </div>
      </div>
      <div class="media-right">
        
      </div>
      
    </article>
      </section>-->
      <div class="center" style="height:90%">
        <div>
          <h1 class="myfonts title">Shrish Ankit</h1>
          <h2 class="subtitle">Full Stack Developer</h2>
        </div>
      </div>
    </div>
    <!-- <div class="is-divider-vertical" data-content="OR"></div> -->
    <div class>Under Construction .....</div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import mainheader from "../components/header";

export default {
  components: {
    mainheader
  },

  data() {
    return {
      scrollPosition: null
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Baloo|Carter+One|Codystar|Fredoka+One|Monoton|Press+Start+2P|Righteous&display=swap");
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
