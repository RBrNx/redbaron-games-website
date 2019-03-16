<template>
  <div>
    <div id="cardCloneOverlay" :class="cloneClass" @click="overlayClicked"></div>
    <div id="cardClone" :style="cardStyle" :class="cloneClass">
      <div id="cardFlip" :style="cardFlipStyle">
        <div id="cardFront" :style="cardFrontStyle">
          <slot name="cardFront"></slot>
        </div>
        <div id="cardBack" :style="cardBackStyle">
          <slot name="cardBack"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardClone",
  props: ["customStyle"],
  computed: {
    cardStyle() {
      return this.customStyle ? this.customStyle : {};
    }
  },
  data() {
    return {
      cloneClass: null,
      cardFrontStyle: {},
      cardBackStyle: {},
      cardFlipStyle: {}
    };
  },
  methods: {
    overlayClicked() {
      this.$emit("overlayClicked");
      this.cardFlipStyle.transform = "rotateY(0deg)";
      this.cloneClass = null;
    }
  },
  mounted() {
    setTimeout(() => {
      const ref = this.$el;
      const isOverHalfway =
        parseFloat(this.customStyle.left) +
          parseFloat(this.customStyle.width) / 2 >
        window.innerWidth / 2;
      const transform = isOverHalfway ? "rotateY(-180deg)" : "rotateY(180deg)";

      this.cardFlipStyle.transform = transform;
      this.cloneClass = "shown";
    }, 50);
  }
};
</script>

<style lang="scss" scoped>
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

  #cardFlip {
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    z-index: 99;
    transform-style: preserve-3d;
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
  }
}
</style>
