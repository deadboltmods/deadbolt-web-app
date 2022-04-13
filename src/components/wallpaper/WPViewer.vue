<template>
	<div>
		<div class="wallpapers">

			<div class="wallpaper" v-for="vwpNum in wallpapersCount" :key="'vwpNum' + vwpNum">
				<div class="wallpaper__frames">
					<div class="wallpaper__frame" v-for="( frameNum, frameIndex ) in framesOrder" :key="'frameIndex_Normal' + frameIndex" :style="'background-image: url(\'' + wallpaperImgPath( vwpNum, frameNum ) + '\')'">
					</div>
				</div>

				<div class="wallpaper__frames">
					<div class="wallpaper__frame" v-for="( frameNum, frameIndex ) in framesOrder" :key="'frameIndex_Front' + frameIndex" :style="'background-image: url(\'' + wallpaperImgPath( vwpNum, frameNum, true ) + '\')'">
					</div>
				</div>

				<div class="reaper-abs">
					<img :src="require( '@/assets/images/wallpaper/characters/sPIdle_0.png' )">
				</div>
			</div>

		</div>
	</div>
</template>


<script>
	export default {
		name: 'WPViewer',
		data() {
			return {
				// wallpapersCount: 16, // Vanilla
				wallpapersCount: 27, // DCP
				framesCount: 3,
				framesOrder: [ 0,1,1,1,2 ],
			}
		},
		methods: {
			wallpaperImgPath( spriteNum, frameNum, isFront = false )
			{
				const frontStr = ( isFront ) ? 'Front' : '';

				// return require( `@/assets/images/wallpaper/vanilla/sWallpaper1_0.png` );
				return require( `@/assets/images/wallpaper/vanilla/sWallpaper${frontStr}${spriteNum}_${frameNum}.png` );
			},
		},
	}
</script>


<style lang="scss" scoped>

	$scale:       3;
	$tile_size:   16px * $scale;
	$block_width: 4;

	// Viewer
	// ============================================================================

	.wallpapers {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.wallpaper {
		display: flex;
		flex-shrink: 0;
		position: relative;
		margin-bottom: 20px;

		&__frames {
			width: $block_width * $tile_size;
		}

		&__frame {
			background-size: $tile_size $tile_size;
			width: $tile_size * $block_width;
			height: $tile_size;
		}

		&:hover {
			.reaper-abs {
				opacity: 1;
			}
		}
	}

	// Characters
	// ============================================================================

	.reaper-abs {
		position: absolute;
		bottom: 0;
		left: 32px;
		opacity: 0;
		transition: 0.3s;

		img {
			display: block;
			height: 33px * $scale;
			width: 13px * $scale;
			margin-bottom: 0;
		}
	}
</style>
