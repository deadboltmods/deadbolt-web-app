<template>
	<div>
		<section class="util-mb-l">
			<p>Deadbolt Community Patch (DCP) is a massive update to the codebase of <a target="_blank" href="https://store.steampowered.com/app/394970/DEADBOLT/">DEADBOLT</a>, a 2016 game by Hopoo, the developers behind Risk of Rain.</p>
			<p class="color-r">DCP is currently in alpha. Some features are WIP. Expect bugs.</p>
		</section>

		<section class="flex-container-center">
			<div class="cta-section">
				<h2>Download {{version}}</h2>

				<div class="download">
					<p><a target="_blank" :href="downloadUrl">DCP ALPHA {{version}} (.zip)</a></p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'DCPContent',
		data() {
			return {
				version: '1.6.0',
				domainBase: 'https://files.codemuffin.com/deadbolt'
			}
		},
		computed: {
			downloadUrl()
			{
				return `${this.domainBase}/dcp/DCP_ALPHA_${this.version}.zip`;
			},
		}
	}
</script>
