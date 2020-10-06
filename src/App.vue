<template>
	<div id="app" class="pixelart">
		<Header/>
		<router-view/>
	</div>
</template>

<script>
import Header from '@/components/Header'

export default {
	components: {
		Header,
	},
}
</script>

<style lang="scss">
	@import './assets/css/reset.css';
	@import './assets/scss/_variables.scss';
	@import './assets/scss/shared.scss';

	#app {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		min-height: 100vh;
		position: relative;
	}
</style>
