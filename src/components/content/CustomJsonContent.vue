<template>
	<div class="intro-content centered-content">
		<p>Use this app to create a <span class="color-purple">custom.json</span> file.</p>

		<p>
			Put the file in your <span class="color-teal">Levels</span> folder<br>
			to play as NPCs and start with custom weapons.
		</p>
		<p>To publish, upload the file with your level inside a ZIP.</p>
	</div>
</template>

<script>
	export default {
		name: 'CustomJsonContent'
	}
</script>

<style lang="scss" scoped>
	.intro-content {
		text-align: center;
		margin: 40px auto 40px;

		p {
			font-size: 1.4rem;
			margin-bottom: 20px;
		}
	}
</style>
