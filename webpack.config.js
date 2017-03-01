/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

/* jshint browser: false, node: true, strict: true */

'use strict';

const path = require( 'path' );
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require( 'webpack' ).optimize.UglifyJsPlugin;

module.exports = {
    context: __dirname,
    target: 'web',

    entry: [
        'regenerator-runtime/runtime',
        './assets/js/app'
    ],

    output: {
        path: './build',
        filename: 'js/app.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'assets'), // your scripts
                    path.resolve(__dirname, 'node_modules/@ckeditor')
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'es2015-webpack2' ],
                        cacheDirectory: true
                    }
                }]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract( {
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                } )
            },
            {
                test: /\.s[ac]ss$/,
                loader: ExtractTextPlugin.extract( {
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader'
                } )
            },
            {
                test: /\/ckeditor5-.*\.svg$/,
                loader: 'raw-loader'
            }
            // NOTE: if you have other *.svg rule(s), add {exclude: /\/ckeditor5-/} option to them
        ]
    },

    resolve: {
        modules: [
            path.resolve( __dirname, 'packages' ),
            'node_modules'
        ]
    },

    plugins: [
        new ExtractTextPlugin( 'css/styles.css' ),
        new UglifyJsPlugin( {
            sourceMap: true
        } )
    ],

    devtool: 'source-map',
    stats: true
};