<template>
  <div class="portfolioItemInformation" v-if="!loading">
    <div id="title">{{ portfolioItem.title }}</div>
    <div id="subtitle">{{ portfolioItem.description }}</div>
    <div id="carousel">
      <slider ref="slider" :options="{ currentPage: 0 }">
        <slideritem v-for="(image, index) in portfolioItem.carouselImages" :key="index">
          <img v-if="image.url" class="carouselImage" :src="image.url" alt="Carousel image" />
        </slideritem>
      </slider>
    </div>
    <div id="info">
      <div id="description">
        <div class="title">About this project</div>
        <markdown-renderer
          v-if="portfolioItem.aboutProject"
          class="text"
          :source="portfolioItem.aboutProject"
        ></markdown-renderer>
      </div>
      <div id="techSheet">
        <div class="title">Technical Sheet</div>
        <div class="subtitle">Code technologies and Skills used in this project</div>
        <ul class="list">
          <li v-for="(tech, index) in portfolioItem.techSheet" :key="index">{{ tech }}</li>
        </ul>
      </div>
      <div id="links">
        <link-button v-for="(link, index) in portfolioItem.links" :key="index" :href="link.link">
          <font-awesome-icon :icon="linkIcon(link.linkType)"></font-awesome-icon>
          {{ link.linkText }}
        </link-button>
      </div>
    </div>
  </div>
</template>

<script>
import LinkButton from "./LinkButton";
import { PORTFOLIO_ITEM } from "../library/Queries";
import { slider, slideritem } from "vue-concise-slider";
import MarkdownRenderer from "./MarkdownRenderer";

export default {
  name: "PortfolioItemInformation",
  components: {
    LinkButton,
    slider,
    slideritem,
    MarkdownRenderer
  },
  methods: {
    linkIcon(linkType) {
      return linkType ? ["fab", linkType] : "external-link-alt";
    },
    parseHTML(html) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const aTags = doc.getElementsByTagName("a");

      for (let aTag of aTags) {
        const span = document.createElement("span");
        span.classList.add("fancyLink");
        aTag.parentNode.insertBefore(span, aTag);
        span.appendChild(aTag);
      }

      return doc.body.innerHTML;
    }
  },
  mounted() {
    const { id } = this.$route.params;

    this.$apollo
      .query({
        query: PORTFOLIO_ITEM,
        variables: { id }
      })
      .then(({ data }) => {
        this.portfolioItem = data.portfolioItem;
        this.loading = false;
      });
  },
  data() {
    return {
      loading: true,
      portfolioItem: null
    };
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.portfolioItemInformation {
  background: lighten($primaryGrey, 5%);
  height: 100%;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;

  #title {
    font-family: "Fjalla One", sans-serif;
    font-size: 45px;
    text-transform: uppercase;
    color: $headingGrey;
  }

  #subtitle {
    font-size: 20px;
    color: $bodytextGrey;
    font-style: italic;
  }

  #carousel {
    margin-top: 40px;
    margin-bottom: 40px;

    .slider-pagination-bullet {
      background-color: #fff;
    }

    .carouselImage {
      max-width: 100%;
      max-height: 300px;
    }
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
      margin-bottom: 15px;

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
      margin-bottom: 40px;

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
