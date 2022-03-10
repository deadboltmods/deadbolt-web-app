<template>
	<ContentWithSidebar :sections="sections" :groupKeys="groupKeys"/>
</template>

<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar';
	import DECPContent from '@/components/content/DECPContent'
	import MDInstall from '@/markdown/decp/decp-install.md'
	import MDCL100 from '@/markdown/decp/changelog/decp-changelog-1.0.0.md'
	import MDCL200 from '@/markdown/decp/changelog/decp-changelog-2.0.0.md'
	import MDCL300 from '@/markdown/decp/changelog/decp-changelog-3.0.0.md'
	import MDCL300P from '@/markdown/decp/changelog/decp-changelog-3.0.0-preview.md'
	import MDCL400 from '@/markdown/decp/changelog/decp-changelog-4.0.0.md'

	export default {
		name: 'DECP',
		title: 'DECP - Deadbolt Editor Community Patch',
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
						intro: 'Deadbolt Editor Community Patch'
					},
					{
						name: 'Installation',
						anchor: 'MDInstall',
						component: MDInstall,
						groupKey: 'main',
					},

					// Changelog
					{
						name: 'Changelog',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: '4.0.0',
						anchor: 'MDCL400',
						component: MDCL400,
						groupKey: 'changelog',
					},
					{
						name: '3.0.0',
						anchor: 'MDCL300',
						component: MDCL300,
						groupKey: 'changelog',
					},
					{
						name: '3.0.0-preview',
						anchor: 'MDCL300P',
						component: MDCL300P,
						groupKey: 'changelog',
					},
					{
						name: '2.0.0',
						anchor: 'MDCL200',
						component: MDCL200,
						groupKey: 'changelog',
					},
					{
						name: '1.0.0',
						anchor: 'MDCL100',
						component: MDCL100,
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
