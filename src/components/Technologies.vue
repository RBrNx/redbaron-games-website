<template>
  <div class="technologiesContainer">
    <h2 class="sectionTitle">Tools and Technologies</h2>
    <div class="technologies">
      <parallax-card
        v-for="(tech, index) in technologies"
        :key="index"
        :index="index"
        :backgroundColor="tech.color"
        :icon="tech.icon"
      ></parallax-card>
    </div>
  </div>
</template>

<script>
import ParallaxCard from "./ParallaxCard";

export default {
  name: "Technologies",
  components: {
    ParallaxCard
  },
  data() {
    return {
      technologies: [
        { icon: "vuejs", color: "#41b883", isFile: false },
        { icon: "aws", color: "#f90", isFile: false },
        { icon: "bitbucket", color: "#0052cc", isFile: false },
        { icon: "css3-alt", color: "#25a1e1", isFile: false },
        { icon: "github", color: "#171515", isFile: false },
        { icon: "html5", color: "#ef6026", isFile: false },
        { icon: "jira", color: "#0052cc", isFile: false },
        { icon: "js-square", color: "#f0db4f", isFile: false },
        { icon: "less", color: "#1e416f", isFile: false },
        { icon: "markdown", color: "#000", isFile: false },
        { icon: "node-js", color: "#539e43", isFile: false },
        { icon: "npm", color: "#cc3534", isFile: false },
        { icon: "react", color: "#61dbfb", isFile: false },
        { icon: "sass", color: "#cf649a", isFile: false }
        // { icon: "dotnet", color: "#5c2d91" },
        // { icon: "cplusplus", color: "#004482" },
        // { icon: "csharp", color: "#682876" },
        // { icon: "photoshop", color: "#31c5f0" },
        // { icon: "illustrator", color: "#ff7d00" },
        // { icon: "mysql", color: "#00618a" },
        // { icon: "mongodb", color: "#69b23f " }
      ],
      delay: 0
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.technologiesContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-bottom: 50px;

  .technologies {
    padding: 0 25px;
    position: relative;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    //grid-gap: 30px;

    @include tablet {
      grid-template-columns: repeat(4, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(6, 1fr);
    }

    .techCard {
    }
  }
}
</style>


