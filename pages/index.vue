<template>
  <div class>
    <div class="homepage">
      <div :class="[{sticky:true}]">
        <!-- Main container -->
        <mainheader></mainheader>
      </div>
      <div class="columns" style="width:100%">
        <div class="column is-paddingless" style="height:95vh">
          <div class="center" style="height:100%">
          <blockquote class="quote-box" >
              <p class="quotation-mark">“</p>
              <p
                class="quote-text"
              >Don't believe anything that you read on the internet, it may be fake.</p>
              <span class="author"><i>Lorem ipsum</i></span>
              
               
              <!-- <div class="blog-post-actions">
                <p class="blog-post-bottom pull-left"></p>
                <p class="blog-post-bottom pull-right">
                  <span class="badge quote-badge">896</span> ❤
                </p>
              </div> -->
            </blockquote>
            </div>
        </div>
        <div class="column is-paddingless"  style="height:95vh">
          <div class="centerright" style="height:100%">
          <div style="padding-right:10%;width:max-content">
              <p class="myfonts isbig">Shrish Ankit</p>
              <h2 class="myfonts subtitle">Full Stack Developer</h2>
            </div>
            </div>
        </div>
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
@import url("https://fonts.googleapis.com/css?family=Allerta+Stencil|Caveat|Caveat+Brush|Courgette|Neucha&display=swap");
@import url("https://fonts.googleapis.com/css?family=Baloo|Carter+One|Codystar|Fredoka+One|Monoton|Press+Start+2P|Righteous&display=swap");
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
