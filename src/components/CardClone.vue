<template>
  <div>
    <div id="cardCloneOverlay" :class="cardClass" @click="closeCardClone"></div>
    <div id="cardClone" :style="customStyle" :class="cardClass">
      <div id="cardFlip" :style="{ transform: cardTransform }">
        <div id="cardFront">
          <component :is="cardFrontComponent" v-bind="{ itemData }"></component>
        </div>
        <div id="cardBack">
          <span id="closeButton" @click="closeCardClone">
            <font-awesome-icon id="closeIcon" icon="times"></font-awesome-icon>
          </span>
          <VuePerfectScrollbar class="scrollContainer">
            <component :is="cardBackComponent"></component>
          </VuePerfectScrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  name: "CardClone",
  props: ["cardFrontComponent", "cardBackComponent", "fullscreen"],
  components: {
    VuePerfectScrollbar
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
      this.$emit("closeCardClone");
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
    },
    onTransitionEnd(e) {
      if (e.propertyName === "transform") {
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
    }, 150);
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

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

    #closeButton {
      position: absolute;
      top: 25px;
      right: 20px;
      z-index: 99;
      background-color: transparent;
      width: 40px;
      height: 40px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background 0.4s ease-out;

      &:hover {
        background-color: lighten($primaryGrey, 15%);
      }

      #closeIcon {
        font-size: 24px;
        color: $bodytextGrey;
      }
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
