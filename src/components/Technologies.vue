<template>
  <div id="technologiesContainer">
    <h2 class="sectionTitle">Tools and Technologies</h2>
    <div class="technologies">
      <parallax-card
        v-for="(tech, index) in technologies"
        :key="tech.id"
        :backgroundColor="tech.color"
        :icon="tech.icon"
        :title="tech.title"
        :isFile="tech.isFile"
        :description="tech.description"
        :class="`enter-${index}`"
      ></parallax-card>
    </div>
  </div>
</template>

<script>
import ParallaxCard from "./ParallaxCard";
import gql from "graphql-tag";

const ALL_TECHNOLOGIES_QUERY = gql`
  query technologies {
    technologies(where: { status: PUBLISHED }) {
      id
      icon
      color
      title
      description
      isFile
    }
  }
`;

export default {
  name: "Technologies",
  components: {
    ParallaxCard
  },
  apollo: {
    technologies: {
      query: ALL_TECHNOLOGIES_QUERY
    }
  },
  data() {
    return {
      technologies: null
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

#technologiesContainer {
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
    grid-template-columns: repeat(1, 1fr);

    @include tablet {
      padding: 0 45px;
      grid-template-columns: repeat(2, 1fr);
    }

    @include laptop {
      padding: 0 75px;
      grid-template-columns: repeat(3, 1fr);
    }

    @include desktop {
      padding: 0 100px;
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>


