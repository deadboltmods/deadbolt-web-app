<template>
	<div>
		<ContentWithSidebar
			:sections="sections"
			:groupKeys="groupKeys"
			:settings="settings"/>
	</div>
</template>
<script>
	import ContentWithSidebar from '@/components/ContentWithSidebar'
	import Calculator from '@/components/Calculator'
	import CalcIntro from '@/components/content/calculator/CalcIntro'
	import CalcFormula from '@/components/content/calculator/CalcFormula'
	import CalcNotesTips from '@/components/content/calculator/CalcNotesTips'
	import CalcNotesMisc from '@/components/content/calculator/CalcNotesMisc'
	import CalcParTimesTable from '@/components/content/calculator/CalcParTimesTable'

	export default {
		name: 'StarsCalc',
		title: 'Stars Calculator | Deadbolt Game Mods',
		components: {
			ContentWithSidebar,
		},
		data() {
			return {
				sections: [


					// Intro
					// --------------------------------------------------------

					{
						name: 'Stars Calculator',
						anchor: 'calc-intro',
						component: CalcIntro,
						groupKey: 'calcIntro',
						fullwidth: false,
					},

					// Calculator
					// --------------------------------------------------------

					{
						name: 'Calculator',
						anchor: 'calc-app',
						component: Calculator,
						groupKey: 'calcApp',
						fullwidth: false,
					},

					// Notes
					// --------------------------------------------------------

					{
						name: 'Notes & Help',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Tips',
						anchor: 'calc-tips',
						component: CalcNotesTips,
						groupKey: 'calcNotes',
						fullwidth: false,
					},
					{
						name: 'Misc',
						anchor: 'calc-misc',
						component: CalcNotesMisc,
						groupKey: 'calcNotes',
						fullwidth: false,
					},
					{
						name: 'Formula',
						anchor: 'calc-formula',
						component: CalcFormula,
						groupKey: 'calcNotes',
						fullwidth: false,
					},

					// Par Times
					// --------------------------------------------------------

					{
						name: 'Par Times',
						hideFromSidebar: true,
						specialHeading: true,
					},
					{
						name: 'Level Stats',
						anchor: 'calc-partimes',
						component: CalcParTimesTable,
						groupKey: 'calcTimes',
						fullwidth: true,
					},
				],
				groupKeys:
				{
					calcIntro: 'Intro',
					calcApp: 'Calculator',
					calcNotes: 'Notes',
					calcTimes: 'Par Times',
				},

				settings: {
					'Settings': [
						'showCalculatorWarnings',
						'showCalculatorDebug'
					]
				}
			}
		},
	}
</script>
