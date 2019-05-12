<template>
  <div class="blogArticle">
    <div id="title">{{ itemData.title }}</div>
    <div id="subtitle">{{ itemData.description }}</div>
    <div id="article">
      <vue-markdown
        v-if="itemData.aboutProject"
        class="text"
        :source="itemData.aboutProject"
        :anchorAttributes="{ target: '_blank' }"
        :postrender="parseHTML"
      ></vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "PortfolioItemInformation",
  props: ["itemData"],
  components: {
    VueMarkdown
  },
  methods: {
    crossClicked() {
      this.$parent.overlayClicked();
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
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.blogArticle {
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
    font-family: Roboto;
    font-size: 20px;
    color: $bodytextGrey;
    font-style: italic;
  }

  #article {
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
  }
}
</style>
