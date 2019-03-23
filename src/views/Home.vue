<template>
  <div class="home">
    <div class="heroImage">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
      <div class="heroText">
        <div class="title">
          <h2>The Name's Watson.</h2>
          <h2>
            <span class="highlight">Conor Watson.</span>
          </h2>
        </div>
        <div class="subtitle">
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
      </div>
      <div class="heroButton"></div>
    </div>
    <portfolio></portfolio>
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "./Portfolio";

export default {
  name: "home",
  components: {
    Portfolio
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.heroImage {
  background: url("../assets/HeroHeader2.jpg") no-repeat center;
  background-size: cover;
  position: relative;

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.9)
    );
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @include desktop {
    min-height: 100vh;
  }

  #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .heroText {
    font-family: "Fjalla One", sans-serif;
    color: #fff;
    position: relative;
    text-transform: uppercase;
    font-size: 24px;
    width: 100%;
    padding: 100px 15%;
    top: 15%;

    @include desktop {
      font-size: 24px;
      top: 50%;
      transform: translateY(-50%);
      padding: 0 20%;
      position: absolute;
    }

    .title {
      margin-bottom: 150px;
      font-size: 45px;

      h2 {
        margin: 0;
      }
    }

    .subtitle {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: Roboto;

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
    }

    .highlight {
      color: $primaryRed;
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
</style>

