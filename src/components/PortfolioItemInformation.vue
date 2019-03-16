<template>
  <div class="portfolioItemInformation">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PortfolioItemInformation",
  components: {},
  methods: {
    buttonClick() {
      this.$emit("buttonClick");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.portfolioItemInformation {
  background: lighten($primaryGrey, 5%);
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
</style>
