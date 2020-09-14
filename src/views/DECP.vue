<template>
	<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar';
	import DECPContent from '@/components/content/DECPContent'
	import MDInstall from '@/markdown/decp/decp-install.md'
	import MDRelease1 from '@/markdown/decp/decp-release-v1.md'
	import MDRelease2 from '@/markdown/decp/decp-release-v2.md'
	import MDRelease3 from '@/markdown/decp/decp-release-v3.md'
	import MDRelease3P from '@/markdown/decp/decp-release-v3-preview.md'

	export default {
		name: 'DECP',
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [
					{
						name: 'DECP',
						anchor: 'DECPContent',
						component: DECPContent,
						groupKey: 'main',
					},
					{
						name: 'Installation',
						anchor: 'MDInstall',
						component: MDInstall,
						groupKey: 'main',
					},
					{
						name: '3.0.0',
						anchor: 'MDRelease3',
						component: MDRelease3,
						groupKey: 'changelog',
					},
					{
						name: '3.0.0-preview',
						anchor: 'MDRelease3P',
						component: MDRelease3P,
						groupKey: 'changelog',
					},
					{
						name: '2.0.0',
						anchor: 'MDRelease2',
						component: MDRelease2,
						groupKey: 'changelog',
					},
					{
						name: '1.0.0',
						anchor: 'MDRelease1',
						component: MDRelease1,
						groupKey: 'changelog',
					},
				],
				groupKeys: {
					main: 'Main',
					changelog: 'Changelog'
				}
			}
		},
		computed: {
			contentGroups()
			{
				const groups = {};

				this.sections.forEach( item =>
				{
					// Add group key to groups
					if ( !groups?.[item.groupKey] )
					{
						groups[item.groupKey] = [];
					}

					// Add item to keyed group
					groups[item.groupKey].push( item );
				});

				return groups;
			},
		},
	}
</script>
