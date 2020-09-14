<template>
	<section class="intro">
		<h1 class="font-serif">{{ pageTitle }}</h1>
		<p class="font-sans" v-html="pageDescription"></p>
	</section>
</template>

<script>
	export default {
		name: 'Intro',
		data() {
			return {
				intros: {
					// home:        {title: 'Deadbolt Mods', description: 'Home of DCP + DECP', },
					DCP:         {title: 'DCP',           description: 'Deadbolt Community Patch', },
					DECP:        {title: 'DECP',          description: 'Deadbolt Editor Community Patch', },
					// resources:   {title: 'Resources',     description: 'Resources for players and creators', }
				},
			}
		},
		computed: {
			routeKey()
			{
				let routeKey = this.$route;

				// Optionally use parent intro for children
				if ( this.$route.meta?.useParentIntro )
				{
					routeKey = this.$route.matched[0];
				}

				return routeKey;
			},
			pageTitle()
			{
				return this.intros[this.routeKey.name]?.title;
			},
			pageDescription()
			{
				// return this.pageDescriptions[ this.$route.name ];
				return this.intros[this.routeKey.name]?.description;
			},
		},
	}
</script>

<style lang="scss" scoped>
	.intro {
		text-align: center;
		margin: 40px auto 40px;

		h1 {
			margin-bottom: 5px;
		}

		p {
			font-size: 1.2rem;
		}
	}
</style>