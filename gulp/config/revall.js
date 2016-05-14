'use strict';

var path = require('./_global').paths;

module.exports = {
  src: path.dest + '**',
  dontRenameFile: [/^\/favicon.ico$/g, '.html', '.xml'],
  dontUpdateReference: ['.html'],
  dest: path.prod,
}
