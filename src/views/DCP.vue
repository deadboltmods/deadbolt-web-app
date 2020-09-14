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
	import MDUsage from '@/markdown/guides/dcp-usage.md'
	import MDFeatures from '@/markdown/dcp/dcp-features.md'
	import MDChangelog1 from '@/markdown/dcp/dcp-changelog-1.md'
	import MDChangelog2 from '@/markdown/dcp/dcp-changelog-2.md'


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

					},
					{
						name: 'Features',
						anchor: 'features',
						component: MDFeatures,
						groupKey: 'intro'
					},
					{
						name: 'Setup',
						anchor: 'setup',
						component: MDUsage,
						groupKey: 'intro'
					},

					// Changelog
					{
						name: '2.0.0+',
						anchor: 'version2plus',
						component: MDChangelog2,
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
					changelog: 'Changelog'
				},
			}
		}
	}
</script>
