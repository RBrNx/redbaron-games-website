<template>
  <div class="portfolioItem">
    <div class="header">
      <img :src="require(`../assets${imageLink}`)">
    </div>
    <div class="body">
      <div class="title"></div>
      <div class="description"></div>
      <button>Learn More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  components: {},
  props: ["itemData"],
  computed: {
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
.portfolioHeader {
  display: grid;
  grid-template-rows: 150px 1fr;

  .header {
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    padding: 15px;
    padding-left: 0px;

    .title {
      font-weight: bold;
      margin-bottom: 0;
    }
  }
}
</style>
