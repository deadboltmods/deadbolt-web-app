<template>
	<div>
		<div class="builder">
			<div class="builder__panel-left">
				<div class="builder__preview" :style="'background-color: ' + colorsBG.hex">
					<div class="builder__tile" :style="tileBackgroundStyleAttr()"></div>

					<div class="reaper-abs">
						<img :src="require( '@/assets/images/wallpaper/characters/sPIdle_0.png' )">
					</div>
				</div>

				<div class="builder__controls">
					<div class="form-row">
						<label>Tile Number (0 - 239)</label>
						<input v-model.number="currentTile" type="number" min="0" :max="tilesCount-1">
					</div>

					<div class="form-row">
						<label>Hex: Background</label>
						<input v-model="currentColorBack">
						<!-- <input v-model="colorsBG.hex"> -->
					</div>

					<div class="form-row">
						<label>Hex: Foreground</label>
						<input v-model="currentColorFront">
						<!-- <input v-model="colorsFG.hex"> -->
					</div>
				</div>
			</div>

			<div class="builder__panel-right">
				<div class="builder__cpicker">
					<div class="builder__cpicker-col">
						<h2>BACK</h2>
						<sketch-picker-back v-model="colorsBG" />
					</div>
					<div class="builder__cpicker-col">
						<h2>FRONT</h2>
						<sketch-picker-front v-model="colorsFG" />
					</div>
				</div>
			</div>
		</div>

		<div class="wallpapers">

			<div class="wallpaper" v-for="vwpNum in vanillaItemsCount" :key="'vwpNum' + vwpNum">
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
	import hexToCssFilter from '@/mixins/hexToCssFilter.js'; // https://codepen.io/sosuke/pen/Pjoqqp
	import { Sketch } from 'vue-color' // https://github.com/xiaokaike/vue-color + http://vue-color.surge.sh/

	export default {
		name: 'WBuilder',
		components: {
			'sketch-picker-front': Sketch,
			'sketch-picker-back': Sketch,
		},
		data() {
			return {
				// Wallpaper Viewer
				// vanillaItemsCount: 16, // Vanilla
				vanillaItemsCount: 27, // DCP
				framesCount: 3,
				framesOrder: [ 0,1,1,1,2 ],

				// Builder
				tilesCount: 240, // note: they're named from 0-239 (eg. "tile000.png")
				currentTile: 0,
				currentColorBack: '#272727', // background (eg #fff)
				currentColorFront: '#000',   // this colour affects the actual tile

				// colors: '#194d33',

				colorsBG: {
					hex: '#194d33',
					hex8: '#194D33A8',
					hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
					hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
					rgba: { r: 25, g: 77, b: 51, a: 1 },
					a: 1
				},

				colorsFG: {
					hex: '#06180f',
					hex8: '#06180fA8',
					hsl: { h: 150, s: 0.6, l: 0.6, a: 1 },
					hsv: { h: 150, s: 0.6, v: 0.6, a: 1 },
					rgba: { r: 6, g: 24, b: 15, a: 1 },
					a: 1
				}
			}
		},
		methods: {
			wallpaperImgPath( spriteNum, frameNum, isFront = false )
			{
				const frontStr = ( isFront ) ? 'Front' : '';

				// return require( `@/assets/images/wallpaper/vanilla/sWallpaper1_0.png` );
				return require( `@/assets/images/wallpaper/vanilla/sWallpaper${frontStr}${spriteNum}_${frameNum}.png` );
			},

			getTilePaddedNumber()
			{
				return String( this.currentTile ).padStart( 3, '0' );
			},

			tileBackgroundStyleAttr()
			{
				// colorsBG.hex
				// colorsFG.hex

				const img = require( `@/assets/images/wallpaper/tiles/tile${this.getTilePaddedNumber()}.png` );

				const bgStyle = `background-image: url( '${img}' )`;

				// const filterStyle = hexToCssFilter( this.currentColorFront );
				const filterStyle = hexToCssFilter( this.colorsFG.hex );
				// const filterStyle = '';

				// console.log('!!!');
				// console.log( { 'BG': this.currentColorBack, 'FG': this.currentColorFront } );

				return bgStyle + '; ' + filterStyle;
			}
		},
	}
</script>


<style lang="scss" scoped>

	$scale: 3;
	$tile_size: 16px * $scale;
	$block_width: 4.0;


	// Builder
	// ============================================================================

	.builder {
		margin-bottom: 50px;
		display: flex;

		&__controls {
			margin-bottom: 20px;

			input {
				background-color: rgba(#fff, 0.03);
				border: 1px solid #666;
				color: #fff;
				padding: 5px;
			}

			.form-row {
				display: flex;
				margin-bottom: 5px;

				&:last-child {
					margin-bottom: 0;
				}

				label {
					width: 180px;
				}
			}
		}

		&__cpicker {
			display: flex;
		}

		&__cpicker-col {
			margin-right: 15px;

			h2 {
				text-align: center;
			}
		}

		&__preview {
			width: 24 * 16px;
			height: 15 * 16px;
			position: relative;
			margin-bottom: 20px;
			margin-right: 40px;

			&:hover {
				.reaper-abs {
					opacity: 1;
				}
			}
		}

		&__tile {
			height: 100%;
			width: 100%;
			background-size: $tile_size $tile_size;
		}
	}


	// Color Picker
	// ============================================================================

    .vc-sketch {
		background-color: rgb(24, 26, 27);
		background-image: initial;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px
	}

	//@TODO: This doesn't work while scoped, need to move all these styles to global (?)
	.vc-hue-picker {
		box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 2px;
		background-image: initial;
		background-color: rgb(24, 26, 27);
	}


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
