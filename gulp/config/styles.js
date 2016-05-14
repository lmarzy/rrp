'use strict';

var path            = require('./_global').paths,
    autoprefixer    = require('autoprefixer'),
    mqPacker        = require('css-mqpacker'),
    cssNano         = require('cssnano'),
    focus           = require('postcss-focus');

module.exports = {
  src: path.src + 'styles/{global,index,product,distributors,contact}.scss',
  uncssGlob: path.dest + '**/*.html',
  uncssIgnore: [''],
  mapWrite: './map',
  dest: path.dest + 'css',
  processorsDev: [
    autoprefixer({browsers: ['last 2 version']}),
    focus
  ],
  processorsProd: [
    cssNano
  ]
}
