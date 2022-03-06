<template>
	<div>
		<table class="table--responsive-labels">
			<thead>
				<tr>
					<th v-for="(column, columnIndex) in columns" :key="columnIndex">{{ column }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, rowKey) in rows" :key="rowKey">
					<td v-for="(cell, cellIndex) in row" :key="cellIndex">
						<span v-html="cell"></span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'TableSimple',
		props: {
			columns: {
				type: Object,
				required: true
			},
			rows: {
				type: Array,
				required: true
			}
		},
	}
</script>
