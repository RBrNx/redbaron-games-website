<template>
  <div>
    <div id="cardCloneOverlay" :class="cardClass" @click="closeCardClone"></div>
    <div id="cardClone" :style="customStyle" :class="cardClass">
      <div id="cardFlip" :style="{ transform: cardTransform }">
        <div id="cardFront">
          <component :is="cardFrontComponent" v-bind="{ itemData }"></component>
        </div>
        <div id="cardBack">
          <close-button @click="closeCardClone"></close-button>
          <div v-bar class="scrollContainer">
            <div>
              <component :is="cardBackComponent"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import CloseButton from "../components/CloseButton";

export default {
  name: "CardClone",
  props: ["cardFrontComponent", "cardBackComponent", "fullscreen"],
  components: {
    CloseButton
  },
  data() {
    return {
      cardTransform: "rotateY(0deg)",
      customStyle: null,
      cardClass: null,
      clonedElement: null
    };
  },
  computed: {
    itemData() {
      return this.$route.params.itemData;
    }
  },
  methods: {
    closeCardClone() {
      this.$el
        .querySelector("#cardClone")
        .addEventListener("transitionend", this.onTransitionEnd);
      this.cardTransform = "rotateY(0deg)";
      document.body.classList.remove("overlayShown");

      const cardElement = this.clonedElement;
      const viewportOffset = cardElement.getBoundingClientRect();

      this.cardClass = null;

      this.customStyle = {
        height: `${cardElement.clientHeight}px`,
        width: `${cardElement.clientWidth}px`,
        left: `${viewportOffset.left}px`,
        top: `${viewportOffset.top}px`
      };

      this.$emit("cardCloneClosed");
    },
    onTransitionEnd(e) {
      if (e.propertyName === "transform" && e.target.id === "cardFlip") {
        this.onClosed();
      }
    },
    onClosed() {
      this.$el.removeEventListener("transitionend", this.onTransitionEnd);
      this.clonedElement.style.opacity = 1;

      const currPath = this.$route.path;
      const id = this.$route.params.id;
      const newPath = currPath.replace(`/${id}`, "");
      this.$router.replace({ path: newPath });
    }
  },
  mounted() {
    const cardElement = document.getElementById(this.$route.params.id);
    const viewportOffset = cardElement.getBoundingClientRect();
    this.clonedElement = cardElement;

    this.customStyle = {
      height: `${cardElement.clientHeight}px`,
      width: `${cardElement.clientWidth}px`,
      left: `${viewportOffset.left}px`,
      top: `${viewportOffset.top}px`
    };

    cardElement.style.opacity = 0;

    setTimeout(() => {
      const isOverHalfway =
        parseFloat(this.customStyle.left) +
          parseFloat(this.customStyle.width) / 2 >
        window.innerWidth / 2;
      const transform = isOverHalfway ? "rotateY(-180deg)" : "rotateY(180deg)";
      this.cardTransform = transform;
      this.cardClass = "shown" + (this.fullscreen ? " fullscreen" : "");
      document.body.classList.add("overlayShown");
      this.$emit("cardCloneOpened");
    }, 150);
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.scrollContainer {
  height: 100%;
}

.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 10px);
  display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(0, 0, 0, 0.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(0, 0, 0, 0.5);
}

#cardCloneOverlay {
  &.shown {
    opacity: 0.7;
  }

  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: 0;
  transition: opacity 1.6s;
}

#cardClone {
  transition: 0.6s;
  background-color: transparent;
  position: fixed;
  perspective: 1000px;
  z-index: 100;

  &.shown {
    height: 100% !important;
    width: 100% !important;
    left: 0 !important;
    top: 0 !important;

    @include tablet {
      height: 90% !important;
      width: 80% !important;
      left: 50vw !important;
      top: 50vh !important;
      transform: translate(-50%, -50%) !important;
    }

    @include desktop {
      height: 80% !important;
      width: 50% !important;
      left: 50vw !important;
      top: 50vh !important;
      transform: translate(-50%, -50%) !important;
    }

    &.fullscreen {
      @include tablet {
        height: 100% !important;
        width: 100% !important;
        left: 0 !important;
        top: 0 !important;
        transform: none !important;
      }

      @include desktop {
        height: 100% !important;
        width: 100% !important;
        left: 0 !important;
        top: 0 !important;
        transform: none !important;
      }

      #cardBack {
        padding: 1px;
      }
    }

    #cardBack {
      padding: 15px;
      padding-top: 50px;
    }
  }

  #cardFlip {
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    z-index: 99;
    transform-style: preserve-3d;
    transform: rotate(0deg);
  }

  #cardFront,
  #cardBack {
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  #cardFront {
    z-index: 100;
  }

  #cardBack {
    z-index: 101;
    transform: rotateY(180deg);
    background: lighten($primaryGrey, 5%);
    overflow: hidden;
    border-radius: 5px;

    .scrollContainer {
      height: 100%;
    }
  }
}

.ps:hover > .ps__scrollbar-y-rail:hover {
  background-color: transparent;
}

.ps:hover.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail {
  background-color: transparent;
}

.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail {
  background-color: transparent;
}

.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y {
  background-color: lighten($primaryGrey, 15%);
}

.ps:hover > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
  background-color: $headingGrey;
  width: 6px;
}

.ps:hover.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y {
  background-color: $headingGrey;
  width: 6px;
}

.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y {
  background-color: $headingGrey;
  width: 6px;
}
</style>
