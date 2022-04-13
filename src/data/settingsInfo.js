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
		description: 'Reaper (Hover)',
		hoverInfo: 'Show Reaper\'s sprite when hovering wallpaper',
	},
	wallpaper_showReaperAlways: {
		type: 'checkbox',
		description: 'Reaper (Always)',
		hoverInfo: 'Always show Reaper\'s sprite when hovering wallpaper',
	},
	wallpaper_useDoubleSizedTiles: {
		type: 'checkbox',
		description: '2x Tile Size',
		hoverInfo: 'Makes tiles larger, so they match the preview',
	},

}
