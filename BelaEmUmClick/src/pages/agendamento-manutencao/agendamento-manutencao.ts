import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendamentoManutencaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agendamento-manutencao',
  templateUrl: 'agendamento-manutencao.html',
})
export class AgendamentoManutencaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendamentoManutencaoPage');
  }

  // presentPopover(myEvent) {
  //   let popover = this.popoverCtrl.create("YourPopoverPage");
  //   popover.present({
  //     ev: myEvent
  //   });
  // }
}
