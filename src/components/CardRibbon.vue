<template>
  <div class="cardRibbon">
    <span
      class="ribbon"
      v-html="require(`!html-loader!../assets/blog-ribbon.svg`)"
      :style="{ 'fill': fill || '#000' }"
    ></span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "CardRibbon",
  props: ["label", "fill"]
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.cardRibbon {
  display: block;
  height: 100px;
  width: 100px;
  position: absolute;
  right: 0;
  top: 0;

  .ribbon {
    //z-index: 1001;
    position: relative;
    top: 0;
  }

  .label {
    //z-index: 1002;
    position: absolute;
    color: #fff;
    top: 38%;
    left: 62%;
    transform: translate(-50%, -50%) rotate(45deg);
    display: inline-block;
    font-size: 20px;
  }
}
</style>

