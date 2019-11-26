# test-webpack
###### install node
###### node -v (on windows check environment variables)
###### on directory with project run on cmd: `npm init`
###### change name in scripts line: `build: “webpack”`
###### make src with index.js and script.js
###### make index.html and import js from `dist/main.js`
###### add `wepback --mode production/development` to build
###### on cmd: `webpack i webpack-dev-server (--mode development)`
###### delete dist
###### make webpack.config.js
```
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
    }
  };

  module.exports = conf;
```
###### add to scripts.js
```
  export function funcIE() {
	  const a = { prop1: 'okay1', prop2: 'okay2'};
	  const b = { prop1: 'okay1', prop2: 'okay2'};
	  console.log({...a, ...b});
  }
```
###### make  .babelrc file
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
###### npm install @babel/core @babel/cli  @babel/preset-env --save-dev
###### add to webpack.config.js
```
module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production ? false : 'eval-sourcemap';
	return conf;
};
```

###### npm i style-loader css-loader --save-dev
###### npm install sass-loader node-sass webpack --save-dev
###### add to rules 
```
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
           }
```
