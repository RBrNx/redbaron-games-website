<template>
  <div class="cv">
    <hero-header :hideHeroButton="true">
      <h2 class="title enter-1" slot="title">Curriculum Vitae</h2>
      <div class="buttonContainer">
        <primary-button
          customClass="enter-2"
          @buttonClick="downloadLocalFile('/CV-Conor-Watson.pdf')"
        >Download as PDF</primary-button>
        <primary-button
          customClass="enter-3"
          @buttonClick="downloadLocalFile('/CV-Conor-Watson.docx')"
        >Download as docx</primary-button>
      </div>
    </hero-header>
  </div>
</template>

<script>
import HeroHeader from "../components/HeroHeader";
import PrimaryButton from "../components/PrimaryButton";

export default {
  name: "CV",
  components: {
    HeroHeader,
    PrimaryButton
  },
  methods: {
    downloadLocalFile(path) {
      let aTag = document.createElement("a");
      aTag.setAttribute("href", path);
      aTag.setAttribute("download", "");

      document.body.appendChild(aTag);
      aTag.click();
      aTag.parentNode.removeChild(aTag);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/global.scss";

.cv {
  .heroImage {
    overflow: hidden;
    flex-direction: column;
    align-items: center;

    .heroText {
      padding: 0;

      .title {
        font-size: 60px;
        margin: 0;
        margin-bottom: 100px;
      }
    }
  }

  @include tablet {
    .heroImage {
      .heroText {
        .title {
          font-size: 68px;
          margin-bottom: 100px;
        }
      }
    }
  }

  .buttonContainer {
    width: 300px;

    .primaryButton {
      width: 100%;
      margin-bottom: 40px;
    }
  }
}
</style>

