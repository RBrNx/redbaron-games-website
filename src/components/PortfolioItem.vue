<template>
  <div class="portfolioItem">
    <div class="header">
      <img :src="require(`../assets${imageLink}`)">
    </div>
    <div class="body">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <primary-button>Learn More</primary-button>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "./PrimaryButton";

export default {
  name: "PortfolioItem",
  components: { PrimaryButton },
  props: ["itemData"],
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
    }
  },
  watch: {
    itemData() {
      console.log(this.itemData);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.portfolioItem {
  display: grid;
  background: lighten($primaryGrey, 5%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.048);
  }

  .header {
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      border-radius: 5px 5px 0 0;
    }

    @include desktop {
      max-height: 350px;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    padding: 15px;

    .title {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .description {
      margin-bottom: 30px;
    }
  }
}
</style>
