import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AgendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendaProvider {
  data: any;
  private API_URL = 'https://salaoapi2019.azurewebsites.net/api/agenda'

  constructor(public http: Http) {
  }

  getAll() {
    return new Promise((resolve, reject) => {

      let url = this.API_URL; 

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }


  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(
          'https://salaoapi2019.azurewebsites.net/api/agenda'
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
