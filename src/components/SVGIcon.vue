<template>
  <div class="iconContainer" v-html="svgContent" />
</template>
<script>
export default {
  name: "SVGIcon",
  props: ["src"],
  data() {
    return {
      svgContent: ""
    };
  },
  async mounted() {
    const response = await fetch(this.src);
    const svg = await response.text();

    this.svgContent = svg;
  }
};
</script>