<template>
  <div class="parallaxCard">
    <div class="parallaxFront" :style="{ 'background-color' : backgroundColor }">
      <Icon :icon="icon"></Icon>
    </div>
    <div class="parallaxBack">
      <div class="header">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "ParallaxCard",
  props: ["backgroundColor", "icon", "index", "title", "description"],
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
  width: 100%;
  padding-top: 100%;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);

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
    top: 0;
  }

  .parallaxFront {
    z-index: 100;
    justify-content: center;
    align-items: center;
    display: flex;

    .iconContainer {
      transform-style: preserve-3d;
      transform: translateZ(80px);
    }
  }

  .parallaxBack {
    background: lighten($primaryGrey, 15%);
    transform: rotateY(180deg);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;

    .header {
      color: #fff;
      font-size: 28px;
      transform-style: preserve-3d;
      transform: translateZ(80px);
      padding-bottom: 20px;
    }

    .description {
      font-size: 18px;
      width: 100%;
      transform-style: preserve-3d;
      transform: translateZ(75px);
    }
  }
}
</style>


