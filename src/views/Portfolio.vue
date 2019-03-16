<template>
  <div class="portfolioContainer">
    <h2>Portfolio</h2>
    <p>From Minigolf Games to Christmas Puzzle Events, Check out some of my personal projects!</p>
    <div class="projects">
      <portfolio-item
        v-for="(item, index) in portfolioItems"
        :key="index"
        ref="portfolioItems"
        :itemData="item"
        @buttonClick="cardOnClick(index)"
      ></portfolio-item>
      <card-clone
        v-if="clickedItem !== null"
        :width="clickedItem.width"
        :height="clickedItem.height"
        :x="clickedItem.x"
        :y="clickedItem.y"
        :transform="clickedItem.transform"
        :customStyle="cardCloneStyle"
        @overlayClicked="overlayClicked"
      >
        <template v-slot:cardFront>
          <portfolio-item :itemData="clickedItem.item" :bodySize="clickedItem.bodyHeight"></portfolio-item>
        </template>
        <template v-slot:cardBack>
          <portfolio-item-information>
            <p>Here is a little test!</p>
          </portfolio-item-information>
        </template>
      </card-clone>
    </div>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";
import PortfolioItemInformation from "../components/PortfolioItemInformation";
import CardClone from "../components/CardClone";
import { setTimeout } from "timers";

export default {
  name: "portfolio",
  components: {
    PortfolioItem,
    PortfolioItemInformation,
    CardClone
  },
  methods: {
    cardOnClick(index) {
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
        top: `${viewportOffset.top}px`
      };

      ref.style.opacity = 0;

      setTimeout(() => {
        this.cardCloneStyle.height = "80%";
        this.cardCloneStyle.width = "50%";
        this.cardCloneStyle.left = "50vw";
        this.cardCloneStyle.top = "50vh";
        this.cardCloneStyle.transform = "translate(-50%, -50%)";
      }, 100);
    },
    overlayClicked() {
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
      portfolioItems: [],
      clickedItem: null,
      cardCloneStyle: {},
      gistID: process.env.VUE_APP_GIST_ID
    };
  },
  async mounted() {
    const res = await fetch(`https://api.github.com/gists/${this.gistID}`);

    const gist = await res.json();
    const websiteconfig = JSON.parse(gist.files["websiteconfig.json"].content);
    this.portfolioItems = websiteconfig.repositories;
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.portfolioContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-bottom: 50px;

  h2 {
    margin: 0;
    padding: 25px 0 0 25px;
    font-family: "Fjalla One", sans-serif;
    font-size: 32px;
    text-transform: uppercase;
    color: $headingGrey;
    position: relative;
    display: inline-block;

    &:after {
      content: " ";
      position: absolute;
      top: calc(100% + 6px);
      left: 25px;
      height: 1px;
      width: calc(100% - 25px);
      background: $headingGrey;
    }
  }

  p {
    padding: 0 25px;
    font-size: 18px;
  }

  .projects {
    padding: 0 25px;
    position: relative;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;

    @include desktop {
      grid-template-columns: repeat(4, 2fr);
    }
  }
}
</style>

