import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toasted } from '../../providers/toast';
import { AddSaborProvider } from '../../providers/add-sabor';
import { TamanhosProvider } from '../../providers/tamanhos';

@IonicPage()
@Component({
  selector: 'page-add-sabor',
  templateUrl: 'add-sabor.html',
})
export class AddSaborPage {
  public listaTamanhos = [];
  public idTam : any;
  preco:any;
  sabor:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanhos : TamanhosProvider, private toast : Toasted,private addSabor : AddSaborProvider) {
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
  }
  onChange(){
  }

  insert(){
    this.addSabor.insert(this.idTam, this.sabor, this.preco).subscribe(
      (data : any) => {
        console.log(data);
        this.toast.presentToast("Sabor adicionado com sucesso!");
      },
      (error : any) => {
        this.toast.presentToast(error);
        console.log(error);
      }
    )
  }

}
