import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		current: {
			characterId: 'P',
			primaryWeapon: 0,
			secondaryWeapon: 4,
		},
		settings: {
			// Level Config (config.json)
			showExtraData: false,
			showUnplayableCharacters: false,
			showWeaponStats: true,
			showWeaponDescriptions: true,
			showUnusableWeapons: false,

			// Calculator
			showCalculatorWarnings: true,
			showCalculatorDebug: false,

			// Wallpaper
			wallpaper_showReaperOnHover: true,
			wallpaper_showReaperAlways: false,
			wallpaper_useDoubleSizedTiles: false,
			wallpaper_showTileBG: true,
			wallpaper_showTileFG: true,

			// Site
			site_showWIP: false,
		},
	},
	getters: {
		getCharacterId( state )
		{
			return state.current.characterId;
		},
		getPrimaryWeapon( state )
		{
			return state.current.primaryWeapon;
		},
		getSecondaryWeapon( state )
		{
			return state.current.secondaryWeapon;
		},
		// Settings
		getSetting: ( state ) => key => {
			return state.settings?.[key];
		},
	},
	mutations: {
		setCharacterId( state, characterId )
		{
			state.current.characterId = characterId;
		},
		setPrimaryWeapon( state, wpnIndex )
		{
			state.current.primaryWeapon = wpnIndex;
		},
		setSecondaryWeapon( state, wpnIndex )
		{
			state.current.secondaryWeapon = wpnIndex;
		},
		// Settings
		setSetting( state, payload )
		{
			state.settings[payload.key] = payload.val;
		}
	},
	actions: {},
	modules: {}
})
