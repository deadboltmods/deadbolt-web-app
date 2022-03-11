<template>
	<div>

		<!-- {{ answersJson }} -->

		<div class="searchbox">
			<input type="text" placeholder="Enter search term..." v-model="searchTerm">
			<!-- {{ searchTerm }} -->
		</div>

		<div class="search-buttons">

			<button v-for="(btnText, btnTextsIndex) in btnTexts" :key="'btn-' + btnTextsIndex" class="search-btn" @click="setSearchTerm( btnText )">
				<span v-if="btnText === ''">
					ALL
				</span>
				<span v-else>
					{{ btnText }}
				</span>
			</button>
		</div>

		<div class="post" v-for="(post, postIndex) in getPosts()" :key="'post-' + postIndex">
			<div class="post-top">
				<div class="post-link">
					<a target="_blank" :href="post.Post_url">
						{{ post.Post_id }}
					</a>
				</div>
				<div class="post-date color-dk">
					{{ post.Date }}
				</div>
			</div>
			<div class="post-title">
				<div v-if="post.isQA" class="qa-prefix">Q:</div>
				<div v-html="post.Title"></div>
			</div>
			<div class="post-content">
				<div v-if="post.isQA" class="qa-prefix">A:</div>
				<div v-html="post.Content"></div>
			</div>
		</div>

	</div>
</template>


<script>
	import answersJson from '@/data/hopoo-tumblr/answers--title-edit.json'
	import textsJson from '@/data/hopoo-tumblr/texts--edit.json'

	export default {
		name: 'DevBlogExplorer',
		data() {
			return {
				answersJson,
				searchTerm: 'Enter search term...', // this *should* prevent the content from being indexed
				btnTexts: [
					'',
					'deadbolt',
					'reaper',
					'ibzan',
					'fire',
					'undead',
					'vampire',
					'zombie',
					'sprite',
					'Q&A',
					'QA'
				]
			}
		},
		methods: {
			blogData() {
				// return this.answersJson.concat( textsJson );

				return this.sortData();
			},

			sortData()
			{
				const fullData = this.answersJson.concat( textsJson );

				// via: https://stackoverflow.com/a/8837511
				fullData.sort(function(a, b) {
					var keyA = new Date(a.Date);
					var keyB = new Date(b.Date);
					// Compare the 2 dates
					if (keyA < keyB) { return -1; }
					if (keyA > keyB) { return 1; }
					return 0;
				});

				return fullData.reverse();
			},

			setSearchTerm( term )
			{
				this.searchTerm = term;
			},

			getPosts()
			{
				if ( this.searchTerm === '' )
				{
					return this.blogData();
				}
				else
				{
					const stLower = this.searchTerm.toLowerCase();

					return this.blogData().filter( postData =>
					{
						return postData.Title.toLowerCase().includes( stLower ) || postData.Content.toLowerCase().includes( stLower ) || postData.Tags.toLowerCase().includes( stLower );
					});
				}
			},
		}
	}
</script>

<style lang="scss">
	@import '@/assets/scss/_variables.scss';

	.searchbox {
		margin: 0 auto 20px;

		input {
			width: 100%;
			padding: 20px;
			font-size: 20px;
			background-color: $color-bl;
			color: $color-w;
			font-family: $font-mono-text;
		}
	}

	.search-buttons {
		display: flex;
		margin-bottom: 20px;
		flex-wrap: wrap;

		.search-btn {
			background-color: $color-bl;
			border: 0;
			color: $color-w;
			cursor: pointer;
			font-family: $font-mono-text;
			font-size: 16px;
			margin-right: 10px;
			padding: 5px 10px;
			margin-bottom: 8px;

			&:hover {
				background-color: lighten($color-bl, 20);
			}
		}
	}

	.post {
		padding: 10px;
		border: 1px solid darken($color-dk, 15);
		margin-bottom: 40px;
	}

	.post-top {
		display: flex;
		justify-content: space-between;
	}

	.post-link {
		margin-bottom: 15px;
	}

	.post-date {
		text-align: right;
	}

	.post-title {
		color: $color-g;
		margin-bottom: 15px;
	}

	.post-content {
		color: $color-w;

		p:last-child {
			margin-bottom: 0;
		}
	}

	.qa-prefix {
		float: left;
		margin-right: 10px;
	}

</style>
