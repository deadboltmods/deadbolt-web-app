<template>
	<div class="search-widget">
		<label>Search:</label>
		<input value="@TODO">
	</div>
</template>

<style lang="scss" scoped>
	@import '@/assets/scss/_variables.scss';

	.search-widget {
		label {
			margin-bottom: 5px;
			display: block;
		}

		input {
			max-width: 100%;
			width: 100%;
			padding: 10px;
			font-size: 16px;
			background-color: $color-bl;
			color: $color-w;
			font-family: $font-mono-text;
		}
	}
</style>
