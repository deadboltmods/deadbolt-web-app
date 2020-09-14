<template>
	<div>
		<section class="util-mb-l">
			<p>Deadbolt Editor Community Patch (DCP) is an updated version of the Deadbolt level editor, with fixes and new features. Feature details are in the changelog.</p>
		</section>

		<section class="flex-container-center util-mb-l">
			<div class="cta-section">
				<h2>Download {{ version }}</h2>

				<div class="download-double">
					<div class="download">
						<p>
							<a target="_blank" :href="steamUrl">Steam {{ version }}</a>
						</p>
					</div>
					<div class="download">
						<p>
							<a target="_blank" :href="standaloneUrl">Standalone {{ version }}</a>
						</p>
					</div>
				</div>
			</div>
		</section>

		<section>
			<h2>Steam or Standalone?</h2>
			<p>The Steam version must replace the installed vanilla level editor, and can upload to the workshop. This is the <span class="color-g">recommended version</span> for most users.</p>
			<p>The standalone version can be run from anywhere. It can't upload to the workshop, but it loads faster as it does not require Steam.</p>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'DECPContent',
		data() {
			return {
				version: '3.2.0',
				domainBase: 'https://files.codemuffin.com/deadbolt'
			}
		},
		computed: {
			steamUrl()
			{
				return `${this.domainBase}/decp/deadbolt_map_editor-Steam-${this.version}.zip`;
			},
			standaloneUrl()
			{
				return `${this.domainBase}/decp/deadbolt_map_editor-Standalone-${this.version}.zip`;
			},
		}
	}
</script>

