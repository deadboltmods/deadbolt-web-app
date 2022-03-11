<template>
	<div>
		<div class="text-center text-narrow">
			<p>Tilesets extracted from both the main game, and the demo.</p>
			<p>Using tilesets is one way to use sprites in GameMaker, Deadbolt's engine.</p>
			<p>However, Hopoo decided to add support for a level editor early on.
				<br>This made tilesets redundant, as sprites would be added
				<br>based on the objects in the level instead.</p>
		</div>

		<br>

		<div class="wideout md-image-hover">
			<img src="https://files.codemuffin.com/deadbolt/cdn/assets/images/resources/tilesets/bGraffiti-crop.png" alt="bGraffiti" width="494">
			<div class="md-image-caption">Graffiti from the demo</div>
		</div>

		<div class="wideout md-image-hover">
			<img src="https://files.codemuffin.com/deadbolt/cdn/assets/images/resources/tilesets/bTileApt16-crop.png" alt="bTileApt16" width="638">
			<div class="md-image-caption">
				A tileset showing some unused sprites, including a grey wall and a fan.
				<br>The segmented grey thing is a garage door, which is related to the unused
				<br>object <code>oLightfixtureGarage</code> (which is broken in vanilla)</div>
		</div>

		<div class="wideout md-image-hover">
			<img src="https://files.codemuffin.com/deadbolt/cdn/assets/images/resources/tilesets/bTileCrack16-crop.png" alt="bTileCrack16" width="392">
			<div class="md-image-caption">Grotty furniture and dirty walls</div>
		</div>

		<div class="wideout md-image-hover">
			<img src="https://files.codemuffin.com/deadbolt/cdn/assets/images/resources/tilesets/bTileOutside-crop.png" alt="bTileOutside" width="480">
			<div class="md-image-caption">Unused tiles for an exterior environment</div>
		</div>
	</div>
</template>


<script>
	// import getCdnUrl from '@/mixins/getCdnUrl'

	export default {
		name: 'CutTilesets',
		data() {
			return {
				// getCdnUrl,
			}
		}
	}
</script>


<style scoped lang="scss">
	//
</style>
