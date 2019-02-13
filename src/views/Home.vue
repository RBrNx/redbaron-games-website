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
          I am a
          <span class="highlight">Full Stack Developer</span> with a passion for problem solving,
          an
          <span class="highlight">eye for design</span> and a devotion to creating
          <span class="highlight">Web Apps</span> more useful than a Bond gadget.
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
    padding: 100px 15%;
    top: 15%;

    @include desktop {
      font-size: 24px;
      top: 50%;
      transform: translateY(-50%);
      padding: 0 20%;
    }

    .title {
      margin-bottom: 150px;
      font-size: 45px;

      h2 {
        margin: 0;
      }
    }

    .highlight {
      color: $primaryRed;
    }
  }
}
</style>

