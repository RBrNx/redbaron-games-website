<template>
  <div class="parallaxCard">
    <div class="parallaxFront" :style="{ 'background-color' : backgroundColor }">
      <Icon :icon="icon"></Icon>
    </div>
    <div class="parallaxBack">
      <p>This is some text</p>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "ParallaxCard",
  props: ["backgroundColor", "icon", "index"],
  components: {
    Icon
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.parallaxCard {
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotate(0deg);
  z-index: 99;
  position: relative;
  height: 250px;
  width: 250px;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
    position: absolute;
  }

  &:hover {
    transform: rotateY(180deg);
  }

  .parallaxFront,
  .parallaxBack {
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .parallaxFront {
    z-index: 100;
    justify-content: center;
    align-items: center;
    display: flex;

    .iconContainer {
      transform-style: preserve-3d;
      transform: translateZ(75px);
    }
  }

  .parallaxBack {
    background: lighten($primaryGrey, 15%);
    transform: rotateY(180deg);
  }
}
</style>


