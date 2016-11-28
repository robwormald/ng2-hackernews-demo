var Builder = require('systemjs-builder');
var util = require('util')
var builder = new Builder();

var bundles = {}

builder.loadConfig('./system.config.js')
  .then(() => {
    return builder.bundle('@inbox-app - [@inbox-app/**/*]', 'release/common.js', {minify: true, mangle: true, rollup: true});
  })
  .then(bundle => {
    bundles['release/common.js'] = bundle.modules;
    return builder.bundle('@inbox-app - release/common.js', 'release/main.js', {minify: true, mangle: true, rollup: true})
  })
