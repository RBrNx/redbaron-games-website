<template>
  <div class="about">
    <hero-header :backgroundImage="backgroundImages[imageIndex]">
      <h2 class="title enter-1" slot="title">
        Elementary, my dear
        <span class="highlight">Watson.</span>
      </h2>
      <div class="subtitle enter-2" slot="subtitle">
        I am a Glaswegian dwelling Software Developer who is passionate about
        <span
          class="highlight"
        >creating fantastic user experiences</span>. With my well rounded technical skills and an eye for design, I am adept at
        <span
          class="highlight"
        >balancing functionality and beauty</span> in the applications I develop.
      </div>
    </hero-header>
    <specialities></specialities>
    <technologies></technologies>
    <web-footer></web-footer>
    <div id="preload">
      <img src="../assets/hero-header/ClydeArc.jpg">
      <img src="../assets/hero-header/DukeOfWellington.jpg">
      <img src="../assets/hero-header/GeorgeSquare.jpg">
      <img src="../assets/hero-header/Hydro.jpg">
    </div>
  </div>
</template>

<script>
import ClydeArc from "../assets/hero-header/ClydeArc.jpg";
import DukeOfWellington from "../assets/hero-header/DukeOfWellington.jpg";
import GeorgeSquare from "../assets/hero-header/GeorgeSquare.jpg";
import Hydro from "../assets/hero-header/Hydro.jpg";
import HeroHeader from "../components/HeroHeader";
import Specialities from "../components/Specialities";
import Technologies from "../components/Technologies";
import WebFooter from "../components/Footer";
import { clearInterval } from "timers";

export default {
  name: "about",
  components: {
    HeroHeader,
    Specialities,
    Technologies,
    WebFooter
  },
  methods: {},
  data() {
    return {
      imageIndex: 0,
      backgroundImages: [ClydeArc, DukeOfWellington, GeorgeSquare, Hydro],
      timer: null
    };
  },
  mounted() {
    this.timer = window.setInterval(() => {
      if (this.imageIndex == this.backgroundImages.length - 1)
        this.imageIndex = 0;
      else this.imageIndex += 1;
    }, 6000);
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.about {
  #preload {
    display: none;
  }

  .heroImage {
    .heroText {
      .title {
        font-size: 42px;
        margin: 0;
        margin-bottom: 100px;
      }

      .subtitle {
        font-size: 20px;
        font-family: Roboto;
      }
    }
  }
  @include tablet {
    .heroImage {
      .heroText {
        .title {
          font-size: 52px;
          margin-bottom: 150px;
        }

        .subtitle {
          font-size: 24px;
        }
      }
    }
  }

  @include desktop {
    .heroImage {
      .heroText {
        .title {
          font-size: 68px;
        }

        .subtitle {
          font-size: 24px;
        }
      }
    }
  }
}
</style>

