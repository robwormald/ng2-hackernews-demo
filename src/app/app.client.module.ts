import {BrowserModule} from '@angular/platform-browser'

import {NgModule} from '@angular/core'
import {AppModule} from './app.module'
import {App} from './app'

@NgModule({
  imports: [BrowserModule, AppModule],
  bootstrap: [App]
})
export class HNClientApp {}
