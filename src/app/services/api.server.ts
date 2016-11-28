import {HackerNewsAPI} from './api'
import {Observable} from 'rxjs/Observable'
import {fromPromise} from 'rxjs/observable/fromPromise'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'

declare var System;

export class HackerNewsServerAPI implements HackerNewsAPI {

  getNewStories(page){
    return Observable.of([])
  }
  getTopStories(page){
    return Observable.of([])
  }
  getBestStories(page){
    return Observable.of([])
  }
}
