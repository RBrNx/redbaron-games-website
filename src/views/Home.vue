<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="heroImage">
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
			>
			</vue-particles>
			<div class="heroText">
				<div class="title">
					<h2>The Name's Watson.</h2>
					<h2><span class="highlight">Conor Watson.</span></h2>
				</div>
				<div class="subtitle">
					<p>
						I am a <span class="highlight">Full Stack Developer</span> with a passion for problem solving,
						an <span class="highlight">eye for design</span> and a devotion to creating <span class="highlight">Web Applications</span> more useful than a Bond gadget.
					</p>
				</div>
			</div>
			<div class="heroButton">

			</div>
		</div>
		<div class="portfolioContainer">
			<h2>Portfolio</h2>
			<p>From Minigolf Games to Christmas Puzzle Events! Check out some of my personal projects. </p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import "../assets/global.scss";

	.heroImage{
		background: url("../assets/HeroHeader2.jpg") no-repeat center;
		background-size: cover;
		height: 150vh;
		position: relative;

		&:before{
			background: linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9));
			content: "";
			position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
		}

		@include desktop{
			height: 100vh;
		}

		#particles-js{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.heroText{
			font-family: 'Fjalla One', sans-serif;
			color: #fff;
			position: relative;
			text-transform: uppercase;
			font-size: 24px;
			padding: 0 15%;
			top: 15%;

			@include desktop{
				font-size: 24px;
				top: 50%;
				transform: translateY(-50%);
				padding: 0 20%;
			}

			.title{
				margin-bottom: 150px;
				font-size: 45px;

				h2{
					margin: 0;
				}
			}

			.highlight{
				color: $primaryRed;
			}
		}
	}

	.portfolioContainer{
		height: 400px;
		width: 100%;
		background: $primaryGrey;
		color: $bodytextGrey;
		font-family: 'Roboto', sans-serif;
		text-align: left;

		h2{
			margin: 0;
			padding: 25px 0 0 25px;
			font-family: 'Fjalla One', sans-serif;
			font-size: 32px;
			text-transform: uppercase;
			color: $headingGrey;
			position: relative;
			display: inline-block;

			&:after{
				content: ' ';
				position: absolute;
				top: calc(100% + 6px);
				left: 25px;
				height: 1px;
				width: calc(100% - 25px);
				background: $headingGrey;
			}
		}

		p{
			padding: 0 25px;
			font-size: 18px;
		}
	}
</style>

