import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteProvider } from './../../providers/cliente/cliente';

/**
 * Generated class for the CriarContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-conta',
  templateUrl: 'criar-conta.html',
})
export class CriarContaPage {
  model: Cliente;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private clienteProvider: ClienteProvider) {
    // this.model = new Cliente();
  }
  ngOnInit() {
    this.model = new Cliente();
    }

  createAccount() {
    this.clienteProvider.createAccount(this.model.nome, this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso.', position: 'botton', duration: 3000 }).present();

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário.', position: 'botton', duration: 3000 }).present();
      });
  }

}



// import { ClienteProvider} from './../../providers/cliente/cliente';
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

// @IonicPage()
// @Component({
//    selector: 'page-criar-conta',
//    templateUrl: 'criar-conta.html',
// })
// export class CriarContaPage {
//   model: Cliente;

//   constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private clienteProvider: ClienteProvider) {
//     this.model = new Cliente();
//     this.model.email = 'sydney@fife';
//     this.model.password = 'pistol';
//   }

//   // createAccount() {
//   //   this.clienteProvider.createAccount(this.model.email, this.model.password)
//   //     .then((result: any) => {
//   //       this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

//   //       //Salvar o token no Ionic Storage para usar em futuras requisições.
//   //       //Redirecionar o usuario para outra tela usando o navCtrl
//   //       //this.navCtrl.pop();
//   //       //this.navCtrl.setRoot()
//   //     })
//   //     .catch((error: any) => {
//   //       this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
//   //     });
//   // }


// }

export class Cliente {
  email: string;
  password: string;
  // CPF: string;
  nome: string;
}