// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)

import 'angular2-universal-polyfills';

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';


var compression = require('compression')


// Angular 2
import { enableProdMode, CompilerOptions, COMPILER_OPTIONS } from '@angular/core';
import { ResourceLoader } from '@angular/compiler'
// Angular 2 Universal
//import { platformUniversalDynamic } from 'angular2-universal'
import { createEngine } from 'angular2-express-engine';
import { resourceLoader } from './resource-loader'
import { AppModule } from './app/app.module'
import { HNServerApp } from './app/app.server.module'
// App
// enable prod for faster renders
enableProdMode();

//platformUniversalDynamic().bootstrapModule(HNServerApp)
const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const compilerOptions:CompilerOptions = {
  providers: [{provide: ResourceLoader, useValue: resourceLoader}]
}
// Express View
app.engine('.html', createEngine({
  ngModule: HNServerApp,
  providers: [{provide: COMPILER_OPTIONS, useValue: compilerOptions, multi: true}]
}));
app.set('views', 'views');
app.set('view engine', 'html');

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression())
// Serve static files
app.use(express.static('public'));

const cache = {}


function ngApp(req:express.Request, res:express.Response) {
  const url = req.originalUrl;
  const cached = cache[url];
  if(cached){
    res.send(cached)
    res.end();
    return;
  }
  res.render('index', {
    req,
    res,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: 'http://localhost:3000'
  }, function(err, html){
    if(err){
      throw new Error('fail')
    }
    cache[url] = html;
    res.send(html);
    res.end();
  });
}
// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/', ngApp);
app.get('/about', ngApp);
app.get('/about/*', ngApp);
app.get('/home', ngApp);
app.get('/home/*', ngApp);


app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

// Server
let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});
