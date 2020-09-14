<template>
	<div class="home">
		<div class="logo-container">
			<div class="skull-glow" :class="{ 'active' : skullIsActive }" :style="{ 'color': skullGlowColor }"></div>
			<img alt="Vue logo" class="logo" src="@/assets/logo-428.png">
		</div>

		<section class="split-content styled-content">
			<div class="split-col" @mouseover="skullGlow('dcp')" @mouseleave="skullUnglow">
				<h2>
					<span class="color-purple">
						<router-link class="link" to="/dcp">DCP</router-link>
					</span>
				</h2>
				<p>Deadbolt Community Patch</p>
				<p>Custom campaigns, custom sprites, playable NPCs, new weapons, controller support, new level options, debug mode, walking, rolling, teleporting...</p>
			</div>
			<div class="split-col" @mouseover="skullGlow('decp')" @mouseleave="skullUnglow">
				<h2>
					<span class="color-teal">
						<router-link class="link" to="/decp">DECP</router-link>
					</span>
				</h2>
				<p>Deadbolt Editor Community Patch</p>
				<p>Support for every game object, <br>more submenu options, door validation feedback, hovertext, zooming, "open with" support, tons of fixes.</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				skullIsActive: false,
				skullGlowColor: '#1ec4f6',
			}
		},
		methods: {
			// easter egg for Discord users
			skullGlow( link )
			{
				let glowColor;

				switch( link )
				{
					case 'dcp':
						glowColor = '#cd7bef';
						break;

					case 'decp':
						glowColor = '#4db6ac';
						break;

					default:
						glowColor = '#1ec4f6'; // chat blue
				}

				this.skullGlowColor = glowColor;
				this.skullIsActive = true;
			},
			skullUnglow()
			{
				this.skullIsActive = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		text-align: center;
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
	}

	.skull-glow {
		// color: #1EC4F6;
		position: relative;
		opacity: 0;
		transition: opacity .5s;

		&.active {
			opacity: 1;
			transition: opacity 10s;
		}

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
</style>
