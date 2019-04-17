<template>
  <div class="portfolioItemInformation">
    <div id="title">{{ itemData.title }}</div>
    <div id="subtitle">{{ itemData.description }}</div>
    <div id="carousel">
      <carousel
        :perPage="1"
        :navigationEnable="true"
        ref="carousel"
        paginationActiveColor="#c32626"
        paginationColor="#1d1d1d"
      >
        <slide v-for="(image, index) in itemData.carouselImages" :key="index">
          <img class="carouselImage" :src="require(`../assets/project-images/${image}`)">
        </slide>
      </carousel>
    </div>
    <div id="info">
      <div id="description">
        <div class="title">About this project</div>
        <vue-markdown
          v-if="itemData.aboutProject"
          class="text"
          :source="itemData.aboutProject"
          :anchorAttributes="{ target: '_blank' }"
          :postrender="parseHTML"
        ></vue-markdown>
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
</template>

<script>
import LinkButton from "./LinkButton";
import { Carousel, Slide } from "vue-carousel";
import VueMarkdown from "vue-markdown";

export default {
  name: "PortfolioItemInformation",
  props: ["itemData"],
  components: {
    LinkButton,
    Carousel,
    Slide,
    VueMarkdown
  },
  methods: {
    crossClicked() {
      this.$parent.overlayClicked();
    },
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
    for (let i = 0; i <= 7; i++) {
      setTimeout(() => this.$refs.carousel.onResize(), i * 100);
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
  padding-left: 25px;
  padding-right: 25px;
  //border-radius: 5px;

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

  #carousel {
    margin-top: 40px;

    .VueCarousel-slide {
      display: flex;
      justify-content: center;
    }

    .VueCarousel-dot {
      &:focus {
        outline: none;
      }
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
