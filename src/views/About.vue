<template>
  <div class="about">
    <div
      class="heroImage"
      :style="{ 'background': `url(${backgroundImages[imageIndex]}) no-repeat center` }"
    >
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
      <div class="heroText">
        <div class="title">
          <h2>
            Elementary, my dear
            <span class="highlight">Watson.</span>
          </h2>
        </div>
        <div class="subtitle">
          <span>
            I am a Glaswegian dwelling Software Developer who is passionate about
            <span
              class="highlight"
            >creating fantastic user experiences</span>. With my well rounded technical skills and an eye for design, I am adept at
            <span
              class="highlight"
            >balancing functionality and beauty</span> in the applications I develop.
          </span>
        </div>
      </div>
      <div class="heroButton"></div>
    </div>
    <div id="preload">
      <img src="../assets/ClydeArc.jpg">
      <img src="../assets/DukeOfWellington.jpg">
      <img src="../assets/GeorgeSquare.jpg">
      <img src="../assets/Hydro.jpg">
    </div>
    <div class="specialitiesContainer">
      <h2>My Specialities</h2>
      <div class="specialities">
        <div class="card">
          <div v-html="require('!html-loader!../assets/WebDevelopment.svg')"></div>
          <div class="title">Web Development</div>
          <div
            class="description"
          >With a first-class degree in Computer Science, I am able to bring your animations and interactions to life with proper software development techniques.</div>
        </div>
        <div class="card">
          <div v-html="require('!html-loader!../assets/Learning2.svg')"></div>
          <div class="title">Rapid Learning</div>
          <div
            class="description"
          >I love to increase both my technical and real world knowledge, picking up new skills along the way. I have found that I am able to do this fairly rapidly.</div>
        </div>
        <div class="card">
          <div v-html="require('!html-loader!../assets/MobileDevelopment2.svg')"></div>
          <div class="title">Native Mobile Development</div>
          <div
            class="description"
          >A great native experience can really enhance the success and professionality of a project.</div>
        </div>
        <div class="card">
          <div v-html="require('!html-loader!../assets/ProblemSolving.svg')"></div>
          <div class="title">Problem Solving</div>
          <div class="description">
            Problem solving shouldn't be about finding the quickest and easiet workaround, it's about finding the
            <em>right</em> solution to your problem.
          </div>
        </div>
        <div class="card">
          <div v-html="require('!html-loader!../assets/ResponsiveWebDesign.svg')"></div>
          <div class="title">Responsive Web Design</div>
          <div
            class="description"
          >While I'm no graphic designer, I do have a eye for great design. I am comfortable using design tools and can take responsive designs from mock-up to implementation.</div>
        </div>
        <div class="card">
          <div v-html="require('!html-loader!../assets/Teamwork.svg')"></div>
          <div class="title">Team Collabortation</div>
          <div
            class="description"
          >I am a strong team player with a belief that communication is key to a successful project. I have the flexibility to adapt to where my work needs me most.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClydeArc from "../assets/ClydeArc.jpg";
import DukeOfWellington from "../assets/DukeOfWellington.jpg";
import GeorgeSquare from "../assets/GeorgeSquare.jpg";
import Hydro from "../assets/Hydro.jpg";

export default {
  name: "about",
  components: {},
  methods: {},
  data() {
    return {
      imageIndex: 0,
      backgroundImages: [ClydeArc, DukeOfWellington, GeorgeSquare, Hydro]
    };
  },
  mounted() {
    window.setInterval(() => {
      if (this.imageIndex == this.backgroundImages.length - 1)
        this.imageIndex = 0;
      else this.imageIndex += 1;
    }, 6000);
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.about {
  #preload {
    display: none;
  }

  .heroImage {
    background-size: cover;
    position: relative;
    transition: background-image 1.5s;

    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.85),
        rgba(0, 0, 0, 0.7)
      );
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    @include desktop {
      min-height: 100vh;
    }

    #particles-js {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .heroText {
      font-family: "Fjalla One", sans-serif;
      color: #fff;
      position: relative;
      text-transform: uppercase;
      font-size: 24px;
      width: 100%;
      padding: 100px 15%;
      top: 15%;

      @include desktop {
        font-size: 24px;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 20%;
        position: absolute;
      }

      .title {
        margin-bottom: 150px;
        font-size: 45px;

        h2 {
          margin: 0;
        }
      }

      .subtitle {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-family: Roboto;
        line-height: 40px;
      }

      .highlight {
        color: $primaryRed;
      }
    }
  }

  .specialitiesContainer {
    width: 100%;
    background: $primaryGrey;
    color: $bodytextGrey;
    font-family: "Roboto", sans-serif;
    text-align: left;
    padding-bottom: 50px;

    h2 {
      margin: 0;
      margin-bottom: 18px;
      padding: 25px 0 0 25px;
      font-family: "Fjalla One", sans-serif;
      font-size: 32px;
      text-transform: uppercase;
      color: $headingGrey;
      position: relative;
      display: inline-block;

      &:after {
        content: " ";
        position: absolute;
        top: calc(100% + 6px);
        left: 25px;
        height: 1px;
        width: calc(100% - 25px);
        background: $headingGrey;
      }
    }

    .specialities {
      padding: 0 25px;
      position: relative;

      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;

      @include tablet {
        grid-template-columns: repeat(2, 2fr);
      }

      @include desktop {
        grid-template-columns: repeat(3, 2fr);
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: lighten($primaryGrey, 5%);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 5%;
        padding-bottom: 5%;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.02);
        }

        img,
        svg {
          height: 100px;
          width: 100px;
          margin-bottom: 15px;
          fill: $primaryRed;
        }

        .title {
          font-family: "Fjalla One", sans-serif;
          font-size: 24px;
          color: $headingGrey;
          margin-bottom: 40px;
          position: relative;

          &:after {
            content: "";
            display: block;
            height: 2px;
            width: 70px;
            background-color: $primaryRed;
            left: 50%;
            top: 10px;
            position: relative;
            transform: translateX(-50%);
          }
        }

        .description {
          text-align: center;
        }
      }
    }
  }
}
</style>

