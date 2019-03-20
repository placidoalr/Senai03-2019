import { TamanhosProvider } from './../../providers/tamanhos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TamanhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tamanhos',
  templateUrl: 'tamanhos.html',
})
export class TamanhosPage {
  public listaTamanhos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanhos : TamanhosProvider) {
  }

  ionViewDidLoad() {
    this.tamanhos.tamanhos().subscribe(
      (data : any) => {
        this.listaTamanhos = data;
      },
      (error : any) => {
        console.log(error);
      }
    )

    
  };

}
