<template>
	<div>
		<h2>Vanilla</h2>
		<p>A few of these are not available in the vanilla level editor and require manual file editing.</p>
		<div class="portraits">
			<div v-for="(portraits, portraitKey) in portraitCountVanilla" :key="portraitKey">
				<div class="portrait">
					<img :src="imgPath( portraitKey )" alt="">
				</div>
			</div>
		</div>
		<h2>DCP</h2>
		<p>Many of these are cut dev assets, sourced from Hopoo's Tumblr, the dev art assets ZIP, and extracted from the <a href="https://www.indiedb.com/games/deadbolt/downloads/deadbolt-demo" target="_blank">demo</a>.
		<p>Also included are original sprites by <a href="https://steamcommunity.com/id/Nintee/images/?appid=394970" target="_blank">Nintee</a> and <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1954829541" target="_blank">Classic_Cheese18</a>.
		<p>The last two are original characters from Nintee's <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1100054626" target="_blank">Last Stand</a> campaign. They are named Cadmus and Magus.
		<div class="portraits">
			<div v-for="(portraits, portraitKey) in (portraitCountVanilla + portraitCountDCP)" :key="portraitKey">
				<div v-if="portraitKey <= portraitCountVanilla"></div>
				<div v-else class="portrait">
					<img :src="imgPath( portraitKey )" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WorkshopSizes',
		data() {
			return {
				// portraitCount: 50,
				portraitCountVanilla: 32,
				portraitCountDCP: 18,
			}
		},
		methods: {
			imgPath( imgIndex )
			{
				return require( '@/assets/images/resources/sChatPortrait/sChatPortrait_' + imgIndex + '.png' );
			}
		},
	}
</script>

<style lang="scss" scoped>
	// @import '@/assets/scss/_variables.scss';

	.portraits {
		display: flex;
		flex-wrap: wrap;

		+ .portraits {
			margin-top: 30px;
		}
	}

	.portrait {
		margin: 0 10px 10px 0;

		// vanilla: 44x44
		img {
			display: block;
			height: 88px;
			width: 88px;
			margin: 0;
		}
	}
</style>
