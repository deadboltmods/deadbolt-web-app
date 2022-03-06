<template>
	<nav class="tabs tabs--2col">
		<ul class="tab-btns tab-btns--left">
			<li>
				<router-link class="tab-btn" to="/" exact>
					<!-- <img alt="Home" class="tab-icon tab-inner-fade" src="@/assets/sprites/house.png"> -->
					<div class="tab-btn__svg">
						<inline-svg :src="require('@/assets/svg/material-icons/mi-home.svg')"/>
					</div>
				</router-link>
			</li>

			<li><router-link class="tab-btn color-purple" to="/dcp">DCP</router-link></li>
			<li><router-link class="tab-btn color-teal" to="/decp">DECP</router-link></li>

			<!-- Below: Wide Only (Desktop) -->
			<li class="bp-wide-only"><router-link class="tab-btn color-y" to="/config/customjson">Level Config</router-link></li>
			<li class="bp-wide-only"><router-link class="tab-btn" to="/guides">Guides</router-link></li>
			<li class="bp-wide-only"><router-link class="tab-btn" to="/settings">Settings</router-link></li>
			<li class="bp-wide-only">
				<router-link class="tab-btn" to="/stars-calculator">
					<div class="bp-hide-below-medium">
						Stars Calculator
						<div class="tab-btn__tooltip tab-btn__tooltip--new">NEW!</div>
					</div>
					<div class="tab-btn__svg bp-hide-above-medium">
						<inline-svg :src="require('@/assets/svg/material-icons/mi-star.svg')"/>
						<div class="tab-btn__tooltip">Stars Calculator</div>
					</div>
				</router-link>
			</li>
			<li class="bp-wide-only"><router-link class="tab-btn" to="/resources">Resources</router-link></li>

			<!-- Below: Narrow Only (Mobile) -->
			<li class="tab-parent bp-narrow-only">
				<span class="tab-btn" to="#">...</span>
				<ul class="tab-submenu tab-submenu--align-right">
					<li><router-link class="tab-btn color-y" to="/config/customjson">Level Config</router-link></li>
					<li><router-link class="tab-btn" to="/guides">Guides</router-link></li>
					<li><router-link class="tab-btn" to="/settings">Settings</router-link></li>
					<li><router-link class="tab-btn" to="/resources">Resources</router-link></li>
					<li><router-link class="tab-btn" to="/stars-calculator">Stars Calculator</router-link></li>
					<li>
						<a class="tab-btn tab-btn--mobile-external" target="_blank" href="https://discord.gg/nw3Ad2c">
							<inline-svg :src="require('@/assets/svg/material-icons/mi-open-in-new.svg')"/>
							Discord: Deadbolt
						</a>
					</li>
					<li>
						<a class="tab-btn tab-btn--mobile-external" target="_blank" href="https://discord.gg/8dqM6xDmrC">
							<inline-svg :src="require('@/assets/svg/material-icons/mi-open-in-new.svg')"/>
							Discord: Deadbolt Modding
						</a>
					</li>
				</ul>
			</li>
		</ul>

		<!-- Right Nav: Discord -->
		<ul class="tab-btns tab-btns--right bp-hide-below-medium">
			<li>
				<a class="tab-btn tab-btn--has-svg" target="_blank" href="https://discord.gg/nw3Ad2c">
					<div class="tab-btn__svg tab-btn__svg--discord-main">
						<inline-svg :src="require('@/assets/svg/discord-logo.svg')"/>
					</div>
					<div class="tab-btn__tooltip">Deadbolt Discord</div>
				</a>
			</li>
			<li>
				<a class="tab-btn tab-btn--has-svg" target="_blank" href="https://discord.gg/8dqM6xDmrC">
					<div class="tab-btn__svg tab-btn__svg--discord-moding">
						<inline-svg :src="require('@/assets/svg/discord-logo.svg')"/>
					</div>
					<div class="tab-btn__tooltip">Deadbolt Modding Discord</div>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	import InlineSvg from 'vue-inline-svg'

	export default {
		name: 'HeaderMenu',
		components: {
			InlineSvg,
		}
	}
</script>

<style lang="scss">
	@import '../assets/scss/_variables.scss';

	.tabs {
		width: 100%;

		&--2col {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}

	.tab-btns {
		display: flex;
		flex-wrap: wrap;
		font-family: $font-serif;
		font-size: 1.4rem;
		justify-content: space-around;
		max-width: 1000px;
		user-select: none;
		width: 100%;

		// &--left {}

		&--right {
			width: 180px;
		}
	}

	.tab-btn {
		color: #A9A9A9;
		cursor: pointer;
		display: block;
		height: 100%;
		line-height: 1.3;
		margin-right: 3px;
		padding: 12px 20px;
		position: relative;
		text-decoration: none;
		transition: background-color 0.2s;

		&.router-link-active,
		&:hover {
			background-color: #272727;
		}

		&.router-link-active {
			cursor: default;
		}

		&--has-svg {
			align-items: center;
			display: flex;
			justify-content: center;
			line-height: 1;
			padding-top: 5px;
			padding-bottom: 5px;
		}
	}

	.tab-btn__svg {
		align-content: center;
		display: flex;
		justify-content: center;

		svg {
			fill: currentColor;
			height: 25px;
			width: 25px;
		}

		&--discord-main {
			color: #C1612D; // unique
		}

		&--discord-moding {
			color: #96816E; // unique
		}
	}

	.tab-btn__tooltip {
		background-color: #111213;
		border-radius: 0 0 5px 5px;
		font-family: $font-sans;
		font-size: 1.2rem;
		left: 50%;
		margin-top: -20px;
		opacity: 0;
		padding: 5px;
		position: absolute;
		text-align: center;
		top: 100%;
		transform: translateX(-50%);
		transition: 0.3s;
		z-index: 1;
		// This clip path hides the el until it's hovered. Without this,
		// the text box would overlap with the header button
		clip-path: polygon(0% 20px, 100% 20px, 100% 100%, 0% 100%);
	}

	.tab-btn:hover {
		// .tab-btn__tooltip:not(.tab-btn__tooltip--new) {
		.tab-btn__tooltip {
			clip-path: polygon(0% 0, 100% 0, 100% 100%, 0% 100%); // clip full box (hides box shadow)
			display: block;
			margin-top: 0;
			opacity: 1;
		}
	}

	.tab-btn__tooltip--new {
		background-color: darken($color-g, 40);
		box-shadow: 0 1px 10px 0px rgba($color-bl, 0.3);
		clip-path: polygon(-50% 0px, 150% 0px, 150% 150%, -50% 150%); // allow box shadow below, but not above
		color: darken($color-w, 40);
		padding: 2px 10px;
		display: block;
		margin-top: 0;
		opacity: 1;
	}


	// &--mobile-external //@todo

	.tab-inner-fade {
		opacity: .6;
	}

	.tab-icon {
		height: 24px;
		width: 24px;
		margin: 0 auto;
		display: block;
	}

	.tab-parent {
		// position: relative;
		z-index: 2;

		&:hover {
			.tab-submenu {
				display: block;
			}
		}
	}

	.tab-submenu {
		background-color: #1b1c1d;
		border-top: 3px solid #1b1c1d;
		display: none;
		position: absolute;
		width: 100%;
		left: 0;
		right: 0;

		&--align-right {
			right: 0;
		}

		li {
			margin-bottom: 2px;
		}

		a {
			margin: 0;
		}
	}

	.bp-hide-below-medium {
		@media (max-width: 1280px) {
			display: none;
		}
	}

	.bp-hide-above-medium {
		@media (min-width: 1280px + 1) {
			display: none;
		}
	}

	.bp-wide-only {
		@media (max-width: 960px) {
			display: none;
		}
	}

	.bp-narrow-only {
		@media (min-width: 961px) {
			display: none;
		}
	}
</style>
