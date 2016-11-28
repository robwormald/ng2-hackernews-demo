import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'

export const config = {
    apiKey: "AIzaSyCL-WtNcnir0BVEtQQhFuyAW8wqi5vKALE",
    authDomain: "ng2-hn-demo.firebaseapp.com",
    databaseURL: "https://ng2-hn-demo.firebaseio.com",
    storageBucket: "ng2-hn-demo.appspot.com",
    messagingSenderId: "213840891601"
  };

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
  //  ListView,

  ],
  providers: [

  ]
})
export class ListModule {
  constructor(){

  }
}
