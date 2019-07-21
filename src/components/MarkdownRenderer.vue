<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import marked from "marked";

export default {
  props: ["source"],
  computed: {
    compiledMarkdown: function() {
      return marked(this.source, { sanitize: true, breaks: true });
    }
  }
};
</script>