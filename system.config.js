System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true,
    module: 'es2015'
  },
  paths: {
    'npm:*': 'node_modules/*'
  },
  //map tells the System loader where to look for things
  map: {
    npm: 'node_modules',
    '@inbox-app': 'lib',
    '@inbox-app/inbox': 'lib/ngfactory/src/inbox-app/inbox-view',
    '@inbox-app/login': 'lib/ngfactory/src/inbox-app/login-view',

    '@angular/core': 'npm:@angular/core',
    '@angular/common': 'npm:@angular/common',
    '@angular/compiler': 'npm:@angular/compiler',
    '@angular/platform-browser': 'npm:@angular/platform-browser',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic',
    '@angular/http': 'npm:@angular/http',
    '@angular/router': 'npm:@angular/router',
    '@angular/forms': 'npm:@angular/forms',
    '@angular/material': 'npm:@angular/material',

    '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',

    '@ngrx/store':'npm:@ngrx/store',
    '@ngrx/core':'npm:@ngrx/core',
    '@ngrx/effects':'npm:@ngrx/effects',

    'rxjs': 'npm:rxjs-es',
    'typescript': 'npm:typescript/lib/typescript.js',
    'zone.js': 'npm:zone.js/dist/zone.js'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    '@inbox-app': {
      main: 'main.js',
    },
    '@inbox-app/login': {
      main: 'login-view.module.ngfactory.js',
    },
    '@inbox-app/inbox': {
      main: 'inbox-view.module.ngfactory.js',
    },
    '@angular/core': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/forms': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/http': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/router': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/material': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@ngrx/store': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@ngrx/core':{
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@ngrx/effects':{
      main: 'index.js',
      defaultExtension: 'js'
    },

    rxjs: {
      defaultExtension: 'js'
    }
  }
});
