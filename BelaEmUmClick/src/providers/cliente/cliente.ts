// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5';
// import { Observable } from 'rxjs/Observablek';

@Injectable()
export class ClienteProvider {
  private API_URL = 'https://salaoapi2019.azurewebsites.net/api/usuario/'


  constructor(public http: Http) { }

  // obterCliente(documento: string): Observable<ClientData[]> {
  //   return this.http.get<ClientData[]>(
  //     `${documento}`
  //   );
  // }

  createAccount(email: string, password: string, nome: string) {

    password = Md5.hashStr(password).toString();
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password,
        // CPF: CPF,
        nome: nome
      };
      let options = new RequestOptions({ params: { 'email': email, 'senha': password,'nome':nome } });
      this.http.post(this.API_URL, options)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };
      let options = new RequestOptions({ params: { 'email': email, 'senha': password } });
      this.http.get(this.API_URL + "1", options)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  getAll(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users/?per_page=10&page=' + page;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';

      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + user.id;
      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }

      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
}