import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  private agenda: Array<Object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.agenda = [
      {
        "cliente": "Ricardo",
        "dia": "12/03/2000",
        "horario": "17:40"
      },
      {
        "cliente": "João",
        "dia": "12/03/2000",
        "horario": "17:00"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
