<template>
  <section id="blogListContainer">
    <h2 class="sectionTitle">Blogs, Tutorials and Labs.</h2>
    <p class="blurb">Filter the list using the following categories</p>
    <div class="blogs">
      <!-- <div class="loaders" v-if="$apollo.loading">
        <content-loader
          class="portfolioLoader"
          v-for="i in 8"
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
      <div v-if="$apollo.error">There has been an error loading my portfolio.</div>-->
      <div class="items">
        <blog-card
          v-for="(item, index) in blogItems"
          ref="blogItems"
          :key="item.id"
          :itemData="item"
          :itemClass="`enter-${index}`"
          @buttonClick="openCardModal(item.id)"
        ></blog-card>
      </div>
      <!-- <card-clone
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
      </card-clone>-->
    </div>
  </section>
</template>

<script>
import BlogCard from "./BlogCard";
// import PortfolioItemInformation from "../components/PortfolioItemInformation";
import CardClone from "../components/CardClone";
import { setTimeout } from "timers";
import { ContentLoader } from "vue-content-loader";

import gql from "graphql-tag";

const ALL_PORTFOLIO_ITEMS_QUERY = gql`
  query portfolioItems {
    portfolioItems(where: { visible: true, status: PUBLISHED }) {
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
    BlogCard,
    //PortfolioItemInformation,
    CardClone,
    ContentLoader
  },
  apollo: {
    portfolioItems: {
      query: ALL_PORTFOLIO_ITEMS_QUERY
    }
  },
  methods: {
    openCardModal(id) {
      if (this.clickedItem !== null) return;

      const ref = this.$refs.portfolioItems.find(p => p.id === id).$el;
      const viewportOffset = ref.getBoundingClientRect();

      this.clickedItem = {
        item: this.portfolioItems.find(p => p.id === id),
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
      blogItems: [
        {
          title: "Google's 3D Card Flip Tutorial",
          description:
            "A quick tutorial on how to implement the 3D Card Flip animation found in some google products.",
          categories: ["Tutorial", "Javascript"],
          displayImage: "puttered_3.png",
          type: "Blog"
        },
        {
          title: "Google's 3D Card Flip Tutorial",
          description:
            "A quick tutorial on how to implement the 3D Card Flip animation found in some google products.",
          categories: ["Tutorial", "Javascript"],
          displayImage: "puttered_3.png",
          type: "Tutorial"
        },
        {
          title: "Google's 3D Card Flip Tutorial",
          description:
            "A quick tutorial on how to implement the 3D Card Flip animation found in some google products.",
          categories: ["Tutorial", "Javascript"],
          displayImage: "puttered_3.png",
          type: "Lab"
        },
        {
          title: "Google's 3D Card Flip Tutorial",
          description:
            "A quick tutorial on how to implement the 3D Card Flip animation found in some google products.",
          categories: ["Tutorial", "Javascript"],
          displayImage: "puttered_3.png",
          type: "Tutorial"
        },
        {
          title: "Google's 3D Card Flip Tutorial",
          description:
            "A quick tutorial on how to implement the 3D Card Flip animation found in some google products.",
          categories: ["Tutorial", "Javascript"],
          displayImage: "puttered_3.png",
          type: "Lab"
        },
        {
          title: "Google's 3D Card Flip Tutorial",
          description:
            "A quick tutorial on how to implement the 3D Card Flip animation found in some google products.",
          categories: ["Tutorial", "Javascript"],
          displayImage: "puttered_3.png",
          type: "Blog"
        }
      ],
      clickedItem: null,
      cardCloneStyle: {},
      cardClass: null
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

#blogListContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-bottom: 50px;

  .blogs {
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

