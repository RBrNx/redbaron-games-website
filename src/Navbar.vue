<template>
  <nav :class="{ 'hidden': hideNavbar, 'scrollTop': scrollTop }">
    <router-link to="/">Portfolio</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/CV">CV</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  methods: {
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.hideNavbar = true;
      }

      if (this.lastPosition > window.scrollY) {
        this.hideNavbar = false;
      }

      this.lastPosition = window.scrollY;

      this.scrollTop = this.lastPosition == 0 ? true : false;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      limitPosition: 20,
      lastPosition: 0,
      hideNavbar: false,
      scrollTop: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/global.scss";

nav {
  position: fixed;
  z-index: 99;
  width: 100vw;
  font-family: "Fjalla One", sans-serif;
  background: $primaryGrey;
  transition: transform 200ms linear, background 200ms linear;
  transition-delay: 0ms;

  &.scrollTop {
    background: transparent;
  }

  &.hidden {
    transform: translateY(-85%);
  }

  a {
    font-weight: bold;
    color: #b3b3b3;
    padding: 20px 15px;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: $primaryRed;
    }

    &.router-link-exact-active {
      color: $primaryRed;
    }

    @include desktop() {
      padding: 20px 30px;
    }
  }
}
</style>


