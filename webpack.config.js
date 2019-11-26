const path = require('path');

let conf= {
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, './dist'),
		filename:'main.js',
		publicPath: 'dist/'
	},
	devServer: {
        overlay: true
    },
    module: {
        rules: [
        	{
        		test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules'
			},
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
		]
    }
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production ? false : 'eval-sourcemap';
	return conf;
};

