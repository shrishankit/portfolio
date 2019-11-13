<template>
  <div class>
    <nav
      style="z-index: 99999999;"
      :class="[{newheader: scrollPosition < 10, altheader: scrollPosition > 10},{navbar:true}]"
    >
      <div class="navbar-brand">
        <div class="dropdown is-hoverable" style="padding: 0.5rem 0.75rem;">
          <div class="dropdown-trigger centerimp">
            <!-- <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span>Hover me</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
            </button>-->
            <figure class="image is-32x32" aria-haspopup="true" aria-controls="dropdown-menu4">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
          </div>
          <transition name="slide-left">
            <div class="dropdown-menu" id="dropdown-menu4" role="menu" style="left:5px;">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <p>
                    You can insert
                    <strong>any type of content</strong> within the dropdown menu.
                  </p>
                  <hr class="dropdown-divider" />
                  <a href="#" class="dropdown-item">This is a link</a>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="navbar-burger burger" @click="displayMenu" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <transition name="slide-left">
        <div id="navMenubd-example" class="navbar-menu" :class="[{'is-active':toggleActive}]">
          <div class="navbar-start">
            <!-- <b-switch :value="true" type="is-info">Info</b-switch> -->
            <!-- <div class="navbar-link">More</div>
                <div id="moreDropdown" class="navbar-dropdown">
                  <a class="navbar-item" href="http://bulma.io/extensions/">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <p>
                            <strong>Extensions</strong>
                            <br />
                            <small>Side projects to enhance Bulma</small>
                          </p>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <span class="icon has-text-info">
                            <i class="fa fa-plug"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
            </div>-->

            <!-- <div class="navbar-item has-dropdown is-hoverable">
            
            <div class="navbar-dropdown">
              

              <hr class="navbar-divider" />
             
            </div>
            </div>-->
            <!-- <div class="navbar-item has-dropdown is-hoverable is-mega">
            
            <div id="blogDropdown" class="navbar-dropdown" data-style="width: 18rem;">
              <div class="is-fluid">
                <div class="columns">
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                    <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                      <div class="navbar-content">
                        <p>
                          <small class="has-text-info">03 Aug 2017</small>
                        </p>
                        <p>New feature: list of tags</p>
                      </div>
                    </a>
                  </div>
                  
                </div>
              </div>

              <hr class="navbar-divider" />
              <div class="navbar-item">
                <div class="navbar-content">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                          <span class="icon is-small">
                            <i class="fa fa-rss"></i>
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>-->
          </div>

          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <!-- <div class="navbar-link">More</div>
                <div id="moreDropdown" class="navbar-dropdown">
                  <a class="navbar-item" href="http://bulma.io/extensions/">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <p>
                            <strong>Extensions</strong>
                            <br />
                            <small>Side projects to enhance Bulma</small>
                          </p>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <span class="icon has-text-info">
                            <i class="fa fa-plug"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
              </div>-->
            </div>

            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="navbar-item" href="https://github.com/shrishankit">
                    <i class="fab fa-github"></i>
                  </a>
                </p>
                <p class="control">
                  <a :class="{'is-info':checked}" class="button is-rounded tooltip is-tooltip-left is-flex-mobile is-tooltip-multiline" data-tooltip="Tooltip with a long Text. So we use is-tooltip-multiline modifier to force multiline display." @click="changeTheme">
                    <i class="fas fa-adjust"></i>
                  </a>
                </p>

                <!-- <p class="control">
                  <a
                    class="button is-primary is-rounded"
                    href="https://github.com/jgthms/bulma/archive/0.5.1.zip"
                  >
                    <span class="icon">
                      <i class="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      scrollPosition: null,
      toggelSidebar: false,
      toggleActive: false,
      checked: false
    };
  },
  mounted() {
    // this.displayMenu()
    window.addEventListener("scroll", this.updateScroll);
    this.changeTheme();
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    changeTheme() {
      this.checked = !this.checked;
      if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    },
    displayMenu() {
      // Get all "navbar-burger" elements
      this.toggelSidebar = !this.toggelSidebar;
      var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );
      console.log($navbarBurgers);

      // Check if there are any nav burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
          // Get the target from the "data-target" attribute
          console.log("THis is $el", $el);

          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          // $el.toggleActive =  true;
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      }
    }
  }
};
</script>

