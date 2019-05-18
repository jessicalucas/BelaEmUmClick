// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheUsuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-detalhe-usu',
//   templateUrl: 'detalhe-usu.html',
// })
// export class DetalheUsuPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad DetalheUsuPage');
//   }

// }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
   selector: 'page-detalhe-usu',
   templateUrl: 'detalhe-usu.html',
})
export class DetalheUsuPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.data.user;
  }

}