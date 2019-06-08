<template>
  <div :class="`blogCard  ${itemClass}`">
    <div class="header">
      <img v-if="imageLink" :src="imageLink">
    </div>
    <div class="body">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <primary-button @buttonClick="buttonClick">Read</primary-button>
      <div class="categories">
        <span v-for="(cat, index) in categories" :key="index">{{ cat }}</span>
      </div>
    </div>
    <card-ribbon :label="enums[type].label" :fill="enums[type].color"></card-ribbon>
  </div>
</template>

<script>
import PrimaryButton from "./PrimaryButton";
import CardRibbon from "./CardRibbon";

export default {
  name: "BlogCard",
  components: { PrimaryButton, CardRibbon },
  props: ["itemData", "itemClass"],
  computed: {
    title() {
      return this.itemData ? this.itemData.title : null;
    },
    description() {
      return this.itemData ? this.itemData.description : null;
    },
    categories() {
      return this.itemData ? this.itemData.categories : null;
    },
    imageLink() {
      return this.itemData ? this.itemData.blogImage.url : null;
    },
    type() {
      return this.itemData ? this.itemData.blogType : null;
    }
  },
  methods: {
    buttonClick() {
      this.$emit("buttonClick");
    }
  },
  data() {
    return {
      enums: {
        Blog: { label: "Blog", color: "#1D79FF" },
        Tutorial: { label: "Tutorial", color: "#E25D03" },
        Lab: { label: "Lab", color: "#c32626" }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.blogCard {
  display: grid;
  grid-template-rows: 250px auto;
  background: lighten($primaryGrey, 5%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  height: 100%;

  .header {
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
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

    .categories {
      margin-top: 25px;
      margin-bottom: 10px;

      span {
        background-color: lighten($primaryGrey, 10%);
        border-radius: 5px;
        margin-right: 10px;
        padding: 5px;
      }
    }
  }
}
</style>

