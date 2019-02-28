<template>
  <div id="cardClone" :style="{ 'width': cardWidth, 'height': cardHeight }">
    <div id="cardFront">
      <slot name="cardFront"></slot>
    </div>
    <div id="cardBack">
      <slot name="cardBack"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardClone",
  props: ["width", "height"],
  computed: {
    cardWidth() {
      return this.width ? this.width + "px" : "0px";
    },
    cardHeight() {
      return this.height ? this.height + "px" : "0px";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

#cardClone {
  //display: none;
  transition: 0.6s;
  transform-style: preserve-3d;
  z-index: 99;
  perspective: 1000px;
  position: absolute;

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
