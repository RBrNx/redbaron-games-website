<template>
  <section
    class="heroImage"
    :style="{ 'background': `url(${backgroundImage}) no-repeat center/cover` }"
  >
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
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
    </div>
    <slot></slot>
    <hero-button v-if="!hideHeroButton"></hero-button>
  </section>
</template>

<script>
import HeroButton from "../components/HeroButton";

export default {
  name: "HeroHeader",
  props: ["backgroundImage", "hideHeroButton"],
  components: {
    HeroButton
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.heroImage {
  background-size: cover;
  position: relative;
  transition: background 1s ease-in;
  min-height: 100vh;
  display: flex;
  justify-content: center;

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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @include desktop {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 100%;
    padding: 100px 15%;
    pointer-events: none;

    @include tablet {
      padding: 0 8%;
    }

    @include desktop {
      font-size: 24px;
      padding: 0 20%;
    }
  }
}
</style>

