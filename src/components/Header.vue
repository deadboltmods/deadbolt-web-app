<template>
	<header>
		<HeaderMenu/>
	</header>
</template>

<script>
	import HeaderMenu from '@/components/HeaderMenu'

	export default {
		name: 'Header',
		components: {
			HeaderMenu,
		},
	}
</script>

<style lang="scss" scoped>
	header {
		align-items: center;
		background-color: #161819;
		box-shadow: #111213 0px 5px 5px;
		display: flex;
		flex-wrap: wrap;
		padding: 0 20px;
		position: sticky;
		top: 0;
		z-index: 2;

		@media (max-width: 960px) {
			padding: 0;
		}
	}
</style>
