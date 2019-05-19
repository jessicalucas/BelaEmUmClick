import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AgendamentoProvider {
  data: any;
  private API_URL = 'https://localhost:44355/api/carrinho'

  constructor(public http: Http) {
  }

  // getAll() {
  //   return new Promise((resolve, reject) => {

  //     let url = this.API_URL;

  //     this.http.get(url)
  //       .subscribe((result: any) => {
  //         resolve(result.json());
  //       },
  //         (error) => {
  //           reject(error.json());
  //         });
  //   });
  // }


  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(
          'https://localhost:44355/api/carrinho'
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  // get(key: string) {
  //   if (this.data) {
  //     return Promise.resolve(this.data);
  //   }
  //   return new Promise(resolve => {
  //     this.http
  //       .get(
  //         'https://localhost:44355/api/carrinho'
  //       )
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
  // }

  // update(result: any) {
  //   return new Promise((resolve, reject) => {
  //     let url = this.API_URL + result.id;
  //     let data = {
  //       "first_name": result.first_name,
  //       "last_name": result.last_name
  //     }

  //     this.http.put(url, result)
  //       .subscribe((result: any) => {
  //         resolve(result.json());
  //       },
  //       (error) => {
  //         reject(error.json());
  //       });
  //   });
  // }

  // excluir(id: string) {
  //   return new Promise((resolve, reject) => {
  //     let url = this.API_URL + id;

  //     this.http.delete(url)
  //       .subscribe((result: any) => {
  //         resolve(result.json());
  //       },
  //       (error) => {
  //         reject(error.json());
  //       });
  //   });
  // }
}
