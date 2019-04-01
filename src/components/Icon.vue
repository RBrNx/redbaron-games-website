<template>
  <div class="iconContainer">
    <font-awesome-icon v-if="!isFile" :icon="['fab', icon]"></font-awesome-icon>
    <div v-else-if="isFile" v-html="require(`!html-loader!../assets/logos/${icon}.svg`)"></div>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: ["icon", "isFile"]
};
</script>

<style lang="scss">
.iconContainer {
  display: inline-block;

  svg {
    color: #fff;
    font-size: 110px;
    width: 110px;
  }
}
</style>


