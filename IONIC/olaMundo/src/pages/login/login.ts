import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Toasted} from '../../providers/toast';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:string;
  senha:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast : Toasted) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.user === "igorgay" && this.senha === "verdade"){
      this.navCtrl.setRoot(HomePage);
    }else{
      this.toast.presentToast("Login ou senha incorretos");
    }
  }
}
