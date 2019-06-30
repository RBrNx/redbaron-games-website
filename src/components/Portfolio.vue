<template>
  <section id="portfolioContainer">
    <h2 class="sectionTitle">Portfolio</h2>
    <p
      class="blurb"
    >From Minigolf Games to Christmas Puzzle Events, Check out some of my personal projects!</p>
    <div class="projects">
      <div class="loaders" v-if="$apollo.loading">
        <content-loader
          class="portfolioLoader"
          v-for="i in 3"
          :key="i"
          :height="400"
          :width="400"
          :speed="2"
          primaryColor="#141414"
          secondaryColor="#101010"
        >
          <rect x="0" y="0" rx="0" ry="0" width="400" height="250"/>
          <rect x="15" y="265" rx="5" ry="5" width="170" height="25"/>
          <rect x="15" y="300" rx="5" ry="5" width="370" height="20"/>
          <rect x="15" y="350" rx="5" ry="5" width="370" height="50"/>
        </content-loader>
      </div>
      <div class="content" v-if="!$apollo.loading && !$apollo.error">
        <div class="items" v-if="portfolioItems.length">
          <portfolio-item
            v-for="(item, index) in portfolioItems"
            ref="portfolioItems"
            :id="item.id"
            :key="item.id"
            :itemData="item"
            :itemClass="`enter-${index}`"
            @buttonClick="openCardModal(item.id)"
          ></portfolio-item>
        </div>
        <feedback-message
          v-if="!portfolioItems.length"
          type="empty"
          message="Sorry, there doesn't seem to be anything in my Portfolio at the minute."
        ></feedback-message>
        <router-view/>
      </div>
      <feedback-message
        v-if="$apollo.error"
        type="error"
        message="Sorry, there has been an error loading my Portfolio."
      ></feedback-message>
    </div>
  </section>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";
import PortfolioItemInformation from "../components/PortfolioItemInformation";
import CardClone from "../components/CardClone";
import { ContentLoader } from "vue-content-loader";
import { ALL_PORTFOLIO_ITEMS_QUERY } from "../library/Queries";
import FeedbackMessage from "./FeedbackMessage";

export default {
  name: "portfolio",
  components: {
    PortfolioItem,
    PortfolioItemInformation,
    CardClone,
    ContentLoader,
    FeedbackMessage
  },
  apollo: {
    portfolioItems: {
      query: ALL_PORTFOLIO_ITEMS_QUERY
    }
  },
  methods: {
    openCardModal(id) {
      const itemData = this.portfolioItems.find(p => p.id === id);

      this.$router.push({
        name: "portfolioItem",
        params: {
          id,
          itemData
        }
      });

      return;
    }
  },
  data() {
    return {
      portfolioItems: null
    };
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

#portfolioContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  text-align: left;
  padding-bottom: 50px;

  .projects {
    .loaders,
    .items {
      padding: 0 25px;
      position: relative;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;

      @include tablet {
        padding: 0 45px;
        grid-template-columns: repeat(2, 2fr);
      }

      @include laptop {
        padding: 0 100px;
        grid-template-columns: repeat(3, 2fr);
      }

      @include desktop {
        padding: 0 175px;
        grid-template-columns: repeat(3, 2fr);
      }
    }

    .portfolioLoader {
      background: lighten($primaryGrey, 5%);
      border-radius: 5px;
      padding-bottom: 15px;
      margin-bottom: 30px;
    }
  }
}
</style>

