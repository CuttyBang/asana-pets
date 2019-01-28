const webpack = require('webpack')
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let env = process.env.WEBPACK_ENV;
let fileName = 'app.js';

if (env === 'production') {
	let UglifyPlugin = webpack.optimize.UglifyJsPlugin;

	plugins.push(new UglifyPlugin({minimize: true}));

	plugins.push(new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}));

	fileName = fileName.replace(/js/g, 'min.js');
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: fileName
  },
  node: {
   readline: 'empty'
  },
  module: {
    rules: [
			{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
			{
			  test: /\.(gif|png|jpe?g|svg)$/i,
			  use: [
			    'file-loader',
			    {
			      loader: 'image-webpack-loader',
			      options: {
			        bypassOnDebug: true,
			        disable: true,
			      },
			    },
			  ],
			},
      {
	      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
	      use: [{
	          loader: 'file-loader',
	          options: {
	              name: '[name].[ext]',
	              outputPath: 'fonts/'
	          }
	      }]
	  },
      {
        test: /\.js$/,
        use:[
          {
            loader: "babel-loader",
            options: {
              presets: ['env', 'es2015']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: "./src/index.html",
    }),
    new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true
    })
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: "errors-only",
    open: true
  }
};
