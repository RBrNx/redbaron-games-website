<template>
  <div class="feedbackMessage">
    <p>{{ message }}</p>
    <span
      v-if="type === 'empty'"
      class="svg"
      v-html="require(`!html-loader!../assets/undraw_empty.svg`)"
    ></span>
  </div>
</template>

<script>
export default {
  name: "FeedbackMessages",
  props: ["message", "type"]
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.feedbackMessage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 35px;

  p {
    color: $bodytextGrey;
    font-family: "Fjalla One", sans-serif;
    text-transform: capitalize;
    font-size: 26px;
    margin-bottom: 50px;
  }

  svg {
    height: 290px;
  }
}
</style>


