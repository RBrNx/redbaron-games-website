<template>
  <div class="blogArticle">
    <div
      id="blogHeader"
      :style="{ 'background': `url(${itemData.blogImage.url}) no-repeat center/cover` }"
    >
      <div id="title">{{ itemData.title }}</div>
      <div id="subtitle">{{ itemData.description }}</div>
    </div>
    <div id="article">
      <vue-markdown
        v-if="itemData.blog"
        class="text"
        :source="itemData.blog"
        :anchorAttributes="{ target: '_blank' }"
        :postrender="parseHTML"
        @rendered="handleRenderedEvent"
      ></vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

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
    },
    handleRenderedEvent() {
      this.$nextTick(() => Prism.highlightAll());
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

  #blogHeader {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;

    #title {
      font-family: "Fjalla One", sans-serif;
      font-size: 45px;
      text-transform: uppercase;
      color: #fff;
      position: relative;
      text-align: center;
      margin-top: 50px;
      margin-bottom: 225px;
    }

    #subtitle {
      font-family: Roboto;
      font-size: 20px;
      color: $headingGrey;
      font-style: italic;
      position: relative;
      text-align: center;
    }

    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.85),
        rgba(0, 0, 0, 0.7)
      );
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    @include tablet {
      #title {
        margin-bottom: 100px;
      }

      #subtitle {
        font-size: 24px;
      }
    }
  }

  #article {
    padding-left: 25px;
    padding-right: 25px;

    .text {
      line-height: 1.4em;
      color: $bodytextGrey;
      font-size: 18px;

      h2 {
        color: $headingGrey;
      }

      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      pre[class*="language-"] {
        background: darken($primaryGrey, 0.25%);
      }

      code {
        background: darken($primaryGrey, 0.25%);
        padding: 3px;
        border-radius: 3px;
        color: $headingGrey;
      }

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
          border-radius: 3px 3px 0px 0px;
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
          border-radius: 0px 0px 3px 3px;
        }
      }
    }
  }
}
</style>
