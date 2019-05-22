import { ClienteProvider } from '../../providers/cliente/cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
// import { Cliente } from '../criar-conta/criar-conta';


@IonicPage()
@Component({
  selector: 'page-login-cliente',
  templateUrl: 'login-cliente.html',
})
export class LoginClientePage {
  model: Cliente;

  // constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private clienteProvider: ClienteProvider) {
  //   this.model = new Cliente();
  // }

  constructor(public navCtrl: NavController, private toast: ToastController,  private clienteProvider: ClienteProvider) {
    this.model = new Cliente();
   }

  login() {
    this.clienteProvider.login(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
        this.navCtrl.push('MenuPage');
              })
      .catch((error: any) => {
        alert(error)
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}

export class Cliente {
  email: string;
  password: string;
}
