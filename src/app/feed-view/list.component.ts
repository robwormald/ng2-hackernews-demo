import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core'

import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/share'

@Component({
  selector: '[list-item]',
  template: `
    <span class="score">{{ item.score }}</span>
    <span class="title">
      <template [ngIf]="item.url">
        <a [href]="item.url" target="_blank">{{ item.title }}</a>
        <span class="host">{{ item.url }}</span>
      </template>
      <template [ngIf]="!item.url">
        <a [routerLink]="[item.id]">{{ item.title }}</a>
      </template>
    </span>
    <br>
    <span class="meta">
      <span *ngIf="item.type !== 'job'" class="by">
        by <a [routerLink]="['user', item.id]" >{{ item.by }}</a>
      </span>
      <span class="time">
        {{ item.time }} ago
      </span>
      <span *ngIf="item.type !== 'job'" class="comments-link">
        | <a routerLink="/item" [queryParams]="{ id: item.id }">{{ item.descendants }} comments</a>
      </span>
    </span>
    <span class="label" *ngIf="item.type !== 'story'">{{ item.type }}</span>
  `,
  styleUrls: ['./list.item.css']

})
export class ListItem {
  _item:any;
  @Input()
  set item(v){
    this._item = v;
  }
  get item(){
    return this._item || {}
  }
}


