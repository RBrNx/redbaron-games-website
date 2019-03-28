<template>
  <div class="technologiesContainer">
    <h2 class="sectionTitle">Tools and Technologies</h2>
    <div class="technologies">
      <parallax-card
        v-for="(tech, index) in technologies"
        :key="index"
        :index="index"
        :backgroundColor="tech.color"
        :icon="tech.icon"
        :title="tech.title"
        :description="tech.description"
      ></parallax-card>
    </div>
  </div>
</template>

<script>
import ParallaxCard from "./ParallaxCard";

export default {
  name: "Technologies",
  components: {
    ParallaxCard
  },
  data() {
    return {
      technologies: [
        {
          icon: "vuejs",
          color: "#41b883",
          isFile: false,
          title: "Vue.js",
          description:
            "Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications."
        },
        {
          icon: "aws",
          color: "#f90",
          isFile: false,
          title: "AWS",
          description:
            "Amazon Web Services is a provider of on-demand cloud computing platforms, on a metered pay-as-you-go basis."
        },
        {
          icon: "bitbucket",
          color: "#0052cc",
          isFile: false,
          title: "Bitbucket",
          description:
            "Bitbucket is a web-based version control repository hosting service owned by Atlassian, for source code and development projects that use either Mercurial or Git revision control systems."
        },
        {
          icon: "css3-alt",
          color: "#25a1e1",
          isFile: false,
          title: "CSS",
          description:
            "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. "
        },
        {
          icon: "github",
          color: "#171515",
          isFile: false,
          title: "Github",
          description:
            "GitHub is a web-based hosting service for version control using Git. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features."
        },
        {
          icon: "html5",
          color: "#ef6026",
          isFile: false,
          title: "HTML5",
          description:
            "HTML5 is the latest evolution of the standard that defines HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications."
        },
        {
          icon: "jira",
          color: "#0052cc",
          isFile: false,
          title: "Jira",
          description:
            "Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management."
        },
        {
          icon: "js-square",
          color: "#f0db4f",
          isFile: false,
          title: "Javascript (ES6+)",
          description:
            "ECMAScript is the standard upon which JavaScript is based, and it's often abbreviated to ES. ES6 is a major update to JavaScript that includes dozens of new features."
        },
        {
          icon: "less",
          color: "#1e416f",
          isFile: false,
          title: "Less",
          description:
            "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side."
        },
        {
          icon: "markdown",
          color: "#000",
          isFile: false,
          title: "Markdown",
          description:
            "Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats, and is often used for readme files, blog posts, and messages in online discussion forums."
        },
        {
          icon: "node-js",
          color: "#539e43",
          isFile: false,
          title: "Node.js",
          description:
            "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."
        },
        {
          icon: "npm",
          color: "#cc3534",
          isFile: false,
          title: "npm",
          description:
            "npm is a package manager for the JavaScript programming language. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry."
        },
        {
          icon: "react",
          color: "#61dbfb",
          isFile: false,
          title: "React",
          description:
            "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
        },
        {
          icon: "sass",
          color: "#cf649a",
          isFile: false,
          title: "Sass / SCSS",
          description:
            "Sass is a preprocessor scripting language that is compiled into CSS. The newer syntax, SCSS, uses block formatting like that of CSS. Sass extends CSS by providing several mechanisms that are not available to CSS3 itself."
        }
        // { icon: "dotnet", color: "#5c2d91" },
        // { icon: "cplusplus", color: "#004482" },
        // { icon: "csharp", color: "#682876" },
        // { icon: "photoshop", color: "#31c5f0" },
        // { icon: "illustrator", color: "#ff7d00" },
        // { icon: "mysql", color: "#00618a" },
        // { icon: "mongodb", color: "#69b23f " }
      ],
      delay: 0
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.technologiesContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-bottom: 50px;

  .technologies {
    padding: 0 25px;
    position: relative;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @include tablet {
      grid-template-columns: repeat(4, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>


