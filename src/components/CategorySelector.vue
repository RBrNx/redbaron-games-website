<template>
  <div class="categorySelector">
    <span
      v-for="category in categories"
      :key="category.id"
      :id="category.id"
      @click="categoryOnClick"
    >{{ category.name }}</span>
  </div>
</template>

<script>
export default {
  name: "CategorySelector",
  props: ["categories"],
  methods: {
    categoryOnClick(e) {
      e.target.classList.toggle("selected");
      this.$emit("categoryClicked", e.target.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.categorySelector {
  margin-top: 25px;
  margin-bottom: 35px;
  padding: 0 25px;

  @include tablet() {
    padding: 0 45px;
  }

  @include laptop() {
    padding: 0 100px;
  }

  @include desktop() {
    padding: 0 175px;
  }

  span {
    background-color: lighten($primaryGrey, 10%);
    border-radius: 5px;
    margin-right: 10px;
    padding: 5px;
    cursor: pointer;
    transition: all 0.3s;

    &.selected {
      background-color: $primaryRed;
      color: white;
    }
  }
}
</style>


