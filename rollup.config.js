var rollup = require( 'rollup' );
var nodeResolve = require('rollup-plugin-node-resolve');
var commonJS = require('rollup-plugin-commonjs');
var closure = require('google-closure-compiler-js');
var argv = require('yargs').argv;
var ClosureCompiler = require('google-closure-compiler').compiler;
var strip = require('strip-comments');
require('core-js');

//simple closure compiler wrapper for rollup
function closureCompilerPlugin(options = {}){
  return {
    transformBundle(bundle){
      const compilation = Object.assign({}, options, {
        jsCode: options.jsCode ? options.jsCode.concat({ src: bundle }) : [{ src: bundle }]
      });
	  console.log('closure compiler optimizing...');
      const transformed = closure.compile(compilation);
	  console.log('closure compiler optimizing complete');
	  return { code: transformed.compiledCode, map: transformed.sourceMap };
    }
  }
}

function stripComments(){
  return {
    transformBundle(bundle){
      return strip(bundle);
    }
  }
}

var writeIIFE = fileName => bundle => bundle.write({format: 'iife', dest: fileName, moduleName: 'inbox', globals: {'rxjs/Subject': 'Rx.Subject','rxjs/Observable': 'Rx.Observable'}});

//rollup plugins
var plugins = [
	nodeResolve({ module: true }),
  commonJS(),
  stripComments()
]

//only do closure in prod mode (slow!)
if(argv.prod){
  plugins.push(closureCompilerPlugin({ compilationLevel: 'SIMPLE' }));
}

//build the AOT package
var buildAOT = rollup.rollup({
	entry: './lib/main.js',
	plugins: plugins,
  context: 'window'
})
.then(writeIIFE('./release/hn-app.js'))
.then(() => {
  var closureCompiler = new ClosureCompiler({
    js: './release/hn-app.js',
    compilation_level: 'SIMPLE',
    js_output_file: './release/hn-app.min.js',
    manage_closure_dependencies: false,
    language_in: 'ECMASCRIPT6_STRICT',
    language_out: 'ECMASCRIPT5',
    rewrite_polyfills: false
  });
  return new Promise((resolve, reject) => {
    closureCompiler.run(function(exitCode, stdOut, stdErr) {
      console.log(exitCode);
      console.log(stdErr)
       resolve()
    });
  })
})
.then(() => console.log('built angular2'))
.catch(err => console.log(err));
