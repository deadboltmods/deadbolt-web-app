<template>
	<div class="content-with-sidebar">
		<aside class="fixed-sidebar" :class="{ 'active' : sidebarOpen }">
			<div class="fixed-sidebar-toggle" @click="toggleSidebar">
				<inline-svg :src="require('@/assets/svg/material-icons/mi-menu_open.svg')"/>
			</div>

			<div class="fixed-sidebar-content" v-show="sidebarOpen">
				<scrollactive :duration="0" :clickToScroll="false" :offset="60" :highlightFirstItem="true" class="fixed-sidebar-nav">
					<div class="sidebar-group" v-for="(group, groupKey) in contentGroups" :key="groupKey">
						<h2 v-if="hasgroupKeys">{{ groupKeys[groupKey] }}</h2>
						<ul>
							<li v-for="(section, sectionIndex) in group" :key="sectionIndex">
								<!--
								✓ Page position is correctly shown
								✓ Can use animation
								✖ Routing hash changes no longer works with back/forward
								-->
								<!-- <a :href="'#' + section.anchor" class="sidebar-link scrollactive-item">{{ section.name }}</a> -->

								<!--
								✓ Page position is correctly shown
								✖ Can't use animation (set duration to 0)
								✓ Routing hash changes works (use clickToScroll="false", or :modify-url="false")
								-->
								<router-link :to="'#' + section.anchor" class="sidebar-link scrollactive-item">{{ section.name }}</router-link>
							</li>
						</ul>
					</div>
				</scrollactive>

				<div v-for="(widget, widgetIndex) in widgets" class="fixed-sidebar-widget" :key="widgetIndex">
					<component :is="widget"/>
				</div>

				<div v-if="settings" class="fixed-sidebar-settings">
					<SettingsComp :settings="settings"/>
				</div>
			</div>
		</aside>

		<main>
			<!-- <div v-for="(group, groupKey) in contentGroups" :key="groupKey" class="content-group main-content"> -->
				<section
					v-for="(section, sectionIndex) in sections"
					:key="sectionIndex"
					:id="section.anchor"
					:data-anchor-observed="section.anchor"
					class="content-section"
					:class="{ 'content-section--special-heading' : section.specialHeading }">

					<article class="content-section-inner" :class="{ 'content-section-inner--fullwidth' : section.fullwidth }">
						<h2 class="content-section-title centered-content" v-if="!section.hidePageHeading">
							{{ section.name }}
						</h2>
						<div class="intro centered-content" v-if="section.intro">
							<span v-html="section.intro"></span>
						</div>
						<component :is="section.component" :class="{ 'styled-content' : section.useStyledContentClass !== false }"/>
					</article>
				</section>
			<!-- </div> -->
		</main>
	</div>
</template>

<script>
	import InlineSvg from 'vue-inline-svg'
	import SettingsComp from '@/components/Settings.vue'

	export default {
		name: 'DECP',
		components: {
			'inline-svg': InlineSvg,
			SettingsComp,
		},
		props: {
			sections: {
				// Array of objects, with props:
				// name       used in the sidebar and heading
				// anchor     for sidebar menu (abitrary)
				// component  to render, eg. a markdown file
				// groupKey   false, or corresponds to group key passed in groupKeys
				type: Array,
				required: true,
			},
			groupKeys: {
				type: Object,
				required: false,
				default() {
					return {
						untitled: 'Untitled'
					}
				}
			},
			settings: {
				type: Object,
				required: false,
			},
			widgets: {
				type: Array,
				required: false
			},
		},
		data() {
			return {
				sidebarOpen: true,
				sidebarAlwaysOpen: false,
				sidebarAutohideWidth: 1330,
				userClosedSidebarOnDesktop: false,
			}
		},
		computed: {
			contentGroups()
			{
				const groups = {};

				this.sections.forEach( item =>
				{
					if ( item.hideFromSidebar )
					{
						return;
					}

					// Add group key to groups
					if ( !groups?.[item.groupKey] )
					{
						groups[item.groupKey] = [];
					}

					// Add item to keyed group
					groups[item.groupKey].push( item );
				});

				return groups;
			},
			hasgroupKeys()
			{
				return Object.keys( this.groupKeys ).length;
			}
		},
		methods: {
			init()
			{
				// Hide sidebar on narrow viewports
				this.setSidebarStateByWindowSize();

				// Listen for viewport changes, to hide sidebar
				// this.windowResizeListener( this.setSidebarStateByWindowSize );
			},
			windowResizeListener( callback )
			{
				let timeout = false;
				window.addEventListener( 'resize', () =>
				{
					clearTimeout( timeout );
					timeout = setTimeout( callback, 50);
				});
			},
			setSidebarStateByWindowSize()
			{
				if ( ( window.innerWidth < this.sidebarAutohideWidth ) && !this.sidebarAlwaysOpen )
				{
					this.sidebarOpen = false
				}
				else if ( !this.userClosedSidebarOnDesktop )
				{
					// Only open if the user didn't manually close it
					// If they did we can presume they want it to stay closed
					this.sidebarOpen = true
				}
			},
			toggleSidebar()
			{
				if ( window.innerWidth > this.sidebarAutohideWidth )
				{
					// Set/reset "user manually closed sidebar"
					this.userClosedSidebarOnDesktop = this.sidebarOpen
				}

				this.sidebarOpen = !this.sidebarOpen;
			},
		},
		mounted()
		{
			this.init();
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/_variables.scss';

	// Content
	// ============================================================================

	// page sections, divided by centered titles
	.content-section {
		padding-top: 60px;
		padding-bottom: 60px;

		&:nth-of-type(even) {
			background-color: #0D0E0F;
		}

		&--special-heading {
			padding-bottom: 40px;
			padding-top: 40px;
		}
	}

	.content-section-title {
		color: $color-y;
		font-family: $font-serif;
		font-size: 2.5rem;
		margin-bottom: 20px;
		text-align: center;

		.content-section--special-heading & {
			// color: $color-b;
			color: #adadad;
			margin-bottom: 0;
		}
	}

	$fullwidth-indent: $sidebar-width + 40px;

	.content-section-inner {
		max-width: $content-width;
		margin: 0 auto;

		&--fullwidth {
			max-width: $content-width;
			margin-left: $fullwidth-indent;
			margin-right: 40px;
			max-width: none;

			@media (min-width: #{$sidebar-autohide-breakpoint + 1}) {
				// adjust title, otherwise it's pushed too far right
				.centered-content {
					position: relative;
					left: -(($fullwidth-indent / 2) - 20px);
				}
			}

			@media (max-width: $sidebar-autohide-breakpoint) {
				max-width: calc(100% - 40px);
				margin: 0 auto;
			}
		}

		@media (max-width: #{$content-width + 40}) {
			padding-left: 20px;
			padding-right: 20px;
		}
	}


	// Sidebar
	// ============================================================================

	.sidebar-link {
		&.is-active {
			color: $color-lorange;
		}
	}

	.fixed-sidebar {
		backdrop-filter: blur(3px);
		background-color: rgba(26, 28, 29, .85);
		bottom: 0;
		box-shadow: 2px 1px 10px rgba(0, 0, 0, .33);
		font-family: $font-sans;
		font-size: 1.5rem;
		line-height: 1;
		overflow: auto;
		position: fixed;
		top: 50px;
		width: $sidebar-width;
		z-index: 1;

		h2 {
			font-family: $font-serif;
			margin-bottom: 10px;
		}

		li {
			margin-bottom: 5px;
		}

		a {
			color: $color-b;
			text-decoration: none;

			&:hover:not(.is-active) {
				color: darken($color-lorange, 20);
			}
		}

		.sidebar-group + .sidebar-group {
			margin-top: 20px;
		}

		@media (max-width: 1340px) {
			// display: none;
		}

		&.active {
			// border-right: 2px solid orange;
		}

		&:not(.active) {
			// border-right: 2px solid red;
			padding: 0;
			width: auto;
			bottom: auto;
			border-radius: 0 0 40px 0;

			.fixed-sidebar-toggle {
				padding: 25px 20px 20px 30px;
			}
		}
	}

	.fixed-sidebar-toggle {
		color: #A9A9A9;
		cursor: pointer;
		left: -3px;
		padding: 25px 20px 20px 30px;
		position: relative;
		// padding: 10px 20px 10px 30px;
		// background-color: #151617;

		svg {
			fill: currentColor;
		}

		&:hover {
			color: #f6f5f5;
		}
	}

	.fixed-sidebar-content {
		padding: 10px 20px 20px 30px
	}

	.fixed-sidebar-settings {
		border-top: 1px solid rgba(76, 92, 109, .19);
		margin-top: 20px;
		padding-top: 20px;
	}

	.intro {
		margin-bottom: 60px;
		text-align: center;
	}

	.fixed-sidebar-widget {
		border-top: 1px solid rgba(76, 92, 109, .19);
		margin-top: 20px;
		padding-top: 20px;
	}
</style>