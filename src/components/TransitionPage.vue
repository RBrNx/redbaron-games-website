<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    :enter-active-class="transitionEnterActiveClass"
    @enter="enter"
  >
    <slot/>
  </transition>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "TransitionPage",
  data() {
    return {
      transitionName: "",
      transitionMode: "out-in",
      transitionEnterActiveClass: "",
      allRoutes: []
    };
  },
  created() {
    this.allRoutes = this.$router.options.routes;
    this.$router.beforeEach((to, from, next) => {
      const toDepth = to.path.split(`/`).length;
      const fromDepth = from.path.split(`/`).length;

      if (toDepth === fromDepth) {
        const fromIndex = this.allRoutes.findIndex(x => x.name === from.name);
        const toIndex = this.allRoutes.findIndex(x => x.name === to.name);

        this.transitionName =
          toIndex < fromIndex ? `slide-right` : `slide-left`;
      } else {
        this.transitionName =
          toDepth < fromDepth ? `slide-right` : `slide-left`;
      }

      this.transitionEnterActiveClass = `${this.transitionName}-enter-active`;

      next();
    });
  },
  methods: {
    enter: function(el, done) {
      //Maybe try to do this smarter?
      setTimeout(done, 5000);
    }
  }
};
</script>

<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

@for $i from 0 through 15 {
  $enter-delay: 150ms;

  .slide-left-enter-active,
  .slide-right-enter-active {
    .enter-#{$i} {
      transition: 500ms cubic-bezier(0.1, 0.7, 0.6, 0.9) !important;
      transition-property: opacity, transform !important;
      transition-delay: #{120ms * $i + $enter-delay} !important;
    }
  }

  .slide-left-enter {
    .enter-#{$i} {
      opacity: 0 !important;
      transform: translateX(150px) !important;
    }
  }

  .slide-right-enter {
    .enter-#{$i} {
      opacity: 0 !important;
      transform: translateX(-150px) !important;
    }
  }
}
</style>