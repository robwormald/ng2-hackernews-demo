import {HackerNewsAPI} from './api'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

declare var fetch;

//wrap fetch in observable so we can keep it chill
export function lazyFetch(url, options?){
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then(res => {
        if(!cancelToken){
          return res.json()
            .then(data => fetchObserver.next(data) && fetchObserver.complete())
        }
      }).catch(err => fetchObserver.error(err));
      return () => {
        cancelToken = true;
      }
  });
}

export function hnFetch(url){
  return lazyFetch(`https://hacker-news.firebaseio.com/v0/${url}.json`)
}


export class HackerNewsClientAPI implements HackerNewsAPI {
  private _firebase:any;
  constructor(){
    console.log('init')
  }
  getStories(path){
    return hnFetch(path)

      .map((storyIds:number[]) => {
        return storyIds.map(id => ({
          id: id,
          story: this.getStoryDetail(id)
        }));
      }).catch(err => {
        return Observable.of([])
      })
  }
 getTopStories(page?){
    return this.getStories('topstories').map(stories => stories.slice(page * 25, page + 1 * 25))
 }
 getNewStories(page?){
   return this.getStories('newstories').map(stories => stories.slice(page * 25, page + 1 * 25))
 }
 getBestStories(page?){
   return this.getStories('beststories').map(stories => stories.slice(page * 25, page + 1 * 25))
 }
 private getStoryDetail(id){
    return hnFetch(`item/${id}`);
 }
}
