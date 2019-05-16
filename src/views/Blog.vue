<template>
  <div class="blog">
    <hero-header :backgroundImage="heroImage">
      <div class="title enter-1" slot="title">
        <h2>
          Technology.
          <span class="highlight">Programming.</span>
          Laboratory.
        </h2>
      </div>
      <div class="subtitle enter-2" slot="subtitle">
        <span>A place for my Coding Laboratory, Programming guides and thoughts on Tech.</span>
      </div>
    </hero-header>
    <blog-list @modalOpened="modalOpened" @modalClosed="modalClosed"></blog-list>
  </div>
</template>

<script>
import HeroHeader from "../components/HeroHeader";
import BlogImage from "../assets/hero-header/Blog-Header.jpg";
import BlogList from "../components/BlogList";
import WebFooter from "../components/Footer";

export default {
  name: "blog",
  components: {
    HeroHeader,
    BlogList,
    WebFooter
  },
  methods: {
    modalOpened() {
      this.$emit("modalOpened");
    },
    modalClosed() {
      this.$emit("modalClosed");
    }
  },
  data() {
    return {
      heroImage: BlogImage
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.blog {
  .heroImage {
    .title {
      margin-top: 50px;
      margin-bottom: 225px;

      h2 {
        font-size: 42px;
        margin: 0;
      }
    }

    .subtitle {
      font-size: 20px;
      font-family: Roboto;
    }
  }

  @include tablet {
    .heroImage {
      .title {
        margin-bottom: 150px;

        h2 {
          font-size: 52px;
        }
      }

      .subtitle {
        font-size: 24px;
      }
    }
  }

  @include desktop {
    .heroImage {
      .title {
        h2 {
          font-size: 68px;
        }
      }

      .subtitle {
        font-size: 24px;
      }
    }
  }
}
</style>

