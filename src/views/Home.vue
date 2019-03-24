<template>
  <div class="home">
    <hero-header :backgroundImage="heroImage">
      <div slot="title">
        <h2>The Name's Watson.</h2>
        <h2>
          <span class="highlight">Conor Watson.</span>
        </h2>
      </div>
      <div slot="subtitle">
        <span>I am a Full Stack Developer with&nbsp;</span>
        <div class="subtitleWords">
          <span class="highlight">a passion for problem solving.</span>
          <span class="highlight">an eye for design.</span>
          <span
            class="highlight"
          >a love for creating Web Apps with more features than a Bond gadget.</span>
          <span class="highlight">the knack of picking up new skills quickly.</span>
          <span class="highlight">the most handsome dog in the world.</span>
        </div>
      </div>
    </hero-header>
    <portfolio></portfolio>
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "../components/Portfolio";
import HeroHeader from "../components/HeroHeader";
import HeroImage from "../assets/HeroHeader2.jpg";

export default {
  name: "home",
  components: {
    Portfolio,
    HeroHeader
  },
  data() {
    return {
      heroImage: HeroImage
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.home {
  .subtitleWords {
    //height: 50px;
    margin-top: 15px;
    position: relative;
    width: 100%;

    span {
      display: block;
      position: absolute;
      width: 100%;
      opacity: 0;
      overflow: hidden;
      text-align: center;
      animation: rotateWords 20s linear infinite 0s;

      &:nth-child(2) {
        animation-delay: 4s;
      }
      &:nth-child(3) {
        animation-delay: 8s;
      }
      &:nth-child(4) {
        animation-delay: 12s;
      }
      &:nth-child(5) {
        animation-delay: 16s;
      }
      &:nth-child(6) {
        animation-delay: 20s;
      }
    }
  }

  @keyframes rotateWords {
    0% {
      opacity: 0;
    }
    2% {
      opacity: 0;
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    8% {
      opacity: 1;
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
    18% {
      opacity: 1;
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
    22% {
      opacity: 0;
      -webkit-transform: translateY(30px);
      transform: translateY(30px);
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>

