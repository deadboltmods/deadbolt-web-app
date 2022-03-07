<template>
	<!-- Imported from old HTML notes - @TODO: Fixup -->
	<div class="draw-ctext-view">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Hex</th>
					<th>Key</th>
					<th>String</th>
					<th>Notes</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="td-name" style="color: #CC6767">Pastel Red</td>
					<td class="td-hex" style="background-color:#CC6767">#CC6767</td>
					<td class="td-key" style="color: #CC6767"><code>r</code></td>
					<td class="td-str" style="color: #CC6767"><input type="text" value='"&amp;r&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes">unlocked weapons</td>
				</tr>
				<tr>
					<td class="td-name" style="color: #3B9BD0">Pastel Blue</td>
					<td class="td-hex" style="background-color:#3B9BD0">#3B9BD0</td>
					<td class="td-key" style="color: #3B9BD0"><code>b</code></td>
					<td class="td-str" style="color: #3B9BD0"><input type="text" value='"&amp;b&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes">weapon cost</td>
				</tr>
				<tr>
					<td class="td-name" style="color: #7eb686">Pastel Green</td>
					<td class="td-hex" style="background-color:#7eb686">#7eb686</td>
					<td class="td-key" style="color: #7eb686"><code>g</code></td>
					<td class="td-str" style="color: #7eb686"><input type="text" value='"&amp;g&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes">only used for "USE STAIRS"</td>
				</tr>
				<tr>
					<td class="td-name" style="color: #efd27b">Pastel Yellow</td>
					<td class="td-hex" style="background-color:#efd27b">#efd27b</td>
					<td class="td-key" style="color: #efd27b"><code>y</code></td>
					<td class="td-str" style="color: #efd27b"><input type="text" value='"&amp;y&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes">general "USE x"</td>
				</tr>
				<tr>
					<td class="td-name" style="color: #F6742D">Pastel Orange</td>
					<td class="td-hex" style="background-color:#F6742D">#F6742D</td>
					<td class="td-key" style="color: #F6742D"><code>or</code></td>
					<td class="td-str" style="color: #F6742D"><input type="text" value='"&amp;or&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes">looks unused</td>
				</tr>
				<tr>
					<td class="td-name" style="color: #E962CF">Pink</td>
					<td class="td-hex" style="background-color:#E962CF">#E962CF</td>
					<td class="td-key" style="color: #E962CF"><code>p</code></td>
					<td class="td-str" style="color: #E962CF"><input type="text" value='"&amp;p&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes">almost c_fuchsia</td>
				</tr>


				<tr>
					<td class="td-name" style="color: #FFFFFF">White</td>
					<td class="td-hex" style="background-color:#FFFFFF">#FFFFFF</td>
					<td class="td-key" style="color: #FFFFFF"><code>w</code></td>
					<td class="td-str" style="color: #FFFFFF"><input type="text" value='"&amp;w&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes"></td>
				</tr>
				<tr>
					<td class="td-name" style="color: #c0c0c0">Light_gray</td>
					<td class="td-hex" style="background-color:#c0c0c0">#c0c0c0</td>
					<td class="td-key" style="color: #c0c0c0"><code>lt</code></td>
					<td class="td-str" style="color: #c0c0c0"><input type="text" value='"&amp;lt&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes">same as c_silver</td>
				</tr>
				<tr>
					<td class="td-name" style="color: #BDBEC2">Grey</td>
					<td class="td-hex" style="background-color:#BDBEC2">#BDBEC2</td>
					<td class="td-key" style="color: #BDBEC2"><code>gr</code></td>
					<td class="td-str" style="color: #BDBEC2"><input type="text" value='"&amp;gr&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes">almost c_ltgray</td>
				</tr>
				<tr>
					<td class="td-name" style="color: #404040">Dark_gray</td>
					<td class="td-hex" style="background-color:#404040">#404040</td>
					<td class="td-key" style="color: #404040"><code>dk</code></td>
					<td class="td-str" style="color: #404040"><input type="text" value='"&amp;dk&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes"></td>
				</tr>
				<tr>
					<td class="td-name" style="color: #000000">Black</td>
					<td class="td-hex" style="background-color:#000000">#000000</td>
					<td class="td-key" style="color: #000000"><code>bl</code></td>
					<td class="td-str" style="color: #000000"><input type="text" value='"&amp;bl&amp;" + string(str) + "&amp;!&amp;"'></td>
					<td class="td-notes"></td>
				</tr>
			</tbody>
		</table>

		<div class="styled-content">
			<p>The function <code>draw_ctext( x, y, str )</code> is responsible for producing coloured text in the game. The values above are the pre-defined colours that are available for use. Many have been used on this site too.</p>
			<p>
				In-built GM colours:
				<a href="https://docs.yoyogames.com/source/dadiospice/002_reference/drawing/colour%20and%20blending/">Colour And Blending</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DrawCtext'
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/_variables.scss';

	.draw-ctext-view {
		font-size: 1.5rem;
	}

	table {
		margin-bottom: 30px;
		font-size: inherit;
	}

	th {
		text-align: left;
		padding: 5px;
	}

	td {
		padding: 5px;
		vertical-align: middle;
	}

	.td-hex {
		min-width: 150px;
		color: rgba(0,0,0,.3)
	}

	.td-key {
		text-align: center;
	}

	.td-str input {
		background: inherit;
		border: 0;
		color: inherit;
		font-family: consolas;
		font-size: .8rem;
		min-width: 190px;
		padding: 4px;
		width: 100%;
	}

	.td-notes {
		font-size: 1.2rem;
	}

	a {
		color: $color-b;
	}
</style>
