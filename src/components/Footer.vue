<template>
  <footer>
    <div class="name">Conor Watson</div>
    <a class="email" href="mailto:conor.watson94@gmail.com">conor.watson94@gmail.com</a>
    <div class="description">Glaswegian software developer with a passion for problem solving.</div>
    <div class="sitemap">
      <router-link to="/">Portfolio</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/CV">CV</router-link>
    </div>
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
    <div class="copyright">Copyright Conor Watson 2019 ©</div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

footer {
  background-color: darken($primaryGrey, 5%);
  padding: 50px;
  text-align: left;
  color: #b3b3b3;

  .name {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .email {
    font-size: 18px;
    color: $primaryRed;
    margin-bottom: 35px;
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }

  .description {
    font-size: 18px;
    margin-bottom: 50px;
  }

  .sitemap {
    padding: 0 20%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    font-size: 18px;
    cursor: pointer;

    a {
      margin: 0 20px;
      position: relative;
      color: #b3b3b3;
      text-decoration: none;

      &:after {
        height: 2px;
        width: 100%;
        position: absolute;
        content: "";
        bottom: -10px;
        opacity: 0;
        left: 0;
        background-color: $primaryRed;
      }

      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }
  }

  .contact {
    padding: 0 20%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

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
  }
}
</style>


