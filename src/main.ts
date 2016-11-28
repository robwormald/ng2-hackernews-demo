import 'zone.js/dist/zone.js'
import {AppModuleNgFactory} from './ngfactory/src/app/app.module.ngfactory'
import {platformBrowser} from '@angular/platform-browser'
import {enableProdMode} from '@angular/core'
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
