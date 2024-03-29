// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-lista-usuario',
//   templateUrl: 'lista-usuario.html',
// })
// export class ListaUsuarioPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad ListaUsuarioPage');
//   }

// }


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
 selector: 'page-lista-usuario',
 templateUrl: 'lista-usuario.html',
})
export class ListaUsuarioPage {
  users: any[];
  page: number;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private clienteProvider: ClienteProvider) { }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
    this.getAllUsers(this.page);
  }

  getAllUsers(page: number) {
    this.clienteProvider.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.users.push(user);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.users.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  getUsers() {
    setTimeout(() => {
      this.page += 1;
      this.getAllUsers(this.page);
    }, 500);
  }

  openUser(id: number) {
    this.clienteProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('UserDetailPage', { user: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });

  }

  openCreateUser() {
    this.navCtrl.push('UserEditPage');
  }

  openEditUser(id: number) {
    this.clienteProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('UserEditPage', { user: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  deleteUser(user: any) {
    this.clienteProvider.remove(user.id)
      .then((result: any) => {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);

        this.toast.create({ message: 'Usuário excluído com sucesso.', position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}