<template>
  <div class="portfolioItem">
    <div class="header">
      <img :src="require(`../assets${imageLink}`)">
    </div>
    <div class="body">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
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
.portfolioItem {
  display: grid;
  //grid-template-rows: 350px 1fr;

  .header {
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
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
