<template>
	<div>
		<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
	</div>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar';
	// HTML content
	import DCPContent from '@/components/content/DCPContent'
	// Markdown
	import MDFeatures from '@/markdown/dcp/dcp-features.md'
	import MDChangelog1 from '@/markdown/dcp/dcp-changelog-1.md'
	import MD200 from '@/markdown/dcp/changelog/dcp-changelog-2.0.0.md'
	import MD201 from '@/markdown/dcp/changelog/dcp-changelog-2.0.1.md'
	import MD210 from '@/markdown/dcp/changelog/dcp-changelog-2.1.0.md'
	import MD220 from '@/markdown/dcp/changelog/dcp-changelog-2.2.0.md'
	import MD300 from '@/markdown/dcp/changelog/dcp-changelog-3.0.0.md'

	import MDSetupCustomLevels from '@/markdown/dcp/setup/dcp-setup-custom-levels.md'
	import MDSetupCustomSprites from '@/markdown/dcp/setup/dcp-setup-custom-sprites.md'
	import MDSetupInstall from '@/markdown/dcp/setup/dcp-setup-install.md'
	import MDSetupSaving from '@/markdown/dcp/setup/dcp-setup-saving.md'

	export default {
		name: 'About',
		components: {
			ContentWithSidebar
		},
		data() {
			return {
				sections: [
					{
						name: 'DCP',
						anchor: 'dcp',
						component: DCPContent,
						groupKey: 'intro',
						intro: 'Deadbolt Community Patch'
					},
					{
						name: 'Features',
						anchor: 'features',
						component: MDFeatures,
						groupKey: 'intro'
					},

					// Setup
					{
						name: 'Setup',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Install',
						anchor: 'install',
						component: MDSetupInstall,
						groupKey: 'setup'
					},
					{
						name: 'Saving',
						anchor: 'saving',
						component: MDSetupSaving,
						groupKey: 'setup'
					},
					{
						name: 'Levels',
						anchor: 'customlevels',
						component: MDSetupCustomLevels,
						groupKey: 'setup'
					},
					{
						name: 'Sprites',
						anchor: 'customsprites',
						component: MDSetupCustomSprites,
						groupKey: 'setup'
					},

					// Changelog
					{
						name: 'Changelog',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: '3.0.0',
						anchor: 'v300',
						component: MD300,
						groupKey: 'changelog',
					},
					{
						name: '2.2.0',
						anchor: 'v220',
						component: MD220,
						groupKey: 'changelog',
					},
					{
						name: '2.1.0',
						anchor: 'v210',
						component: MD210,
						groupKey: 'changelog',
					},
					{
						name: '2.0.1',
						anchor: 'v201',
						component: MD201,
						groupKey: 'changelog',
					},
					{
						name: '2.0.0',
						anchor: 'v200',
						component: MD200,
						groupKey: 'changelog',
					},
					{
						name: '1.0.0+',
						anchor: 'version1plus',
						component: MDChangelog1,
						groupKey: 'changelog',
					},
				],
				groupKeys: {
					intro: 'Intro',
					settings: 'Setting Tables',
					changelog: 'Changelog',
					setup: 'Setup'
				},
			}
		}
	}
</script>
