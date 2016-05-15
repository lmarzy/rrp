'use strict';

var path = require('./_global').paths;

module.exports = {
  src: path.dest + '**',
  dontRenameFile: [/^\/favicon.ico$/g, '.html', '.xml', 'logo.png', '1.png'],
  dontUpdateReference: ['.html', 'logo.png', '1.png'],
  dest: path.prod,
}
