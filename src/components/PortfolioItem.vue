<template>
  <div class="portfolioItem">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  components: {},
  props: ["itemData"],
  computed: {
    name() {
      return this.itemData ? this.itemData.name : null;
    }
  },
  watch: {
    itemData() {
      console.log(this.itemData);
    }
  }
};
</script>