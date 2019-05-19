import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PesquisaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pesquisa',
})
export class PesquisaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], nome: string): any[] {
    if(!items) return [];
    if(!nome) return items;
    nome = nome.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(nome);
    });
  }
}