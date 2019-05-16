<template>
  <div id="app">
    <navbar :hideNavbarProp="hideNavbar"></navbar>
    <transition-page>
      <router-view @modalOpened="modalOpened" @modalClosed="modalClosed"/>
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
    modalOpened() {
      this.hideNavbar = true;
    },
    modalClosed() {
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
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
