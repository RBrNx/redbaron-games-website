<template>
  <footer>
    <div class="name">Conor Watson</div>
    <div class="chat">Want to chat about something?</div>
    <primary-button @buttonClick="contactMe">Contact Me</primary-button>
    <div class="contact">
      <a href="https://github.com/RBrNx" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
      </a>
      <a href="https://stackoverflow.com/users/4237014/conor-watson" target="_blank">
        <font-awesome-icon :icon="['fab', 'stack-overflow']"></font-awesome-icon>
      </a>
      <a href="https://www.linkedin.com/in/conor-watson-8847665b/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
      </a>
    </div>
    <div class="blurb">
      <span>Developed with love and beer in Glasgow</span>
      <span>💻❤️🍺🏙️</span>
    </div>
    <div class="copyright">Copyright Conor Watson 2019 ©</div>
  </footer>
</template>

<script>
import PrimaryButton from "./PrimaryButton";

export default {
  name: "Footer",
  components: { PrimaryButton },
  methods: {
    contactMe() {
      window.open("mailto:conor.watson94@gmail.com", "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

footer {
  background-color: darken($primaryGrey, 5%);
  padding: 50px 0;
  text-align: left;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-family: "Fjalla One", sans-serif;
    font-size: 30px;
    margin-bottom: 20px;
    color: $headingGrey;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;

    &::before,
    &::after {
      display: inline-block;
      content: "";
      height: 2px;
      background-color: $bodytextGrey;
      width: 20%;
      margin-right: 50px;
      margin-left: 50px;
    }
  }

  .chat {
    margin-bottom: 20px;
    font-size: 18px;
  }

  .primaryButton {
    margin-bottom: 30px;
  }

  .blurb {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .contact {
    padding: 0 20%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    a {
      margin: 0 20px;
      font-size: 24px;
      cursor: pointer;
      color: #b3b3b3;

      &:hover {
        color: $primaryRed;
      }
    }
  }

  .copyright {
    text-align: center;
    font-size: 12px;
  }
}
</style>


