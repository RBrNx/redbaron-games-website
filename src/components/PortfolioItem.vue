<template>
  <div class="portfolioItem">
    <div class="header">
      <img :src="require(`../assets${imageLink}`)">
    </div>
    <div class="body" :style="{ 'height': bodyHeight }">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <primary-button @buttonClick="buttonClick">Learn More</primary-button>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "./PrimaryButton";

export default {
  name: "PortfolioItem",
  components: { PrimaryButton },
  props: ["itemData", "bodySize"],
  computed: {
    title() {
      return this.itemData ? this.itemData.title : null;
    },
    description() {
      return this.itemData ? this.itemData.description : null;
    },
    imageLink() {
      return this.itemData ? this.itemData.imageMain : null;
    },
    name() {
      return this.itemData ? this.itemData.name : null;
    },
    bodyHeight() {
      return this.bodySize ? this.bodySize + "px" : null;
    }
  },
  methods: {
    buttonClick() {
      this.$emit("buttonClick");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.portfolioItem {
  display: grid;
  grid-template-rows: 250px auto;
  background: lighten($primaryGrey, 5%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  .header {
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }

    @include desktop {
      //height: 250px;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    padding: 15px;
    position: relative;

    .title {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .description {
      margin-bottom: 30px;
      flex: 1;
    }
  }
}
</style>
