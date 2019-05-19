import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { AgendaProvider } from '../../providers/agenda/agenda';
import { AgendamentoProvider } from '../../providers/agendamento/agendamento';

@IonicPage()
@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html',
})
export class AgendamentoPage {
  public agenda1: any[];
  public result: any;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private agendaProvider: AgendaProvider, private agendamentoProvider: AgendamentoProvider) {
    this.getAll();
  }

  ionViewDidEnter() {
    this.agenda1 = [];
  }

  getAll() {
    this.agendamentoProvider.load()
      .then(data => {
        this.agenda1 = data;
        this.result = this.agenda1;
      });
  }

  novoRegistro() {
    this.navCtrl.push('AgendamentoManutencaoPage');
  }

  editarRegistro(contact: any) {
    this.navCtrl.push('AgendamentoManutencaoPage', { contact: contact });
  }

  // excluirRegistro(key: string) {
  //   if (key) {
  //     this.agendamentoProvider.excluir(key)
  //       .then(() => {
  //         this.toast.create({ message: 'Removido com sucesso.', duration: 3000 }).present();
  //       })
  //       .catch(() => {
  //         this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
  //       });
  //   }
  // }

  // buscarAgenda() {
  //   this.agendaProvider.getAll()
  //     .then((result: any) => {
  //       for (var i = 0; i < result.data.length; i++) {
  //         var user = result.data[i];
  //         this.agenda1.push(user);
  //       }

  //       if (this.infiniteScroll) {
  //         this.infiniteScroll.complete();
  //         if (this.agenda1.length == result.total) {
  //           this.infiniteScroll.enable(false);
  //         }
  //       }
  //     })
  //     .catch((error: any) => {
  //       this.toast.create({ message: 'Erro ao listar agenda. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
  //     });

  // }
}
