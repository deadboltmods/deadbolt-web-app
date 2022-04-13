<template>
	<nav class="tabs tabs--2col">
		<ul class="tab-btns tab-btns--left">

			<!-- Main Links (always shown) -->

			<li>
				<router-link class="tab-btn" to="/" exact>
					<div class="tab-btn__svg">
						<inline-svg :src="require('@/assets/svg/material-icons/mi-home.svg')"/>
					</div>
				</router-link>
			</li>
			<li><router-link class="tab-btn color-purple" to="/dcp">DCP</router-link></li>
			<li><router-link class="tab-btn color-teal" to="/decp">DECP</router-link></li>

			<!-- Desktop Only -->
			<li v-for="(link, linkIndex) in mainLinks" :key="'mainlink' + linkIndex" :class="link.hideOnMobile ? 'bp-wide-only' : ''">
				<router-link class="tab-btn" :class="link.colorCls" :to="link.route">
					<div class="bp-hide-below-medium" v-if="!link.iconOnly">
						{{ link.name }}
						<div v-if="link.isNew" class="tab-tooltip tab-tooltip--new">NEW!</div>
					</div>
					<div class="tab-btn__svg" :class="(!link.iconOnly) ? 'bp-hide-above-medium' : ''">
						<inline-svg :src="require('@/assets/svg/' + link.svgIcon)"/>
						<div v-if="link.isNew" class="tab-tooltip tab-tooltip--new">NEW!</div>
						<div class="tab-tooltip" :class="link.centerTooltip ? 'tab-tooltip--center' : ''">{{ link.name }}</div>
					</div>
				</router-link>
			</li>

			<!-- Mobile Menu -->
			<li class="tab-parent bp-narrow-only">
				<span class="tab-btn" to="#">...</span>
				<ul class="tab-submenu tab-submenu--align-right">
					<li><router-link class="tab-btn color-y" to="/config/customjson">Level Config</router-link></li>
					<li><router-link class="tab-btn" to="/guides">Guides</router-link></li>
					<li><router-link class="tab-btn" to="/settings">Settings</router-link></li>
					<li><router-link class="tab-btn" to="/resources">Resources</router-link></li>
					<li><router-link class="tab-btn" to="/stars-calculator">Stars Calculator</router-link></li>
					<li>
						<a class="tab-btn tab-btn--mobile-external" target="_blank" :href="websiteUrls.discordMain">
							<inline-svg :src="require('@/assets/svg/material-icons/mi-open-in-new.svg')"/>
							Report Bugs (on Discord)
						</a>
					</li>
					<li>
						<a class="tab-btn tab-btn--mobile-external" target="_blank" :href="websiteUrls.discordMain">
							<inline-svg :src="require('@/assets/svg/material-icons/mi-open-in-new.svg')"/>
							Join Deadbolt Discord
						</a>
					</li>
					<li>
						<a class="tab-btn tab-btn--mobile-external" target="_blank" :href="websiteUrls.discordModding">
							<inline-svg :src="require('@/assets/svg/material-icons/mi-open-in-new.svg')"/>
							Join Deadbolt Modding Discord
						</a>
					</li>
				</ul>
			</li>
		</ul>

		<!-- Right Nav: Discord -->
		<!-- bp-hide-below-medium -->
		<ul class="tab-btns tab-btns--right bp-wide-only">
			<li>
				<a class="tab-btn" target="_blank" :href="websiteUrls.discordModdingBugReportChannel">
					<div class="tab-btn__svg tab-btn__svg--report-bug">
						<inline-svg :src="require('@/assets/svg/material-icons/mi-bug-report.svg')"/>
						<div class="tab-tooltip">Report Bugs</div>
					</div>
				</a>
			</li>
			<li>
				<a class="tab-btn tab-btn--has-svg" target="_blank" :href="websiteUrls.discordMain">
					<div class="tab-btn__svg tab-btn__svg--discord-main">
						<inline-svg :src="require('@/assets/svg/discord-logo.svg')"/>
					</div>
					<div class="tab-tooltip">Deadbolt Discord</div>
				</a>
			</li>
			<li>
				<a class="tab-btn tab-btn--has-svg" target="_blank" :href="websiteUrls.discordModding">
					<div class="tab-btn__svg tab-btn__svg--discord-moding">
						<inline-svg :src="require('@/assets/svg/discord-logo.svg')"/>
					</div>
					<div class="tab-tooltip">Deadbolt Modding Discord</div>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	import InlineSvg from 'vue-inline-svg'
	import websiteUrls from '@/data/websiteUrls'

	export default {
		name: 'HeaderMenu',
		data() {
			return {
				websiteUrls: websiteUrls,
				mainLinks: [
					{
						name: 'Level Config',
						route: '/config/customjson',
						colorCls: 'color-y',
						svgIcon: 'material-icons/mi-construction.svg',
						centerTooltip: false,
						isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},

					/*
					//@TODO:WALLPAPER_BUILDER
					{
						name: 'Wallpaper Builder',
						route: '/config/wallpaper-builder',
						colorCls: 'color-y',
						svgIcon: 'material-icons/mi-brush.svg',
						centerTooltip: false,
						isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},
					*/

					{
						name: 'News & Updates',
						route: '/news',
						colorCls: '',
						// svgIcon: 'material-icons/mi-campaign.svg',
						svgIcon: 'material-icons/mi-new-releases.svg',
						centerTooltip: false,
						isNew: true,
						iconOnly: true,
						hideOnMobile: true,
					},
					{
						name: 'Guides',
						route: '/guides',
						colorCls: '',
						svgIcon: 'material-icons/mi-help.svg',
						centerTooltip: false,
						isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},
					{
						name: 'JSON Settings',
						route: '/settings',
						colorCls: '',
						svgIcon: 'material-icons/mi-settings.svg',
						centerTooltip: false,
						isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},
					{
						name: 'Images',
						route: '/images',
						colorCls: '',
						svgIcon: 'material-icons/mi-image.svg',
						centerTooltip: true,
						isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},
					{
						name: 'Resources',
						route: '/resources',
						colorCls: '',
						svgIcon: 'material-icons/mi-dashboard.svg',
						centerTooltip: true,
						isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},
					{
						name: 'Stars Calculator',
						route: '/stars-calculator',
						colorCls: '',
						svgIcon: 'material-icons/mi-star.svg',
						centerTooltip: true,
						isNew: false,
						// isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},
					{
						name: 'Dev Blog Explorer',
						route: '/devblog-explorer',
						colorCls: '',
						svgIcon: 'material-icons/mi-question-answer.svg',
						centerTooltip: false,
						isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},
					{
						name: 'Links',
						route: '/links',
						colorCls: '',
						svgIcon: 'material-icons/mi-link.svg',
						centerTooltip: true,
						isNew: false,
						iconOnly: true,
						hideOnMobile: true,
					},
				],
			}
		},
		components: {
			InlineSvg,
		}
	}
</script>

<style lang="scss">
	@import '../assets/scss/_variables.scss';

	.tabs {
		@media (max-width: 960px) {
			width: 100%;
		}

		&--2col {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			width: 100%;
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

		@media (max-width: 960px) {
			width: 100%;
		}

		// &--left {}

		// &--right {
			// width: 180px;
		// }
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
			color: $color-g;
		}

		&--discord-moding {
			color: #96816E; // unique
			color: $color-b;
		}

		&--report-bug {
			color: $color-r;
		}
	}

	.tab-btn--mobile-external {
		svg {
			line-height: 1;
			width: 15px;
			height: 15px;
			fill: currentColor;
			margin-right: 5px;
			position: relative;
			top: 1px;
		}
	}

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


	// Tooltips
	// ============================================================================

	// *1: This clip path hides the el until it's hovered. Without this, the
	// text box would overlap with the header button

	.tab-tooltip {
		background-color: #111213;
		border-radius: 0 0 5px 5px;
		clip-path: polygon(0% 20px, 100% 20px, 100% 100%, 0% 100%); // *1
		font-family: $font-sans;
		font-size: 1.2rem;
		// left: 50%;
		margin-top: -20px;
		opacity: 0;
		padding: 5px;
		position: absolute;
		text-align: center;
		top: 100%;
		// transform: translateX(-50%);
		transition: 0.3s;
		z-index: 1;

		left: 0;
		right: 0;

		&--center {
			left: 50%;
			transform: translateX(-50%);
			right: auto;
		}
	}

	.tab-btn:hover {
		.tab-tooltip {
			clip-path: polygon(0% 0, 100% 0, 100% 100%, 0% 100%); // clip full box (hides box shadow)
			display: block;
			margin-top: 0;
			opacity: 1;
		}
	}

	// Bug: the text gets blurry when box-shadow is used on the main el if translateX is active
	.tab-tooltip--new {
		background-color: darken($color-g, 40);
		box-shadow: none;
		box-shadow: 0 1px 10px 0px rgba($color-bl, 0.3);
		clip-path: polygon(-50% 0px, 150% 0px, 150% 150%, -50% 150%); // allow box shadow below, but not above
		color: darken($color-w, 40);
		display: block;
		margin-top: 0;
		opacity: 1;
		padding: 2px 15px;
	}


	// Mobile Menu
	// ============================================================================

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


	// Responsive
	// ============================================================================

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
