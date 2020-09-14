<template>
	<div class="settings-view">
		<section v-for="(settingGroup, settingGroupKey) in settings" :key="settingGroupKey" class="setting-group font-sans">
			<h2 class="setting-group-heading">{{ settingGroupKey }}</h2>
			<section v-for="setting in settingGroup" :key="setting" class="setting font-sans">
				<label>
					<div v-if="getSettingInfo( setting, 'type' ) === 'checkbox'">
						<input type="checkbox" id="checkbox" @change="setCheckboxSetting( setting, $event )" :checked="getSetting( setting )">
						{{ getSettingInfo( setting, 'description' ) }}
					</div>
				</label>
			</section>
		</section>
	</div>
</template>

<script>
	import settingsInfo from '@/data/settingsInfo.js'

	export default {
		name: 'Settings',
		props: {
			settings: {
				type: Object,
				required: true
			},
		},
		methods: {
			getSetting( key )
			{
				return this.$store.getters.getSetting( key );
			},
			getSettingInfo( setting, dataKey )
			{
				return settingsInfo?.[setting]?.[dataKey];
			},
			setCheckboxSetting( key, e )
			{
				this.$store.commit( 'setSetting', { key, val: e.target.checked } );
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import '../assets/scss/_variables.scss';

	.setting {
		max-width: 600px;
		margin: 0 auto 5px;
		color: #ccc;

		&:hover {
			color: #A9A9A9;
		}
	}

	label {
		font-size: 1.4rem;
		user-select: none;
	}

	input[type="checkbox"] {
		cursor: pointer;
		height: 17px;
		margin-right: 5px;
		margin: 0 5px 0 0;
		position: relative;
		top: 3px;
		width: 17px;

		&:before {
			background-color: #354052;
			// background-color: darken($color-r, 20);
			bottom: 0;
			color: #a0abbf;
			content: '';
			font-size: 17px;
			height: 100%;
			left: 0;
			position: absolute;
			right: 0;
			top: 0;
			width: 100%;
		}

		&:checked:before {
			content: '';
			background-color: darken($color-g, 20);
		}
	}

	.setting-group {
		margin-bottom: 20px;
	}

	.setting-group-heading {
		margin-bottom: 10px;
		color: #999;
	}
</style>
