<template>
  <div :class="`portfolioItem ${itemClass}`" v-if="portfolioData">
    <div class="header">
      <img
        :src="require(`../assets/project-images/${portfolioData.displayImage}`)"
        alt="Portfolio item image"
      >
    </div>
    <div class="body">
      <div class="title">{{ portfolioData.title }}</div>
      <div class="description">{{ portfolioData.description }}</div>
      <primary-button @buttonClick="buttonClick">Learn More</primary-button>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "./PrimaryButton";
import { PORTFOLIO_ITEM } from "../library/Queries";

export default {
  name: "PortfolioItem",
  components: { PrimaryButton },
  props: ["itemData", "itemClass"],
  computed: {
    portfolioData() {
      return this.itemData || this.portfolioItem;
    }
  },
  data() {
    return {
      portfolioItem: null
    };
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
          query: PORTFOLIO_ITEM,
          variables: { id }
        })
        .then(({ data }) => {
          this.portfolioItem = data.portfolioItem;
        });
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
