<template>
  <div class="portfolioContainer">
    <h2>Portfolio</h2>
    <p>From Minigolf Games to Christmas Puzzle Events! Check out some of my personal projects.</p>
    <div class="projects">
      <portfolio-item v-for="(item, index) in portfolioItems" :key="index" :itemData="item"></portfolio-item>
    </div>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";

export default {
  name: "portfolio",
  components: {
    PortfolioItem
  },
  data() {
    return {
      portfolioItems: [],
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

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;

    @include desktop {
      grid-template-columns: repeat(4, 2fr);
    }
  }
}
</style>

