<template>
  <div>
    <div id="cardCloneOverlay" :class="cloneClass" @click="closeCardClone"></div>
    <div id="cardClone" :style="cardStyle" :class="cloneClass">
      <div id="cardFlip" :style="{ transform: cardTransform }">
        <div id="cardFront">
          <slot name="cardFront"></slot>
        </div>
        <div id="cardBack">
          <font-awesome-icon id="closeIcon" icon="times" @click="closeCardClone"></font-awesome-icon>
          <VuePerfectScrollbar class="scrollContainer">
            <slot name="cardBack"></slot>
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
  props: ["customStyle", "cardClass"],
  components: {
    VuePerfectScrollbar
  },
  computed: {
    cardStyle() {
      return this.customStyle ? this.customStyle : {};
    }
  },
  data() {
    return {
      cloneClass: null,
      cardTransform: "rotateY(0deg)"
    };
  },
  watch: {
    cardClass(val) {
      this.cloneClass = val;
    }
  },
  methods: {
    closeCardClone() {
      this.$emit("closeCardClone");
      this.cardTransform = "rotateY(0deg)";
      this.cloneClass = null;
      document.body.classList.remove("overlayShown");
    }
  },
  mounted() {
    setTimeout(() => {
      const isOverHalfway =
        parseFloat(this.customStyle.left) +
          parseFloat(this.customStyle.width) / 2 >
        window.innerWidth / 2;
      const transform = isOverHalfway ? "rotateY(-180deg)" : "rotateY(180deg)";

      this.cardTransform = transform;
      this.cloneClass = "shown";
      document.body.classList.add("overlayShown");
    }, 50);
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
    //padding: 50px;
    overflow: hidden;
    border-radius: 5px;

    .scrollContainer {
      //overflow-y: auto;
      height: 100%;
    }

    #closeIcon {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 30px;
      color: lighten($primaryGrey, 15%);
      cursor: pointer;
      z-index: 99;

      &:hover {
        color: lighten($headingGrey, 5%);
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
