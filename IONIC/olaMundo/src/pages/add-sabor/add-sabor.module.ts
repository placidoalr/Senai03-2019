import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSaborPage } from './add-sabor';

@NgModule({
  declarations: [
    AddSaborPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSaborPage),
  ],
})
export class AddSaborPageModule {}
