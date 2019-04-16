import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toasted } from '../../providers/toast';
import { AddUserProvider } from '../../providers/addUser';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-addUser',
  templateUrl: 'addUser.html',
})
export class AddUserPage {

  user:string;
  senha:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast : Toasted, private addUser : AddUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  register(){
    this.addUser.singIn(this.user, this.senha).subscribe(
      (data : any) => {
        this.navCtrl.setRoot(LoginPage);
      },
      (error : any) => {
        this.toast.presentToast("Usuário já existe!");
        console.log(error);
      }
    )
  };
}
