<template>
	<div>
		<p>The 150 most common colours in Deadbolt.</p>
		<div class="m-b">
			<button class="toggleHex" @click="displayHex = !displayHex">Toggle Hex</button>
		</div>
		<div class="colors">
			<div class="color-square" v-for="(color, cIndex) in colors" :key="cIndex" :style="{ 'background-color' : color }">
				<div class="color-name" v-if="displayHex">{{ color }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	// extract: https://hexcolor.co/image-to-colors
	// sorted:  https://codepen.io/taneleero/pen/JqVBbM
	// altsort: https://codepen.io/Mr_Maksi/pen/rwdXQv

	export default {
		name: 'Colors',
		data() {
			return {
				displayHex: false,
				colors: [
					'#000000', '#303030', '#484848', '#606060', '#787878', '#909090', '#A8A8A8', '#C0C0C0', '#D8D8D8', '#F0F0F0', '#FFFFFF', '#907878', '#786060', '#A89090', '#604848', '#C0A8A8', '#483030', '#D8C0C0', '#784848', '#301818', '#603030', '#783030', '#481818', '#601818', '#781818', '#901818', '#A81818', '#F03030', '#180000', '#300000', '#480000', '#600000', '#780000', '#900000', '#A80000', '#C00000', '#D80000', '#F00000', '#FF0000', '#903018', '#783018', '#601800', '#906048', '#784830', '#603018', '#A84818', '#481800', '#D86018', '#F07830', '#A86030', '#904818', '#D87830', '#C06018', '#F07818', '#907860', '#A89078', '#786048', '#C0A890', '#604830', '#483018', '#906030', '#C07830', '#784818', '#A86018', '#D87818', '#F09030', '#301800', '#D89030', '#906018', '#907848', '#786030', '#604818', '#483000', '#F0C048', '#C0A848', '#909078', '#787860', '#A8A890', '#606048', '#C0C0A8', '#484830', '#909060', '#A8A878', '#D8D8C0', '#787848', '#303018', '#606030', '#787830', '#484818', '#606018', '#181800', '#303000', '#484800', '#789030', '#607830', '#486018', '#486030', '#304818', '#609030', '#789078', '#607860', '#486048', '#304830', '#487848', '#183018', '#001800', '#789090', '#607878', '#90A8A8', '#486060', '#304848', '#609090', '#78A8A8', '#487878', '#90C0C0', '#60A8A8', '#183030', '#306060', '#A8D8D8', '#307878', '#184848', '#001818', '#48A8C0', '#4890A8', '#60A8C0', '#487890', '#306078', '#304860', '#183048', '#001830', '#787890', '#606078', '#484860', '#303048', '#181830', '#000018', '#604878', '#907890', '#604860', '#483048', '#906090', '#A878A8', '#301830', '#603060', '#481848', '#180018', '#906078', '#300018', '#480018', '#780018',
				],
				colors2: [
					'#000000','#180000','#300000','#480000','#600000','#780000','#900000','#A80000','#C00000','#D80000','#F00000','#FF0000','#F03030','#F07830','#D87830','#C07830','#A86030','#906030','#906048','#786048','#786060','#606060','#606048','#604848','#484848','#484830','#483030','#303030','#303018','#301818','#481818','#601818','#781818','#901818','#A81818','#903018','#783018','#783030','#603030','#603018','#483018','#483000','#481800','#601800','#301800','#181800','#001800','#001818','#001830','#181830','#183030','#183018','#303000','#484800','#484818','#604818','#604830','#784830','#784848','#784818','#904818','#A84818','#A86018','#C06018','#D86018','#D87818','#F07818','#F09030','#D89030','#C0A848','#C0A890','#C0A8A8','#A8A8A8','#A8A890','#A89090','#909090','#909078','#907878','#787878','#787860','#907860','#907848','#787848','#787830','#786030','#606030','#606018','#486018','#486030','#486048','#487848','#607830','#609030','#789030','#909060','#A89078','#A8A878','#789078','#789090','#609090','#607878','#607860','#486060','#306060','#306078','#307878','#487878','#487890','#4890A8','#60A8A8','#78A8A8','#90A8A8','#90C0C0','#C0C0C0','#D8C0C0','#D8D8C0','#D8D8D8','#A8D8D8','#C0C0A8','#A878A8','#907890','#787890','#906090','#906078','#606078','#604878','#604860','#484860','#304860','#304848','#304830','#304818','#184848','#183048','#303048','#483048','#481848','#301830','#300018','#180018','#000018','#480018','#780018','#906018','#603060','#60A8C0','#48A8C0','#F0F0F0','#FFFFFF','#F0C048',
				]
			}
		},
	}
</script>

<style lang="scss" scoped>
	.colors {
		display: flex;
		flex-wrap: wrap;
	}

	$square-dimensions: 75px;

	.color-square {
		align-items: flex-end;
		display: flex;
		height: $square-dimensions;
		justify-content: center;
		width: $square-dimensions;
		padding-bottom: 10px;
	}

	.color-name {
		font-family: consolas;
		opacity: .5;
		font-size: 12px;
	}

	.m-b {
		margin-bottom: 20px;
	}

	button {
		border: 0;
		background-color: #444;
		color: #fff;
		padding: 5px;
	}

	p {
		text-align: center;
	}
</style>