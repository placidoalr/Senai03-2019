import { HttpProvider } from './http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddSaborProvider {

  constructor(public httpProvider: HttpProvider) {
    console.log('Hello AddSaborProvider Provider');
  }
  public insert(tamanho : string, sabor : string, preco : any){
    let obj = {
      tamanho : tamanho,
      sabor : sabor,
      preco : preco
    };
    console.log(obj);
    this.httpProvider.url = 'http://localhost:3000/addSabor';
    return this.httpProvider.post(obj);
  }

}
