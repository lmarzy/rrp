'use strict';

var path = require('./_global').paths;

module.exports = {
  src: path.dest + '**',
  dontSearchFile: [/.*\.pdf/g],
  dontRenameFile: [/^\/favicon.ico$/g, '.html', '.xml', 'logo.png', '1.png', '.pdf'],
  dontUpdateReference: ['.html', 'logo.png', '1.png', '.pdf'],
  dest: path.prod,
}
