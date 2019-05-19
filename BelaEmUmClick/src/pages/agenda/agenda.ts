import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { AgendaProvider } from '../../providers/agenda/agenda';

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
  public agenda1: any[];
 public result: any;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  private agenda: Array<Object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private agendaProvider: AgendaProvider) {
    this.getAll();
  }

    ionViewDidEnter() {
      this.agenda1 = [];
    }
  
    getAll() {
      this.agendaProvider.load()
        .then(data => {
          this.agenda1 = data;
          this.result = this.agenda1;
        });
    }

    buscarAgenda(){
      this.agendaProvider.getAll()
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.agenda1.push(user);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.agenda1.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar agenda. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
    
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

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AgendaPage');
  // }

}
