<template>
	<section class="selected-sticky">
		<div class="selected-rack">
			<div class="selected-img" :style="weaponImageStyle( primaryWpn )"></div>
			<div class="selected-img" :style="weaponImageStyle( secondaryWpn )"></div>
		</div>
		<div class="selected-names font-serif">
			<div>
				{{ primaryWpn.name }}
				<span v-if="showExtraData">( {{ primaryWpn.index }} )</span>
			</div>
			<div>+</div>
			<div>
				{{ secondaryWpn.name }}
				<span v-if="showExtraData">( {{ secondaryWpn.index }} )</span>
			</div>
		</div>
	</section>
</template>


<script>
	export default {
		name: 'CurrentWeaponsRack',
		props: {
			primaryWpn: {
				type: Object,
				required: true
			},
			secondaryWpn: {
				type: Object,
				required: true
			}
		},
		computed: {
			showExtraData()
			{
				return this.$store.getters.getSetting( 'showExtraData' );
			},
		},
		methods: {
			weaponImageStyle( weapon )
			{
				// Punch or "player choice"?
				if ( ( weapon.index === 4 || weapon.index === -1 ) )
				{
					return null;
				}
				else
				{
					return { backgroundImage : `url(${ require( `@/assets/sprites/weapon/${ weapon.pickup_str }.png` ) })` }
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.selected-sticky {
		padding: 0 40px;
		position: sticky;
		top: 120px;
	}

	.selected-names {
		font-size: 1.8rem;
		margin-top: 20px;
		text-align: center;
	}

	.selected-rack {
		align-items: center;
		background-image: url('~@/assets/sprites/gui/sAptRack.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		flex-direction: column;
		height: 300px;
		justify-content: space-evenly;
		margin: 0 auto;
		max-width: 360px;
		width: 100%;

		justify-content: flex-start;
		padding-top: 60px;
	}

	.selected-img {
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
		filter: drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.3));
		height: 50px;
		width: 150px;
		margin-bottom: 15%;
	}
</style>
