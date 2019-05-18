// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-login-cliente',
//   templateUrl: 'login-cliente.html',
// })

// export class LoginClientePage 
// {
// model: LoginClientePage

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     // this.model = new Login();
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LoginClientePage');
//   }

  
// }


import { ClienteProvider } from '../../providers/cliente/cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cliente } from '../criar-conta/criar-conta';


@IonicPage()
@Component({
  selector: 'page-login-cliente',
  templateUrl: 'login-cliente.html',
})
export class LoginClientePage {
  model: Cliente;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private clienteProvider: ClienteProvider) {
    this.model = new Cliente();
    this.model.email = 'sydney@fife';
    this.model.password = 'pistol';
  }

  login() {
    this.clienteProvider.login(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}

export class cliente {
  email: string;
  password: string;
}
