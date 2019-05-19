import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { ClienteProvider } from '../providers/cliente/cliente';
import { AgendaProvider } from '../providers/agenda/agenda';
import { PesquisaPipe } from '../pipes/pesquisa/pesquisa';
import { AgendamentoProvider } from '../providers/agendamento/agendamento';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    PesquisaPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteProvider,
    AgendaProvider,
    AgendamentoProvider,
    AgendamentoProvider
  ]
})
export class AppModule {}
