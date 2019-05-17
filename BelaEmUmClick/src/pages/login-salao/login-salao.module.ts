import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSalaoPage } from './login-salao';

@NgModule({
  declarations: [
    LoginSalaoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSalaoPage),
  ],
})
export class LoginSalaoPageModule {
  email: string;
    senha : string;    
}
