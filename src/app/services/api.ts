import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'

export interface HNStory {}

@Injectable()
export abstract class HackerNewsAPI {
  abstract getNewStories(page?):Observable<HNStory[]>
  abstract getTopStories(page?):Observable<HNStory[]>
  abstract getBestStories(page?):Observable<HNStory[]>
}
