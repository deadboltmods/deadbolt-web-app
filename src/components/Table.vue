<template>
	<div>
		<table class="table--responsive-labels">
			<thead>
				<tr>
					<th v-for="column in columns" :key="column">{{ column }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, rowKey) in rows" :key="rowKey">
					<td :data-label="columns.col1">
						<span v-if="row.modileHideCol1">
							<span class="table-hide-small-bp">*</span>
							<span class="table-hide-large-bp">{{ row.col1 }}</span>
						</span>
						<span v-else>{{ row.col1 }}</span>
					</td>
					<td :data-label="columns.col2">{{ row.col2 }}</td>
					<td :data-label="columns.col3">
						<span :class="valueClass( row.col3 )">
							<span v-html="row.col3"></span>
						</span>
					</td>
					<td :data-label="columns.col4">
						<span v-html="row.col4"></span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		//@TODO: Support flexible column count
		name: 'Table',
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
		methods: {
			valueClass( val )
			{
				let cls = '';

				switch( val )
				{
					case '1':
					case true:
						cls = 'color-g';
						break;

					case '0':
					case false:
						cls = 'color-r';
						break;
				}

				return cls;
			},
		},
	}
</script>
