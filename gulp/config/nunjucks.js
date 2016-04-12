'use strict';

var path = require('./_global').paths;

module.exports = {
    src: path.src + 'templates/pages/**/**/*.html',
    paths: [
      path.src + 'templates',
      path.src + 'templates/layout',
      path.src + 'templates/layout/head',
      path.src + 'templates/layout/foot',
      path.src + 'templates/partials/components/global',
      path.src + 'templates/partials/components/global/site-header',
      path.src + 'templates/partials/components/global/site-footer',
      path.src + 'templates/partials/components/pages',
      path.src + 'templates/partials/components/pages/index',
      path.src + 'templates/partials/components/pages/products',
      path.src + 'templates/partials/components/pages/products/enduroguard',
      path.src + 'templates/partials/icons'
    ],
    data: path.src + 'templates/data/global.json',
    dest: path.dest
}
