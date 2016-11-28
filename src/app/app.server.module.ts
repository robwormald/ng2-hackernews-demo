import { NgModule, Component, Inject, OpaqueToken } from '@angular/core';

import { UniversalModule } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { App } from './app'
import { AppModule } from './app.module'

// export const staticPage:includeContainer = {
//   head: [
//     {type: 'link', rel: 'preload', href: 'bundles/app.js'},
//     {type: 'link', rel: 'preload', href: 'bundles/@angular.core.js'},
//     {type: 'link', rel: 'preload', href: 'bundles/@angular.platform-browser.js'},
//     {type: 'link', rel: 'preload', href: 'bundles/@angular.common.js'},
//     {type: 'link', rel: 'preload', href: 'bundles/@angular.router.js'},
//     {type: 'link', rel: 'preload', href: 'bundles/@ngrx.core.js'},
//     {type: 'link', rel: 'preload', href: 'bundles/@ngrx.store.js'},
//     {type: 'link', rel: 'preload', href: 'bundles/rxjs.js'},
//   ],
//   body: [
//     {type: 'script', async: false, src: 'bundles/@angular.core.js'},
//     {type: 'script', async: false, src: 'bundles/@angular.platform-browser.js'},
//     {type: 'script', async: false, src: 'bundles/@angular.common.js'},
//     {type: 'script', async: false, src: 'bundles/@angular.router.js'},
//     {type: 'script', async: false, src: 'bundles/@ngrx.core.js'},
//     {type: 'script', async: false, src: 'bundles/@ngrx.store.js'},
//     {type: 'script', async: false, src: 'bundles/rxjs.js'},
//     {type: 'script', async: false, src: 'bundles/app.js'},
//     {type: 'script', src: 'loader.js', async: true}
//   ],

// }

// export const appShell:includeContainer = {
//   head: [
//     {type: 'link', rel: 'preload', href: 'vendor.js'}
//   ],
//   body: [
//    { type: 'script', src: 'zone.min.js', async: false},
//    { type: 'script', src: 'system.js', async: false},
//    { type: 'script', src: 'vendor.js', async: false},
//    { type: 'script', src: 'docs-app.js', async: false},
//    { type: 'script', src: 'loader.js', async: true}
//   ],

// }


// export function getInitialState(){
//   return {
//     navLinks: [
//       {href: 'about', text: 'About'},
//       {href: '', text: 'Home'}
//     ]
//   }
// }


@NgModule({
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    AppModule
  ],
  providers: [

  ],
  bootstrap: [
    App
  ]
})
export class HNServerApp {
  isAppShell
  document;
  DOM: any;
  constructor() {

  }
  universalAfterDehydrate = () => {

    console.log('dehydrate')
    // const dom = getDOM();
    // const head = dom.querySelector(this.document, 'head');
    // const body = dom.querySelector(this.document, 'body');
    // const universal = dom.querySelector(body, 'universal-script');
    // dom.removeChild(body, universal);



    // headIncludes.concat(bodyIncludes).forEach(script => {

    //   let el;
    //   switch (script.type) {
    //     case 'link':
    //         el = dom.createElement('link', this.document) as HTMLLinkElement;
    //         dom.setAttribute(el, 'rel', 'preload');
    //         dom.setAttribute(el, 'href', script.href)
    //       break;
    //     case 'script':
    //       el = dom.createElement('script', this.document) as HTMLScriptElement;
    //       dom.setAttribute(el, 'src', script.src);
    //       if(script.async){
    //         dom.setAttribute(el, 'async','')
    //       }
    //        dom.setAttribute(el, 'src', script.src);
    //     default:
    //       break;
    //   }
    //   if(script.parent === 'head'){
    //     dom.appendChild(head, el);
    //   } else if(script.parent === 'body'){
    //     dom.appendChild(body, el);
    //   }
    // })

  }
}
