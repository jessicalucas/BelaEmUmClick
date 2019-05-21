import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    
   }

  abrirAgenda() {
    this.navCtrl.push('AgendaPage')
  }

  abrirAgendmento(){
    this.navCtrl.push('AgendamentoPage')
  }

  openCreateAccount() {
    this.navCtrl.push('CriarContaPage');
  }

  openLogin() {
    this.navCtrl.push('LoginClientePage');
  }
}