<template>
  <div class="blogArticle" v-if="!loading">
    <div
      id="blogHeader"
      :style="{ 'background': `url(${blog.blogImage.url}) no-repeat center/cover` }"
    >
      <div class="headerText">
        <div id="title"></div>
        <div id="subtitle">{{ blog.description }}</div>
      </div>
      <hero-button></hero-button>
    </div>
    <div id="article" v-if="blog.blog">
      <div class="blogAuthor">
        <div class="blogInformation">
          <img :src="require('../assets/ConorWatson.png')" alt="Profile Picture" />
          <div class="info">
            <span class="name">Conor Watson</span>
            <span class="metadata">{{ `${publishedDate} · ${readingTime} min read`}}</span>
          </div>
        </div>
        <div class="social">
          <span class="text">Share this</span>
          <social-sharing
            :url="currentURL"
            :title="blog.title"
            :description="blog.description"
            :quote="blog.description"
            inline-template
            class="socialSharing"
          >
            <div>
              <network network="email">
                <font-awesome-icon icon="envelope-square"></font-awesome-icon>
              </network>
              <network network="facebook">
                <font-awesome-icon :icon="['fab', 'facebook-square']"></font-awesome-icon>
              </network>
              <network network="twitter">
                <font-awesome-icon :icon="['fab', 'twitter-square']"></font-awesome-icon>
              </network>
              <network network="linkedin">
                <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
              </network>
              <network network="pinterest">
                <font-awesome-icon :icon="['fab', 'pinterest-square']"></font-awesome-icon>
              </network>
              <network network="reddit">
                <font-awesome-icon :icon="['fab', 'reddit-square']"></font-awesome-icon>
              </network>
              <network network="whatsapp">
                <font-awesome-icon :icon="['fab', 'whatsapp-square']"></font-awesome-icon>
              </network>
              <network network="telegram">
                <font-awesome-icon :icon="['fab', 'telegram']"></font-awesome-icon>
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
      <markdown-renderer class="blogText" :source="blog.blog"></markdown-renderer>
    </div>
  </div>
</template>

<script>
import "prismjs/themes/prism-okaidia.css";
import HeroButton from "./HeroButton";
import { BLOG_POST } from "../library/Queries";
import TypeIt from "typeit";
import moment from "moment";
import MarkdownRenderer from "./MarkdownRenderer";

export default {
  name: "BlogArticle",
  components: {
    HeroButton,
    moment,
    MarkdownRenderer
  },
  computed: {
    publishedDate() {
      return moment(this.blog.publishedDate).calendar(null, {
        sameDay: "[Today]",
        nextDay: "[Tomorrow]",
        nextWeek: "[Next] dddd",
        lastDay: "[Yesterday]",
        lastWeek: "dddd",
        sameElse: function(now) {
          if (this.isSame(now, "year")) {
            return "MMM D";
          } else {
            return "MMM YYYY";
          }
        }
      });
    },
    readingTime() {
      const wordCount = this.blog ? this.blog.blog.split(" ").length : 0;
      const avgWordsPerMinute = 225;
      return Math.ceil(wordCount / avgWordsPerMinute);
    },
    currentURL() {
      return window.location.href;
    }
  },
  mounted() {
    const { id } = this.$route.params;

    this.$apollo
      .query({
        query: BLOG_POST,
        variables: { id }
      })
      .then(({ data }) => {
        this.blog = data.blog;
        this.loading = false;

        setTimeout(() => {
          new TypeIt("#title", {
            strings: data.blog.title,
            cursor: false,
            speed: 70
          }).go();

          document.getElementById("subtitle").style.opacity = 1;
        }, 500);
      });
  },
  data() {
    return {
      loading: true,
      blog: null
    };
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.blogArticle {
  background: lighten($primaryGrey, 5%);
  width: 100%;

  #blogHeader {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;

    .headerText {
      padding: 50px 15%;

      #title {
        font-family: "Fjalla One", sans-serif;
        font-size: 42px;
        text-transform: uppercase;
        color: #fff;
        position: relative;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 125px;
      }

      #subtitle {
        font-size: 20px;
        color: $headingGrey;
        font-style: italic;
        position: relative;
        text-align: center;
        opacity: 0;
        transition: opacity 1s 1s;
      }

      @include tablet {
        padding: 0 8%;

        #title {
          font-size: 52px;
        }

        #subtitle {
          font-size: 24px;
        }
      }

      @include desktop {
        padding: 0 20%;

        #title {
          font-size: 68px;
        }

        #subtitle {
          font-size: 24px;
        }
      }
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

    @include desktop {
      padding-left: 250px;
      padding-right: 250px;
    }

    .blogAuthor {
      background-color: lighten($primaryGrey, 10%);
      display: flex;
      flex-direction: column;
      padding: 20px;
      border-radius: 5px;

      @include tablet {
        flex-direction: row;
      }

      .blogInformation {
        display: flex;
        flex: 1;
        flex-direction: row;

        img {
          max-height: 75px;
          max-width: 75px;
          border-radius: 50%;
        }

        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 25px;
          flex: 1;

          .name {
            margin-bottom: 10px;
            color: $headingGrey;
            font-size: 18px;
          }
        }
      }

      .social {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 25px;
        align-items: flex-start;

        @include tablet {
          margin-top: 0px;
        }
      }

      .socialSharing {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .text {
          margin-right: 10px;
        }

        svg {
          width: 30px;
          height: 30px;
          cursor: pointer;

          &:hover {
            color: $headingGrey;
          }

          @include tablet {
            margin-right: 10px;
          }
        }
      }
    }

    .blogText {
      line-height: 1.4em;
      color: $bodytextGrey;
      font-size: 18px;

      h1 {
        margin-top: 100px;
        font-size: 42px;
        color: $headingGrey;
        line-height: normal;
      }

      h2 {
        margin-top: 50px;
        font-size: 30px;
      }

      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 90%;

        & + em {
          display: block;
          text-align: center;
          margin-top: 10px;
          margin-bottom: 5px;
        }
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

      pre > code {
        display: block;
        padding: 12px;
        white-space: pre-wrap;
      }

      h4 {
        margin-bottom: 0;
        font-size: 20px;
      }

      h4 + pre {
        margin-top: 0;
        padding-top: 6px;
      }

      h4 code {
        padding: 12px;
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
