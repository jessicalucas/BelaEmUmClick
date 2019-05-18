// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-editar-usuario',
//   templateUrl: 'editar-usuario.html',
// })
// export class EditarUsuarioPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad EditarUsuarioPage');
//   }

// }


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
    selector: 'page-editar-usuario',
   templateUrl: 'editar-usuario.html',
})
export class EditarUsuarioPage {
  model: Cliente;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private clienteProvider: ClienteProvider ) {
    if (this.navParams.data.user) {
      this.model = this.navParams.data.user;
    } else {
      this.model = new Cliente();
    }
  }

  save() {
    this.saveUser()
      .then(() => {
        this.toast.create({ message: 'Usuário salvo com sucesso.', position: 'botton', duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      })
  }

  private saveUser() {
    if (this.model.id) {
      return this.clienteProvider.update(this.model);
    } else {
      return this.clienteProvider.insert(this.model);
    }
  }

}

export class Cliente {
  id: number;
  nome: string;
}