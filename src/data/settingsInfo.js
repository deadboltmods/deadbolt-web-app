// Only type=checkbox is currently supported (see: src/components/Settings.vue)

export default {

	// Level Config
	showExtraData: {
		type: 'checkbox',
		description: 'Extra data',
		hoverInfo: 'Show extra data for characters and weapons',
	},
	showUnplayableCharacters: {
		type: 'checkbox',
		description: 'Unplayable',
		hoverInfo: 'Show characters who aren\'t functionally playable',
	},
	showWeaponStats: {
		type: 'checkbox',
		description: 'Stats',
		hoverInfo: 'Show detailed stats for each weapon',
	},
	showWeaponDescriptions: {
		type: 'checkbox',
		description: 'Descriptions',
		hoverInfo: 'Show descriptions below each weapon',
	},

	// Deprecated (still available for use tho)
	showUnusableWeapons: {
		type: 'checkbox',
		description: 'Unusable',
	},

	// Calculator
	showCalculatorWarnings: {
		type: 'checkbox',
		description: 'Warnings',
		hoverInfo: 'Show warning text when your scores exceed the maximum counted values',
	},
	showCalculatorDebug: {
		type: 'checkbox',
		description: 'Debug Info',
		hoverInfo: 'Show extra debug info',
	},

	// Wallpaper Builder
	wallpaper_showReaperOnHover: {
		type: 'checkbox',
		description: 'Hover',
		hoverInfo: 'Show Reaper\'s sprite when hovering wallpaper',
	},
	wallpaper_showReaperAlways: {
		type: 'checkbox',
		description: 'Always',
		hoverInfo: 'Always show Reaper\'s sprite when hovering wallpaper',
	},
	wallpaper_useDoubleSizedTiles: {
		type: 'checkbox',
		description: '2x Size',
		hoverInfo: 'Makes tiles larger, so they match the preview',
	},
	wallpaper_showTileBG: {
		type: 'checkbox',
		description: 'Use BG',
		hoverInfo: 'Apply the background color to the tiles on the left',
	},
	wallpaper_showTileFG: {
		type: 'checkbox',
		description: 'Use Foreground',
		hoverInfo: 'Apply the foreground color to the tiles on the left',
	},

}
