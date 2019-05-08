<template>
  <div id="specialitiesContainer">
    <h2 class="sectionTitle">My Specialities</h2>
    <div class="specialities">
      <div class="loaders" v-if="$apollo.loading">
        <content-loader
          class="specialityLoader"
          v-for="i in 6"
          :key="i"
          :height="200"
          :width="400"
          :speed="2"
          primaryColor="#141414"
          secondaryColor="#101010"
        >
          <rect x="162.5" y="25" rx="5" ry="5" width="75" height="75"/>
          <rect x="150" y="115" rx="5" ry="5" width="100" height="15"/>
          <rect x="50" y="150" rx="2.5" ry="2.5" width="300" height="10"/>
          <rect x="50" y="165" rx="2.5" ry="2.5" width="300" height="10"/>
        </content-loader>
      </div>
      <div v-if="$apollo.error">There has been an error loading my specialities.</div>
      <div class="specialityGrid">
        <div
          v-for="(speciality, index) in specialities"
          :class="`card enter-${index}`"
          :key="speciality.id"
        >
          <div v-html="require(`!html-loader!../assets/specialities/${speciality.iconPath}`)"></div>
          <div class="title">{{ speciality.title }}</div>
          <div class="description">{{ speciality.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { ContentLoader } from "vue-content-loader";

const ALL_SPECIALITIES_QUERY = gql`
  query specialities {
    specialities(where: { status: PUBLISHED }) {
      id
      iconPath
      title
      description
    }
  }
`;

export default {
  name: "Specialities",
  components: {
    ContentLoader
  },
  apollo: {
    specialities: {
      query: ALL_SPECIALITIES_QUERY
    }
  },
  data() {
    return {
      specialities: null
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

#specialitiesContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-bottom: 50px;

  .specialities {
    .loaders,
    .specialityGrid {
      padding: 0 25px;
      position: relative;

      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;

      @include tablet {
        grid-template-columns: repeat(2, 2fr);
      }

      @include desktop {
        grid-template-columns: repeat(3, 2fr);
      }

      .specialityLoader {
        background: lighten($primaryGrey, 5%);
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        //padding-left: 10%;
        //padding-right: 10%;
        //padding-top: 5%;
        //padding-bottom: 5%;
        //padding-bottom: 15px;
        //margin-bottom: 30px;
      }
    }

    .loaders {
      margin-bottom: 30px;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: lighten($primaryGrey, 5%);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 5%;
      padding-bottom: 5%;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.02);
      }

      img,
      svg {
        height: 100px;
        width: 100px;
        margin-bottom: 15px;
        fill: $primaryRed;
      }

      .title {
        font-family: "Fjalla One", sans-serif;
        font-size: 24px;
        color: $headingGrey;
        margin-bottom: 40px;
        position: relative;

        &:after {
          content: "";
          display: block;
          height: 2px;
          width: 70px;
          background-color: $primaryRed;
          left: 50%;
          top: 10px;
          position: relative;
          transform: translateX(-50%);
        }
      }

      .description {
        text-align: center;
      }
    }
  }
}
</style>


