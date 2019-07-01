<template>
  <div id="app">
    <navbar :hideNavbarProp="hideNavbar"></navbar>
    <transition-page>
      <router-view @cardCloneOpened="cardCloneOpened" @cardCloneClosed="cardCloneClosed"/>
    </transition-page>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import TransitionPage from "./components/TransitionPage";

export default {
  name: "App",
  components: {
    Navbar,
    TransitionPage
  },
  methods: {
    cardCloneOpened() {
      this.hideNavbar = true;
    },
    cardCloneClosed() {
      this.hideNavbar = null;
    }
  },
  data() {
    return {
      transitionName: null,
      hideNavbar: false
    };
  }
};
</script>

<style lang="scss">
@import "./assets/global.scss";

body {
  margin: 0;
  background-color: #1d1d1d;

  &.overlayShown {
    overflow: hidden;
  }
}

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::selection {
  background: $primaryRed; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: $primaryRed; /* Gecko Browsers */
}
</style>
