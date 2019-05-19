import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendamentoManutencaoPage } from './agendamento-manutencao';

@NgModule({
  declarations: [
    AgendamentoManutencaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendamentoManutencaoPage),
  ],
})
export class AgendamentoManutencaoPageModule {}
