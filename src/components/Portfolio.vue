<template>
  <section id="portfolioContainer">
    <p v-if="$apollo.loading">Loading...</p>
    <h2 class="sectionTitle">Portfolio</h2>
    <p
      class="blurb"
    >From Minigolf Games to Christmas Puzzle Events, Check out some of my personal projects!</p>
    <div class="projects">
      <portfolio-item
        v-for="(item, index) in portfolioItems"
        ref="portfolioItems"
        :key="index"
        :itemData="item"
        :itemClass="`enter-${index}`"
        @buttonClick="openCardModal(index)"
      ></portfolio-item>
      <card-clone
        v-if="clickedItem !== null"
        :customStyle="cardCloneStyle"
        :cardClass="cardClass"
        @closeCardClone="closeCardModal"
      >
        <template v-slot:cardFront>
          <portfolio-item :itemData="clickedItem.item" :bodySize="clickedItem.bodyHeight"></portfolio-item>
        </template>
        <template v-slot:cardBack>
          <portfolio-item-information :itemData="clickedItem.item"></portfolio-item-information>
        </template>
      </card-clone>
    </div>
  </section>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";
import PortfolioItemInformation from "../components/PortfolioItemInformation";
import CardClone from "../components/CardClone";
import { setTimeout } from "timers";

import gql from "graphql-tag";

const portfolioItems = gql`
  query portfolioItems {
    portfolioItems {
      status
      updatedAt
      createdAt
      id
      title
      description
      aboutProject
      carouselImages
      techSheet
      links
      visible
      displayImage
    }
  }
`;

export default {
  name: "portfolio",
  components: {
    PortfolioItem,
    PortfolioItemInformation,
    CardClone
  },
  apollo: {
    portfolioItems: {
      query: portfolioItems
    }
  },
  methods: {
    openCardModal(index) {
      if (this.clickedItem !== null) return;
      const ref = this.$refs.portfolioItems[index].$el;
      const viewportOffset = ref.getBoundingClientRect();

      this.clickedItem = {
        item: this.portfolioItems[index],
        ref: ref,
        bodyHeight: ref.getElementsByClassName("body")[0].clientHeight
      };
      this.cardCloneStyle = {
        height: `${ref.clientHeight}px`,
        width: `${ref.clientWidth}px`,
        left: `${viewportOffset.left}px`,
        top: `${viewportOffset.top}px`,
        transform: null
      };

      ref.style.opacity = 0;

      setTimeout(() => {
        this.cardClass = "shown";
      }, 100);
    },
    closeCardModal() {
      const ref = this.clickedItem.ref;
      const viewportOffset = ref.getBoundingClientRect();

      this.cardCloneStyle = {
        height: `${ref.clientHeight}px`,
        width: `${ref.clientWidth}px`,
        left: `${viewportOffset.left}px`,
        top: `${viewportOffset.top}px`,
        transform: null
      };

      setTimeout(() => {
        for (let i = 0; i < this.$refs.portfolioItems.length; i++) {
          this.$refs.portfolioItems[i].$el.style.opacity = 1;
        }
        this.clickedItem = null;
      }, 600);
    }
  },
  data() {
    return {
      portfolioItems: null,
      clickedItem: null,
      cardCloneStyle: {},
      cardClass: null,
      gistID: process.env.VUE_APP_GIST_ID
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

#portfolioContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-bottom: 50px;

  .projects {
    padding: 0 25px;
    position: relative;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;

    @include tablet {
      grid-template-columns: repeat(2, 2fr);
    }

    @include desktop {
      grid-template-columns: repeat(4, 2fr);
    }
  }
}
</style>

