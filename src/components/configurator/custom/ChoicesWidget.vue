<template>
	<div>
		<scrollactive :duration="0" :clickToScroll="false" :offset="50" :highlightFirstItem="true" class="choices">
			<router-link :to="'/config/customjson#character'" class="scrollactive-item choice-link">
				<div class="choice-tile">
					<div class="choice-tile-img choice-character-bg" :style="{ backgroundImage : `url(${currentCharacterImageUrl})` }"></div>
				</div>
			</router-link>
			<router-link :to="'/config/customjson#weapons'" class="scrollactive-item choices choice-link">
				<div class="choice-tile choice-tile--hasspacing">
					<div class="choice-tile-img choice-weapon-bg" :style="{ backgroundImage : `url(${currentPrimaryImg})` }"></div>
				</div>
				<div class="choice-tile">
					<div class="choice-tile-img choice-weapon-bg" :style="{ backgroundImage : `url(${currentSecondaryImg})` }"></div>
				</div>
			</router-link>
		</scrollactive>
	</div>
</template>

<script>
	import npcs from '@/data/npcs'
	import weapons from '@/data/weapons'

	export default {
		name: 'ChoicesWidget',
		computed: {
			currentCharacterImageUrl()
			{
				const currentCharacter = npcs.find( n => n.id === this.$store.getters.getCharacterId );
				const currentCharacterSprite = currentCharacter.sprite;

				return require( `@/assets/sprites/npc/${currentCharacterSprite}.png` );
			},
			currentPrimaryImg()
			{
				const currentPrimaryIndex = this.$store.getters.getPrimaryWeapon;
				const currentPrimary = weapons.filter( w => w.index === currentPrimaryIndex )[0];

				return this.getWeaponImageUrl( currentPrimary.pickup_str );
			},
			currentSecondaryImg()
			{
				const currentSecondaryIndex = this.$store.getters.getSecondaryWeapon;
				const currentSecondary = weapons.filter( w => w.index === currentSecondaryIndex )[0];

				return this.getWeaponImageUrl( currentSecondary.pickup_str );
			},
		},
		methods: {
			getWeaponImageUrl( pickup_str )
			{
				return ( pickup_str && pickup_str !== -1 ) ? require( `@/assets/sprites/weapon/${pickup_str}.png` ) : '';
			},
		},
	}
</script>

<style lang="scss" scoped>
	.choices {
		display: flex;
	}

	$tile-bg: #383d3f;

	.choice-tile {
		align-items: center;
		background-color: $tile-bg;
		display: flex;
		height: 42px;
		justify-content: center;
		padding: 5px;
		width: 42px;

		.choice-link:hover & {
			background-color: darken($tile-bg, 5);
		}

		.choice-link.is-active & {
			background-color: lighten($tile-bg, 5);
		}

		&--hasspacing {
			margin: 0 10px;
		}
	}

	.choice-tile-img {
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		height: 30px;
		width: 30px;
	}
</style>
