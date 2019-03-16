<template>
  <div class="portfolioItemInformation">
    <font-awesome-icon id="closeIcon" icon="times" @click="crossClicked"></font-awesome-icon>
    <div id="scrollContainer">
      <div id="title">{{ itemData.title }}</div>
      <div id="subtitle">{{ itemData.description }}</div>
      <div id="carousel"></div>
      <div id="info">
        <div id="description">
          <div class="title">About this project</div>
          <div class="text" v-html="itemData.aboutProject"></div>
        </div>
        <div id="techSheet">
          <div class="title">Technical Sheet</div>
          <div class="subtitle">Code technologies and Skills used in this project</div>
          <ul class="list">
            <li v-for="(tech, index) in itemData.techSheet" :key="index">{{ tech }}</li>
          </ul>
        </div>
        <div id="links">
          <link-button v-for="(link, index) in itemData.links" :key="index" :href="link.link">
            <font-awesome-icon :icon="linkIcon(link.linkType)"></font-awesome-icon>
            {{ link.linkText }}
          </link-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkButton from "./LinkButton";
import { link } from "fs";

export default {
  name: "PortfolioItemInformation",
  props: ["itemData"],
  components: { LinkButton },
  methods: {
    crossClicked() {
      this.$parent.overlayClicked();
    },
    linkIcon(linkType) {
      return linkType ? ["fab", linkType] : "external-link-alt";
    }
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.portfolioItemInformation {
  background: lighten($primaryGrey, 5%);
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 50px;
  overflow: hidden;

  #closeIcon {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 30px;
    color: lighten($primaryGrey, 15%);
    cursor: pointer;

    &:hover {
      color: lighten($headingGrey, 5%);
    }
  }

  #scrollContainer {
    overflow-y: auto;
    height: 100%;
  }

  #title {
    font-family: "Fjalla One", sans-serif;
    font-size: 45px;
    text-transform: uppercase;
    color: $headingGrey;
  }

  #subtitle {
    font-family: Roboto;
    font-size: 20px;
    color: $bodytextGrey;
    font-style: italic;
  }

  #info {
    .title {
      font-family: "Fjalla One", sans-serif;
      font-size: 32px;
      padding: 0px;
      text-align: left;
      margin-bottom: 15px;
      text-transform: uppercase;
      color: $headingGrey;
    }

    .text {
      line-height: 1.3em;
      color: $bodytextGrey;
      font-size: 18px;

      .fancyLink {
        position: relative;
        white-space: pre;

        &:hover {
          &:before,
          &:after {
            width: 100%;
          }

          a {
            color: $primaryGrey;
          }
        }

        a {
          color: $headingGrey;
          text-decoration: none;
          font-weight: 900;
          position: relative;
          z-index: 2;
          transition: color 0.325s cubic-bezier(0.65, 0.2, 0, 1);
        }

        &:before {
          content: "";
          display: block;
          height: 50%;
          background-color: lightgray;
          position: absolute;
          z-index: 1;
          left: 0;
          top: 0;
          width: 0%;
          transition: width 0.325s cubic-bezier(0.65, 0.2, 0, 1);
        }

        &:after {
          content: "";
          display: block;
          height: 50%;
          background-color: lightgray;
          position: absolute;
          z-index: 1;
          bottom: 0;
          right: 0;
          width: 0%;
          transition: width 0.325s cubic-bezier(0.65, 0.2, 0, 1);
        }
      }
    }

    #techSheet {
      color: $bodytextGrey;
      font-size: 18px;

      li {
        line-height: 1.5em;
        margin-bottom: 5px;
      }
    }

    #links {
      .linkButton {
        margin-bottom: 10px;

        svg {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
