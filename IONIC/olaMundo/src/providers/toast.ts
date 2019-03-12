import { Injectable } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';

@Injectable()
export class Toasted{
  constructor(private toastCtrl : ToastController){
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'dorgas',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
