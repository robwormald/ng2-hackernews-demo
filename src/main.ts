import {AppModule} from './app/app.module'
import {HNClientApp} from './app/app.client.module'
import {HNClientAppNgFactory} from './ngfactory/src/app/app.client.module.ngfactory'
import {platformBrowser} from '@angular/platform-browser'
import {enableProdMode} from '@angular/core'
enableProdMode();
platformBrowser().bootstrapModuleFactory(HNClientAppNgFactory)
