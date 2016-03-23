'use strict';

var path = require('./_global').paths;

module.exports = {
  css: {
    src: path.src + 'styles/_img/**/*',
    dest: path.dest + 'css/img/'
  },
  images: {
    src: path.src + 'img/*',
    dest: path.dest + 'img/'
  }
}
