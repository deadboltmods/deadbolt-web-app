<template>
	<div>
		<div class="panels">
			<div class="panels__panel panels__panel-left">
				<h2 class="text-center">Tiles</h2>
				<div class="picker-tiles">
					<div class="picker-tile"
						v-for="( tileNum, tileIndex ) in tilesCount"
						:key="'tileIndex' + tileIndex"
						:style="getTilePickerOuterStyles()"
						@click="setTile( tileIndex )"
						v-on:mouseover="setTileIfShiftHeld( $event, tileIndex )"
						>

						<!-- separate, so we can apply BG and filter without conflicts -->
						<div class="picker-tile__inner" :style="getTilePickerInnerStyles( tileIndex )" :class="( useDoubleSizedTiles ? 'picker-tile__inner--double-size' : '' )">
						</div>
					</div>
				</div>
				<div class="helptext text-center">
					CLICK / SHIFT + HOVER: Update the tile
				</div>
			</div>

			<div class="panels__panel panels__panel-middle">
				<h2 class="text-center">Preview</h2>
				<div class="builder__preview" :style="'background-color: ' + colorsBG.hex">
					<div class="builder__tile" :style="getTileBackgroundStyleAttr( currentTile )"></div>

					<div class="reaper-abs" v-if="(showReaperOnHover || showReaperAlways)" :class="( showReaperAlways ? 'reaper-abs--always' : 'reaper-abs--on-hover' )">
						<img :src="require( '@/assets/images/wallpaper/characters/sPIdle_0.png' )">
					</div>
				</div>

				<div class="controls">
					<div class="form-row">
						<label id="input-tilenum">Tile Number (0 - 239)</label>
						<input v-model.number="currentTile" type="number" min="0" :max="tilesCount-1" id="input-tilenum">
						<!-- <div class="helptext">UP/DOWN</div> -->
					</div>

					<div class="form-row">
						<label for="input-hexbg">Hex: Background</label>
						<input v-model="colorsBG.hex" id="input-hexbg" @input="forceUpdatePicker()">
					</div>

					<div class="form-row">
						<label for="input-hexfg">Hex: Foreground</label>
						<input v-model="colorsFG.hex" id="input-hexfg" @input="forceUpdatePicker()">
					</div>

					<div class="form-row">
						<label>Swap Colors</label>
						<button type="button" @click="swapColors()">Swap BG/Foreground</button>
					</div>

					<div class="form-row">
						<label>Update Palettes</label>
						<button type="button" @click="addSwatches()">Add to Swatches</button>
					</div>
				</div>
			</div>

			<div class="panels__panel panels__panel-right">
				<div class="cpicker">
					<div class="cpicker__col">
						<h2 class="text-center">BG</h2>
						<sketch-picker-back v-model="colorsBG" :preset-colors="paletteBG" />
						<slider-picker-back v-model="colorsBG" @input="updateCSSFilter()" />
					</div>
					<div class="cpicker__col">
						<h2 class="text-center">Foreground</h2>
						<sketch-picker-front v-model="colorsFG" :preset-colors="paletteFG" @input="updateCSSFilter()" />
						<slider-picker-front v-model="colorsFG" @input="updateCSSFilter()" />
					</div>
				</div>
			</div>
		</div>

		<div>
			{{ defaultColors() }}
		</div>

	</div>
</template>


<script>
	import hexToCssFilter from '@/mixins/hexToCssFilter.js'; // https://codepen.io/sosuke/pen/Pjoqqp
	import { Sketch, Slider } from 'vue-color' // https://github.com/xiaokaike/vue-color + http://vue-color.surge.sh/
	import material from 'material-colors'

	export default {
		name: 'WPBuilder',
		components: {
			'sketch-picker-front': Sketch,
			'sketch-picker-back':  Sketch,

			'slider-picker-front': Slider,
			'slider-picker-back':  Slider,
		},

		mounted()
		{
			console.log(this.defaultColors());

			const flatDefaultColors = this.defaultColors().flat();

			console.log(flatDefaultColors);

			this.paletteBG.push( ...flatDefaultColors );
			this.paletteFG.push( ...flatDefaultColors );
		},

		computed: {
			showReaperOnHover()
			{
				return this.$store.getters.getSetting( 'wallpaper_showReaperOnHover' );
			},
			showReaperAlways()
			{
				return this.$store.getters.getSetting( 'wallpaper_showReaperAlways' );
			},
			useDoubleSizedTiles()
			{
				return this.$store.getters.getSetting( 'wallpaper_useDoubleSizedTiles' );
			},

			showTileBG()
			{
				return this.$store.getters.getSetting( 'wallpaper_showTileBG' );
			},
			showTileFG()
			{
				return this.$store.getters.getSetting( 'wallpaper_showTileFG' );
			},
		},

		data() {
			return {
				tilesCount: 240, // note: they're named from 0-239 (eg. "tile000.png")

				// Dynamic
				currentTile: 0,
				currentCSSFilter: '',

				colorsBG: {
					hex: '#194d33',
				},
				colorsFG: {
					hex: '#06180f',
				},

				// preset-colors
				// @TODO: Button to add to palette
				paletteBG: [
					// Vanilla (8*2)
					'#4A5243', '#546678', '#525245', '#56473F', '#5A5A65', '#67594B', '#131317', '#4F3B35',
					'#45454A', '#A1A1A1', '#66574D', '#8C8A7E', '#737451', '#3F4349', '#321D1D', '#55523E',

					// Black/White/Greys
					'#000000', '#FFFFFF', '#303030', '#484848', '#606060', '#787878', '#909090', '#A8A8A8',

					// Custom (DB Palette)
					'#603030', '#783030', '#481818', '#601818', '#781818', '#901818', '#A81818', '#F03030', // DB Red
					'#181800', '#303000', '#484800', '#789030', '#607830', '#486018', '#486030', '#304818', // DB Green



					// Custom
					// '#4C3560', // Purple
					// '#194d33', // Green (dark)
				],

				paletteFG: [
					// Vanilla
					'#606552', '#63738F', '#616052', '#6C5C4D', '#706978', '#776757', '#18181D', '#62423C',
					'#525257', '#B1B1B1', '#78665A', '#959386', '#83845D', '#4D5259', '#392620', '#6B674E',

					// Black/White/Greys
					'#000000', '#FFFFFF', '#303030', '#484848', '#606060', '#787878', '#909090', '#A8A8A8',

					// Custom
					// '#59416E', // Purple
					// '#06180f', // Green (dark)
				],



				// via:
				// https://github.com/xiaokaike/vue-color/blob/master/src/components/Swatches.vue

				colorMap: [
					'red',
					'pink',
					'purple',
					'deepPurple',
					'indigo',
					'blue',
					'lightBlue',
					'cyan',
					'teal',
					'green',
					'lightGreen',
					'lime',
					'yellow',
					'amber',
					'orange',
					'deepOrange',
					'brown',
					'blueGrey',
					'grey'
					// 'black'
				],

				// colorLevel: ['900', '700', '500', '300', '100'],
				colorLevel: ['900', '800', '700', '600', '500', '400', '300', '100'],



			}
		},
		methods: {

			defaultColors()
			{
				var colors = [];

				this.colorMap.forEach((type) => {
					var typeColor = [];

					if (type.toLowerCase() === 'black' || type.toLowerCase() === 'white')
					{
						typeColor = typeColor.concat(['#000000', '#FFFFFF'])
					}
					else
					{
						this.colorLevel.forEach((level) => {
							const color = material[type][level]
							typeColor.push(color.toUpperCase())
						});
					}

					colors.push(typeColor);
				});

				return colors;
			},

			// Update Values
			// ------------------------------------------------------------------------

			setTile( tileIndex = 0 )
			{
				this.currentTile = tileIndex;
			},

			setTileIfShiftHeld( $event, tileIndex )
			{
				if ( $event.shiftKey )
				{
					this.setTile( tileIndex );
				}
			},

			updateCSSFilter()
			{
				this.currentCSSFilter = this.getTileCSSFilter();
			},

			swapColors()
			{
				const currHexBG = this.colorsBG.hex;
				const currHexFG = this.colorsFG.hex;

				this.colorsBG.hex = currHexFG;
				this.colorsFG.hex = currHexBG;

				this.forceUpdatePicker();
			},

			forceUpdatePicker()
			{
				this.colorsBG = { hex: this.colorsBG.hex };
				this.colorsFG = { hex: this.colorsFG.hex };

				this.updateCSSFilter();
			},

			addSwatches()
			{
				this.paletteBG.push( this.colorsBG.hex );
				this.paletteFG.push( this.colorsFG.hex );
			},


			// Get Values
			// ------------------------------------------------------------------------

			getTilePaddedNumber( tileIndex = 0 )
			{
				return String( tileIndex ).padStart( 3, '0' );
			},

			getTileImgFile( tileIndex = 0 )
			{
				const tileIndexP = this.getTilePaddedNumber( tileIndex );
				const tileImage  = require( `@/assets/images/wallpaper/tiles-white/tile${tileIndexP}.png` );

				return tileImage;
			},

			getTileBackgroundStyleAttr( tileIndex = this.currentTile )
			{
				const bgStyle     = this.getTileCssBackgroundImage( tileIndex );
				const filterStyle = this.getTileCSSFilter();

				return bgStyle + '; ' + filterStyle;
			},

			getTilePickerOuterStyles()
			{
				return ( this.showTileBG ) ? this.getTileCSSBackgroundColor() : 'background-color: rgba(255,255,255, 1)';
			},

			getTilePickerInnerStyles( tileIndex = this.currentTile )
			{
				const bgStyle     = this.getTileCssBackgroundImage( tileIndex );
				const filterStyle = ( this.showTileFG ) ? this.getCachedTileCSSFilter() : this.getWhiteToBlackCssFilter( true );

				return bgStyle + '; ' + filterStyle;
			},


			// Get CSS
			// ------------------------------------------------------------------------

			getTileCssBackgroundImage( tileIndex = this.currentTile )
			{
				const bgImg   = this.getTileImgFile( tileIndex );
				const bgStyle = `background-image: url( '${bgImg}' )`;

				return bgStyle;
			},

			getTileCSSBackgroundColor()
			{
				return `background-color: ${this.colorsBG.hex}`;
			},

			getWhiteToBlackCssFilter( addPrefix = false )
			{
				const prefix = ( addPrefix ) ? 'filter: ' : '';

				return prefix + 'brightness(0) saturate(100%)';
			},

			getTileCSSFilter()
			{
				// this.colorsBG.hex
				// this.colorsFG.hex

				let filterStyle = hexToCssFilter( this.colorsFG.hex );

				// Remove "filter: " from the hextocss ƒ (we could do this in
				// HexToCssFilter.js but I want to keep that as close to the
				// original as possible)
				filterStyle = filterStyle.replace( 'filter: ', '' );

				// Convert white sprites to black.
				// We're using white sprites because that's how GameMaker uses
				// them (for using `alpha_blend`)
				// const filterWhiteToBlack = 'brightness(0) saturate(100%)';
				const filterWhiteToBlack = this.getWhiteToBlackCssFilter();

				// Re-add the "filter:" part
				filterStyle = 'filter: ' + filterWhiteToBlack + ' ' + filterStyle;

				return filterStyle;
			},

			getCachedTileCSSFilter()
			{
				return this.currentCSSFilter;
			},
		},
	}
</script>


<style lang="scss" scoped>

	$scale:       3;
	$tile_size:   16px * $scale;
	$block_width: 4;

	$ptile_size: 16px * 2;
	$ptile_gap:  2px;
	$ptile_cols: 12;


	// Tiles Picker
	// ============================================================================

	.picker-tiles {
		display: flex;
		flex-wrap: wrap;
		//@todo: css-grid
		max-width: $ptile_cols * ( $ptile_size + $ptile_gap );
	}

	.picker-tile {
		height: $ptile_size;
		width: $ptile_size;
		margin-right: $ptile_gap;
		margin-bottom: $ptile_gap;
		cursor: pointer;

		&:hover {
			box-shadow: 0 0 0 2px yellow;
		}

		&__inner {
			height: 100%;
			width: 100%;

			&--double-size {
				background-size: $ptile_size $ptile_size;
			}
		}
	}


	// Builder
	// ============================================================================

	.panels {
		margin-bottom: 50px;
		display: flex;
		// justify-content: space-between;

		&__panel {
			&:not(:last-child) {
				margin-right: 20px;
			}
		}
	}

	.builder {
		margin-bottom: 50px;
		display: flex;

		&__preview {
			width: 24 * 16px;
			height: 15 * 16px;
			position: relative;
			margin-bottom: 20px;
			margin-right: 40px;

			&:hover {
				.reaper-abs--on-hover {
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

	.controls {
		margin-bottom: 20px;

		input {
			background-color: rgba(#fff, 0.03);
			border: 1px solid rgba(#fff, 0.2);
			color: #fff;
			padding: 5px;
		}

		button {
			background: rgba(#fff, 0.2);
			border: 1px solid rgba(#fff, 0.2);
			color: #fff;
			cursor: pointer;
			padding: 5px 10px;

			&:hover {
				background: rgba(#fff, 0.3);
			}
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

	.cpicker {
		display: flex;

		&__col {
			margin-right: 15px;
			max-width: 220px; // width of Sketch picker
		}

		h2 {
			text-align: center;
		}
	}


	// Character Sprites
	// ============================================================================

	.reaper-abs {
		position: absolute;
		bottom: 0;
		left: 32px;
		opacity: 0;
		transition: 0.3s;

		&--always {
			opacity: 1;
		}

		img {
			display: block;
			height: 33px * $scale;
			width: 13px * $scale;
			margin-bottom: 0;
		}
	}


	// Misc
	// ============================================================================

	.helptext {
		font-size: 16px;
	}


	// Color Picker (Component)
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

	.vc-slider {
		margin-top: 20px;
		max-width: 100%;
	}

</style>
