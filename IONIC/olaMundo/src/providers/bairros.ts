import { Injectable } from '@angular/core';
import { HttpProvider } from './http';


/*
  Generated class for the LoginProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BairrosProvider {

  constructor( public httpProvider : HttpProvider) {
  }
  public bairros(idCit : string){
    this.httpProvider.url = 'http://104.196.102.231/bairros/'+idCit;
    return this.httpProvider.get();
  }
}
