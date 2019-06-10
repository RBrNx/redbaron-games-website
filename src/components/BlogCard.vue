<template>
  <div :class="`blogCard ${itemClass}`" v-if="blogData">
    <div class="header">
      <img :src="blogData.blogImage.url">
    </div>
    <div class="body">
      <div class="title">{{ blogData.title }}</div>
      <div class="description">{{ blogData.description }}</div>
      <primary-button @buttonClick="buttonClick">Read</primary-button>
      <div class="categories">
        <span v-for="(cat, index) in blogData.categories" :key="index">{{ cat }}</span>
      </div>
    </div>
    <card-ribbon :label="enums[blogData.blogType].label" :fill="enums[blogData.blogType].color"></card-ribbon>
  </div>
</template>

<script>
import PrimaryButton from "./PrimaryButton";
import CardRibbon from "./CardRibbon";
import { BLOG_POST } from "../library/Queries";

export default {
  name: "BlogCard",
  components: { PrimaryButton, CardRibbon },
  props: ["itemData", "itemClass"],
  computed: {
    blogData() {
      return this.itemData || this.blogPost;
    }
  },
  methods: {
    buttonClick() {
      this.$emit("buttonClick");
    }
  },
  mounted() {
    if (!this.itemData && this.$route.params.id) {
      const { id } = this.$route.params;

      this.$apollo
        .query({
          query: BLOG_POST,
          variables: { id }
        })
        .then(({ data }) => {
          this.blogPost = data.blog;
        });
    }
  },
  data() {
    return {
      enums: {
        Blog: { label: "Blog", color: "#1D79FF" },
        Tutorial: { label: "Tutorial", color: "#E25D03" },
        Lab: { label: "Lab", color: "#c32626" }
      },
      blogPost: null
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

