<template>
	<nav class="tabs">
		<ul class="tab-btns">
			<li>
				<router-link class="tab-btn" to="/" exact>
					<img alt="Settings" class="tab-icon tab-inner-fade" src="@/assets/sprites/house.png">
				</router-link>
			</li>

			<li><router-link class="tab-btn color-purple" to="/dcp">DCP</router-link></li>
			<li><router-link class="tab-btn color-teal" to="/decp">DECP</router-link></li>

			<li class="bp-wide-only"><router-link class="tab-btn color-y" to="/config/customjson">Level Config</router-link></li>

			<li class="bp-wide-only"><router-link class="tab-btn" to="/guides">Guides</router-link></li>
			<li class="bp-wide-only"><router-link class="tab-btn" to="/settings">Settings</router-link></li>
			<li class="bp-wide-only"><router-link class="tab-btn" to="/resources">Resources</router-link></li>

			<li class="tab-parent bp-narrow-only">
				<span class="tab-btn" to="#">...</span>
				<ul class="tab-submenu tab-submenu--align-right">
					<li><router-link class="tab-btn color-y" to="/config/customjson">Level Config</router-link></li>
					<li><router-link class="tab-btn" to="/guides">Guides</router-link></li>
					<li><router-link class="tab-btn" to="/settings">Settings</router-link></li>
					<li><router-link class="tab-btn" to="/resources">Resources</router-link></li>
				</ul>
			</li>

		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'HeaderMenu'
	}
</script>

<style lang="scss">
	@import '../assets/scss/_variables.scss';

	.tabs {
		@media (max-width: 960px) {
			width: 100%;
		}
	}

	.tab-btns {
		display: flex;
		flex-wrap: wrap;
		font-family: $font-serif;
		font-size: 1.4rem;
		justify-content: space-around;
		margin: 0 auto;
		max-width: 1000px;
		user-select: none;
		width: 100%;
	}

	.tab-btn {
		color: #A9A9A9;
		cursor: pointer;
		display: block;
		height: 100%;
		line-height: 1.3;
		margin-right: 3px;
		padding: 12px 20px;
		text-decoration: none;

		&.router-link-active,
		&:hover {
			background-color: rgb(39, 39, 39);
		}

		&.router-link-active {
			cursor: default;
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
