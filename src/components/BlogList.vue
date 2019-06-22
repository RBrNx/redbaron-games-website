<template>
  <section id="blogListContainer">
    <h2 class="sectionTitle">Blogs, Tutorials and Labs.</h2>
    <p class="blurb">Filter the list using the following categories</p>
    <category-selector :categories="categories" @categoryClicked="toggleCategoryFilter"></category-selector>
    <div class="blogs">
      <div class="loaders" v-if="loading">
        <content-loader
          class="blogLoader"
          v-for="i in 3"
          :key="i"
          :height="400"
          :width="400"
          :speed="2"
          primaryColor="#141414"
          secondaryColor="#101010"
        >
          <rect x="0" y="0" rx="0" ry="0" width="400" height="250"/>
          <rect x="15" y="265" rx="5" ry="5" width="170" height="25"/>
          <rect x="15" y="300" rx="5" ry="5" width="370" height="20"/>
          <rect x="15" y="350" rx="5" ry="5" width="370" height="50"/>
        </content-loader>
      </div>
      <div v-if="$apollo.error">There has been an error loading my portfolio.</div>
      <div class="items" v-if="!loading && !$apollo.error">
        <blog-card
          v-for="(item, index) in blogs"
          ref="blogs"
          :id="item.id"
          :key="item.id"
          :itemData="item"
          :itemClass="`enter-${index}`"
          @buttonClick="openCardModal(item.id)"
        ></blog-card>
      </div>
      <router-view v-if="!loading && !$apollo.error"></router-view>
    </div>
  </section>
</template>

<script>
import BlogCard from "./BlogCard";
import BlogArticle from "./BlogArticle";
import CardClone from "../components/CardClone";
import { ContentLoader } from "vue-content-loader";
import { ALL_BLOGS_QUERY } from "../library/Queries";
import CategorySelector from "./CategorySelector";

export default {
  name: "BlogList",
  components: {
    BlogCard,
    BlogArticle,
    CardClone,
    ContentLoader,
    CategorySelector
  },
  apollo: {
    blogs: {
      query: ALL_BLOGS_QUERY,
      variables() {
        return {
          where: { AND: this.categoryFilter }
        };
      },
      result({ data }) {
        clearTimeout(this.timer);
        this.categories = data.categories;
        this.loading = false;
      }
    }
  },
  methods: {
    openCardModal(id) {
      const itemData = this.blogs.find(b => b.id === id);

      this.$router.push({
        name: "blogPost",
        params: {
          id,
          itemData
        }
      });

      this.$emit("modalOpened");
    },
    toggleCategoryFilter(categoryID) {
      const catIndex = this.categoryFilter.findIndex(
        c => c.categories_some.id === categoryID
      );

      this.timer = setTimeout(() => (this.loading = true), 200);

      if (catIndex > -1) {
        this.$delete(this.categoryFilter, catIndex);
      } else {
        this.categoryFilter.push({ categories_some: { id: categoryID } });
      }
    }
  },
  data() {
    return {
      blogs: null,
      categories: null,
      categoryFilter: [],
      loading: true,
      timer: null
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

#blogListContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-bottom: 50px;

  .blogs {
    .loaders,
    .items {
      padding: 0 25px;
      position: relative;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;

      @include tablet {
        padding: 0 45px;
        grid-template-columns: repeat(2, 2fr);
      }

      @include laptop {
        padding: 0 100px;
        grid-template-columns: repeat(3, 2fr);
      }

      @include desktop {
        padding: 0 175px;
        grid-template-columns: repeat(3, 2fr);
      }
    }

    .blogLoader {
      background: lighten($primaryGrey, 5%);
      border-radius: 5px;
      padding-bottom: 15px;
      margin-bottom: 30px;
    }
  }
}
</style>

