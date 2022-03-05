<template>
	<div class="home">
		<div class="logo-container">
			<div class="skull-glow"></div>
			<img alt="Deadbolt skull" class="logo" src="@/assets/logo-428.png">
		</div>

		<section class="split-content styled-content">
			<div class="split-col">
				<h2>
					<span class="color-purple">
						<router-link class="link" to="/dcp">DCP</router-link>
					</span>
				</h2>
				<p class="color-purple">Deadbolt Community Patch</p>
				<p>New weapons, new objects, playable NPCs, UI updates, moddable sprites, debug mode, walking, rolling, teleporting...</p>
			</div>
			<div class="split-col">
				<h2>
					<span class="color-teal">
						<router-link class="link" to="/decp">DECP</router-link>
					</span>
				</h2>
				<p class="color-teal">Deadbolt Editor Community Patch</p>
				<p>Support for every game object, multi-select, zooming, "open with" support, crash prevention, offline option...</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Home',
	}
</script>

<style lang="scss" scoped>
	.home {
		text-align: center;
		padding-top: 60px;
	}

	.logo-container {
		display: inline-block;
		margin-top: 20px;
		margin-bottom: 40px;
	}

	.logo {
		height: 128px;
		width: 128px;
	}

	p {
		font-size: 1.4rem;
		margin-bottom: 20px;
	}

	.link {
		color: inherit;
		font-size: 2.2rem;
	}

	.split-content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 80px;
		max-width: 700px;
		margin: 0 auto;

		@media (max-width: 760px) {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			padding: 0 20px;

			.split-col {
				flex-basis: 400px;
				margin-bottom: 40px;
			}
		}
	}

	// Discord easter egg
	.skull-glow {
		color: #1EC4F6;
		position: relative;
		opacity: 0;
		animation-delay: 60s;
		animation-duration: 5s;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;
		animation-name: skull-glow;
		animation-timing-function: linear;

		&:before,
		&:after {
			border-radius: 100%;
			box-shadow: 0 0 2px 8px currentColor;
			content: '';
			display: block;
			height: 2px;
			position: absolute;
			top: 81px;
			width: 2px;
		}

		&:before {
			left: 33px;
		}

		&:after {
			right: 34px;
		}
	}

	@keyframes skull-glow {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
