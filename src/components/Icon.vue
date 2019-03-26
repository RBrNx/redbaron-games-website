<template>
  <div class="iconContainer">
    <font-awesome-icon v-if="!isFile" :icon="['fab', icon]"></font-awesome-icon>
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
  }
}
</style>


