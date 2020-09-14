
// https://github.com/neutrinojs/webpack-chain

module.exports = {
	pwa: {
		themeColor: '#3B283B',
		name: 'DEADBOLT Mods: DCP + DECP',
		msTileColor: '#3B283B',
		workboxOptions: {
			exclude: [
				/\.htaccess$/,
				/\.css\.map/
			]
		},
	},
	chainWebpack(config)
	{
		// Markdown
		config.module.rule('md')
			.test(/\.md$/)
			.use('vue-loader')
				.loader('vue-loader')
				.end()
			.use('@vusion/md-vue-loader')
				.loader('@vusion/md-vue-loader')
				.end();

		// Meta, used in index.html template
		config.plugin( 'html' ).tap( args =>
		{
			args[0].title = 'DEADBOLT Mods: DCP + DECP'
			args[0].description = 'Massive updates to the 2016 game DEADBOLT and its level editor, with new features and options.'
			args[0].homeUrl = 'https://dcp.codemuffin.com'
			args[0].ogImagePath = '/img/og-logo-wide.png'
			return args
		});
	},
};
