<template>
  <div class="columns">
    <div class="column">
      <pre id="typewriter" class>
        <span class="var-highlight">TESTING TEXT CSS</span> 
                Typewriter Style 
                <span @change="backWord(mainString)">{{mainString}}</span>
                </pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stringArry : [],
      mainString : "Check This"
    };
  },
  mounted() {
    this.initiatType();
  },
  methods: {
    initiatType() {
      var typer = document.getElementById("typewriter");

      var typewriter = this.setupTypewriter(typer);

      typewriter.type();
    },
    setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function() {
        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = "";
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = Math.random() * typeSpeed + 50;
          }
          t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = Math.random() * typeSpeed + 50;
          writingTag = false;
          if (tagOpen) {
            var newSpan = document.createElement("span");
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
        }
      };

      return {
        type: type
      };
    },
    backWord(inputString){
      this.stringArry = inputString.split()
      console.log("Array String",this.stringArry);
      for (let i = 0; i < this.stringArry.length; i++) {
        // const element = this.stringArry[i];
        this.stringArry.pop()
        this.mainString = this.stringArry.toString()
      }
      
    }
  }
};
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Khula:700);

.var-highlight {
  color: #c0ad60;
  font-size: 30px;
}
.string-highlight {
  color: rgba(253, 149, 90, 0.8);
}

#typewriter {
  font-size: 18px;
  margin: 0;
  font-family: "Courier New";

  &:after {
    content: "_";
    animation: blink 500ms linear infinite alternate;
  }
}

.blinker {
  font-size: 12px;
  margin: 0;
  //   font-family: "Courier New";

  &:after {
    content: "_";
    animation: blink 500ms linear infinite alternate;
  }
}

@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>