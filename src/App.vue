<template>
	<div id="app" class="pixelart">
		<Header/>
		<router-view/>
	</div>
</template>

<script>
import Header from '@/components/Header'

export default {
	name: 'App',
	components: {
		Header,
	},

	// https://vue-meta.nuxtjs.org/guide/metainfo.html
	// https://vue-meta.nuxtjs.org/api/#titletemplate
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'DCP + DECP',
      // all titles will be injected into this template
      titleTemplate: '%s | DEADBOLT Mods'
    }
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
