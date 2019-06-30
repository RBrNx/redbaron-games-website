<template>
  <div id="technologiesContainer">
    <h2 class="sectionTitle">Tools and Technologies</h2>
    <div class="content" v-if="!$apollo.loading && !$apollo.error">
      <div class="technologies" v-if="technologies.length">
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
      <feedback-message
        v-if="!technologies.length"
        type="missing"
        message="Sorry, there doesn't seem to be anything in my Portfolio at the minute."
      ></feedback-message>
    </div>
    <feedback-message
      v-if="$apollo.error"
      type="error"
      message="Sorry, there has been an error loading my Portfolio."
    ></feedback-message>
  </div>
</template>

<script>
import ParallaxCard from "./ParallaxCard";
import gql from "graphql-tag";
import FeedbackMessage from "./FeedbackMessage";

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
    ParallaxCard,
    FeedbackMessage
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
@import "../assets/global.scss";

#technologiesContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;

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


