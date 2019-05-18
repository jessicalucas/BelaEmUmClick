import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheUsuPage } from './detalhe-usu';

@NgModule({
  declarations: [
    DetalheUsuPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheUsuPage),
  ],
})
export class DetalheUsuPageModule {}
