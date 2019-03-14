<template>
  <div>
    <div id="cardCloneOverlay" :class="cloneClass" @click="overlayClicked"></div>
    <div id="cardClone" :style="cardStyle" :class="cloneClass">
      <div id="cardFront" :style="cardFrontStyle">
        <slot name="cardFront"></slot>
      </div>
      <div id="cardBack" :style="cardBackStyle">
        <slot name="cardBack"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardClone",
  props: ["width", "height", "x", "y", "transform", "customStyle"],
  computed: {
    cardStyle() {
      return this.customStyle ? this.customStyle : {};
    }
  },
  data() {
    return {
      cloneClass: null,
      cardFrontStyle: {},
      cardBackStyle: {}
    };
  },
  methods: {
    overlayClicked() {
      this.$emit("overlayClicked");
      const ref = this.$el;
      this.cardFrontStyle.transform = "rotateY(0deg)";
      this.cardBackStyle.transform = "rotateY(-180deg)";
      this.cloneClass = null;
    }
  },
  mounted() {
    setTimeout(() => {
      const ref = this.$el;
      this.cardFrontStyle.transform = "rotateY(180deg)";
      this.cardBackStyle.transform = "rotateY(0deg)";
      if (ref.offsetLeft + ref.clientWidth / 2 > window.innerWidth / 2) {
        this.cardFrontStyle.transform = "rotateY(-180deg)";
        this.cardBackStyle.transform = "rotateY(-360deg)";
      }
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
  //display: none;
  transition: 0.6s;
  transform-style: preserve-3d;
  z-index: 99;
  perspective: 1000px;
  position: fixed;

  #cardFront {
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    overflow: hidden;
    z-index: 100;
    //background-color: #59a3ff;
    transform: translatez(0);
  }

  #cardBack {
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    overflow: hidden;
    transform: rotateY(-180deg);
    z-index: 101;
    background-color: #aaa;
  }
}
</style>
