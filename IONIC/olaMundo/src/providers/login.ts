import { Injectable } from '@angular/core';
import { HttpProvider } from './http';


/*
  Generated class for the LoginProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor( public httpProvider : HttpProvider) {
    console.log('Hello LoginProvider Provider');
  }
  public singIn(userName: string, password: string){
    let obj =  {
      userName : userName,
      password : password,
    };
    return this.httpProvider.post(obj);
    
  }
}