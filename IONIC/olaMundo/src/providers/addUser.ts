import { HttpProvider } from './http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddUserProvider {

  constructor( public httpProvider : HttpProvider) {
    console.log('Hello AddUserProvider Provider');
  }
  public singIn(userName: string, password: string){
    let obj =  {
      userName : userName,
      password : password,
    };
    this.httpProvider.url = 'http://localhost:3000/addUser';
    return this.httpProvider.post(obj);

  }
}
