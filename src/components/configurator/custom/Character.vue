<template>
	<div class="characters-view">
		<div>
			<div v-for="group in groups" :key="group">
				<!-- <h2 class="group-name font-serif">{{ group }}</h2> -->
				<div class="characters-grid">
					<div v-for="(npc, npcKey) in getCharacterObjectsByGroup( group )" :key="npcKey">
						<CharacterCard :npc="npc" :group="group"/>
					</div>
				</div>
			</div>
		</div>

		<div>
			<div class="abilities-sticky">
				<Abilities/>
			</div>
		</div>
	</div>
</template>


<script>
	// @TODO: Filters (boss/nonplayable/melee)
	import npcs from '@/data/npcs'
	import CharacterCard from '@/components/CharacterCard'
	import Abilities from '@/components/Abilities'

	export default {
		name: 'Character',
		components: {
			CharacterCard,
			Abilities
		},
		data() {
			return {
				groups: [
					'Reaper',
					'Zombie',
					'Vampire',
					'Skeleton',
					'Demon',
					'Misc',
				],
			};
		},
		computed: {
			showUnplayableCharacters() {
				return this.$store.getters.getSetting( 'showUnplayableCharacters' );
			}
		},
		methods: {
			getCharacterObjectsByGroup( groupKey )
			{
				let playableNpcs = npcs;

				if ( !this.showUnplayableCharacters )
				{
					playableNpcs = npcs.filter( n => n.isPlayable );
				}

				let groupedNpcs = playableNpcs.filter( n => n.group === groupKey );

				// merge Reaper + zombies
				if ( groupKey === 'Reaper' )
				{
					return null;
				}
				else if ( groupKey === 'Zombie' )
				{
					groupedNpcs.unshift( npcs[0] );
				}

				return groupedNpcs;
			}
		}
	}
</script>


<style scoped lang="scss">
	@import '@/assets/scss/_variables.scss';

	.characters-view {
		display: grid;
		grid-template-columns: 1fr;
		position: relative;

		@media (min-width: 500px)  {
			grid-template-columns: 2fr 1fr;
		}
	}

	.characters-grid {
		--grid-cols: 2;
		display: grid;
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		grid-template-columns: repeat(var(--grid-cols), 1fr);
		grid-template-rows: auto;
		margin-bottom: 40px;

		@media (min-width: 500px)  {
			--grid-cols: 2;
			// margin-bottom: 80px;
		}

		@media (min-width: 740px)  {
			--grid-cols: 3;
		}

		@media (min-width: 960px)  {
			--grid-cols: 4;
		}

		// (sidebar from 1330)

		@media (min-width: 1500px) {
			--grid-cols: 5;
		}

		@media (min-width: 1660px) {
			--grid-cols: 6;
		}

		@media (min-width: 1830px) {
			--grid-cols: 7;
		}

		&:empty {
			display: none;
		}
	}

	.group-name {
		margin-bottom: 10px;
	}

	.abilities-sticky {
		padding: 0 40px;
		position: sticky;
		top: 120px;
	}
</style>
