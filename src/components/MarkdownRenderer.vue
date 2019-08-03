<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import MarkedWorker from "../marked.worker.js";

export default {
  props: ["source"],
  mounted() {
    const worker = new MarkedWorker();

    worker.addEventListener("message", e => (this.renderedMarkdown = e.data));

    worker.postMessage(this.source);
  },
  computed: {
    compiledMarkdown: function() {
      return this.renderedMarkdown || this.source;
    }
  },
  data() {
    return {
      renderedMarkdown: null
    };
  }
};
</script>