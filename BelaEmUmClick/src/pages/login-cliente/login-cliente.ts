import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-cliente',
  templateUrl: 'login-cliente.html',
})

export class LoginClientePage 
{
model: LoginClientePage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.model = new Login();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginClientePage');
  }

  
}
