<template>
  <div class="about">
    <hero-header :backgroundImage="backgroundImages[imageIndex]">
      <h2 slot="title">
        Elementary, my dear
        <span class="highlight">Watson.</span>
      </h2>
      <span slot="subtitle">
        I am a Glaswegian dwelling Software Developer who is passionate about
        <span
          class="highlight"
        >creating fantastic user experiences</span>. With my well rounded technical skills and an eye for design, I am adept at
        <span
          class="highlight"
        >balancing functionality and beauty</span> in the applications I develop.
      </span>
    </hero-header>
    <specialities></specialities>
    <technologies></technologies>
    <div id="preload">
      <img src="../assets/ClydeArc.jpg">
      <img src="../assets/DukeOfWellington.jpg">
      <img src="../assets/GeorgeSquare.jpg">
      <img src="../assets/Hydro.jpg">
    </div>
  </div>
</template>

<script>
import ClydeArc from "../assets/ClydeArc.jpg";
import DukeOfWellington from "../assets/DukeOfWellington.jpg";
import GeorgeSquare from "../assets/GeorgeSquare.jpg";
import Hydro from "../assets/Hydro.jpg";
import HeroHeader from "../components/HeroHeader";
import Specialities from "../components/Specialities";
import Technologies from "../components/Technologies";

export default {
  name: "about",
  components: {
    HeroHeader,
    Specialities,
    Technologies
  },
  methods: {},
  data() {
    return {
      imageIndex: 0,
      backgroundImages: [ClydeArc, DukeOfWellington, GeorgeSquare, Hydro]
    };
  },
  mounted() {
    window.setInterval(() => {
      if (this.imageIndex == this.backgroundImages.length - 1)
        this.imageIndex = 0;
      else this.imageIndex += 1;
    }, 6000);
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
      font-size: 20px;

      .title {
        font-size: 35px;
      }
    }
  }
  @include tablet {
    .heroImage {
      .heroText {
        font-size: 24px;

        .title {
          font-size: 45px;
        }
      }
    }
  }

  @include desktop {
    .heroImage {
      .heroText {
        font-size: 24px;

        .title {
          font-size: 45px;
        }
      }
    }
  }
}
</style>

