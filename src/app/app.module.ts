import {NgModule, ApplicationRef, NgModuleFactoryLoader} from '@angular/core'
import {RouterModule, Router} from '@angular/router'
import {StoreModule} from '@ngrx/store'

import {FeedViewModule} from './feed-view/feed-view'
import {ItemView} from './item-view/item-view'

import {App} from './app'
import {HackerNewsAPI} from './services/api'
import {HackerNewsClientAPI} from './services/api.client'

import {TimeAgoPipe} from './pipes/timeAgo'

import {users, stories, items} from './services/store'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'news', pathMatch: 'full'},
      { path: 'item', component: ItemView},

    ]),
    FeedViewModule,
    StoreModule.provideStore({users, stories, items})
  ],
  declarations: [
    App,
    ItemView,
    TimeAgoPipe
  ],
  entryComponents: [App],
  providers: [
    { provide: HackerNewsAPI, useClass: HackerNewsClientAPI}
  ]
})
export class AppModule {
  constructor(){

  }
}

export {users, stories, items} from './services/store'
