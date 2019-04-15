import { HttpProvider } from './http';
import { Injectable } from '@angular/core';

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
    this.httpProvider.url = 'http://localhost:3000/logon';
    return this.httpProvider.post(obj);
    
  }
}