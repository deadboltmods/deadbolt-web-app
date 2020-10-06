<template>
	<div>
		<Table :rows="rows" :columns="columns" />
	</div>
</template>

<script>
	import Table from '@/components/Table.vue'

	export default {
		name: 'SettingsDECP',
		components: {
			Table
		},
		data() {
			return {
				columns: {
					col1: 'Group',
					col2: 'Name',
					col3: 'Default',
					col4: 'Description',
				},
				rows: [
					{
						col1: 'UI',
						col2: 'bg_rgb_r',
						col3: '37',
						col4: 'Background colour: RGB "r" colour value',
						modileHideCol1: false,
					},
					{
						col1: 'UI',
						col2: 'bg_rgb_g',
						col3: '37',
						col4: 'Background colour: RGB "g" colour value',
						modileHideCol1: true,
					},
					{
						col1: 'UI',
						col2: 'bg_rgb_b',
						col3: '37',
						col4: 'Background colour: RGB "b" colour value',
						modileHideCol1: true,
					},
					{
						col1: 'UI',
						col2: 'textalign_controls',
						col3: 'left',
						col4: 'Text alignment for the top-right help text. Options are: left / right',
						modileHideCol1: true,
					},
					{
						col1: 'UI',
						col2: 'visible_build_info',
						col3: '1',
						col4: 'Display the current build version',
						modileHideCol1: true,
					},
					{
						col1: 'UI',
						col2: 'visible_controls',
						col3: '1',
						col4: 'Display controls',
						modileHideCol1: true,
					},
					{
						col1: 'UI',
						col2: 'visible_object_hovertext',
						col3: '1',
						col4: 'Display hovertext. Required for all the hovewrtext settings below',
						modileHideCol1: true,
					},
					{
						col1: 'UI',
						col2: 'visible_object_axis',
						col3: '1',
						col4: 'Display the x/y axis (red/green for x/y)',
						modileHideCol1: true,
					},
					{
						col1: 'UI',
						col2: 'visible_weapon_outline',
						col3: '1',
						col4: 'Display outlines on weapons. This makes themeasier to see',
						modileHideCol1: true,
					},
					{
						col1: 'Features',
						col2: 'remember_scrollbar_position',
						col3: '1',
						col4: 'Remember how far you scrolled down each tabbed object section (ie. wallpaper, house, music etc)',
						modileHideCol1: false,
					},
					{
						col1: 'Controls',
						col2: 'wasd_pan_increment',
						col3: '80',
						col4: 'How many pixels to move when using WASD',
						modileHideCol1: false,
					},
					{
						col1: 'Controls',
						col2: 'esc_quit',
						col3: '0',
						col4: 'Press ESC to immediately close the editor',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'object',
						col3: '1',
						col4: 'Hovertext: Show object name',
						modileHideCol1: false,
					},
					{
						col1: 'Hovertext',
						col2: 'object_id',
						col3: '0',
						col4: 'Hovertext: Show object index',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'sprite',
						col3: '0',
						col4: 'Hovertext: Show object\'s sprite name',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'sprite_id',
						col3: '0',
						col4: 'Show sprite index',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'parent',
						col3: '0',
						col4: 'Show parent object name',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'parent_id',
						col3: '0',
						col4: 'Show parent object index',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'frames',
						col3: '1',
						col4: 'Show current frame',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'depth',
						col3: '0',
						col4: 'Show depth (lower = closer, higher = deeper)',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'scale',
						col3: '1',
						col4: 'Show scale (x/y)',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'xy',
						col3: '0',
						col4: 'Show xy position',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'dimensions',
						col3: '0',
						col4: 'Show width + height',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'offset',
						col3: '0',
						col4: 'Show offset (probably not useful to general map makers)',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'bbox',
						col3: '0',
						col4: 'Show bounding box (also probably not useful)',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'special',
						col3: '1',
						col4: 'Show special properties (eg. stairwell direction, door open/closed)',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'weapon_var2',
						col3: '0',
						col4: 'Show weapon var2 details (most vanilla weapons use var2 for physics, instead of the correct var1)',
						modileHideCol1: true,
					},
					{
						col1: 'Hovertext',
						col2: 'pLogic_vars',
						col3: '0',
						col4: 'Show detailed variables for pLogic objects (timer, destroy, spawn, cutscene)',
						modileHideCol1: true,
					},
					{
						col1: 'Level',
						col2: 'default_room_width',
						col3: '1888',
						col4: 'Default room width',
						modileHideCol1: false,
					},
					{
						col1: 'Level',
						col2: 'default_room_height',
						col3: '992',
						col4: 'Default room height',
						modileHideCol1: false,
					},
					{
						col1: 'Debug',
						col2: 'sidebar_showbadobjects',
						col3: '0',
						col4: 'Enable to show objects that are known to cause crashes or break the game',
						modileHideCol1: false,
					},
					{
						col1: 'Debug',
						col2: 'save_ignorestairwarning',
						col3: '0',
						col4: 'Enable to ignore the safe stairwell check when saving',
						modileHideCol1: false,
					},
					{
						col1: 'Debug',
						col2: 'savestates_alwaysallowload',
						col3: '0',
						col4: 'Always allow save states',
						modileHideCol1: false,
					},
					{
						col1: 'Debug',
						col2: 'show_debuginfo',
						col3: '0',
						col4: 'Show debug info from the start',
						modileHideCol1: false,
					},
					{
						col1: 'Debug',
						col2: 'xyscale_initial',
						col3: '1',
						col4: 'Initial xyscale, must be equal or higher to 1',
						modileHideCol1: false,
					},
					{
						col1: 'Debug',
						col2: 'load_dontclearlevel',
						col3: '0',
						col4: 'Enable to keep the current level laoded when loading a new one. Can be used to make weird mashups',
						modileHideCol1: false,
					},
				],
			}
		}
	}
</script>
