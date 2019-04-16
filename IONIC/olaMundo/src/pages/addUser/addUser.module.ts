import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUserPage } from './addUser';

@NgModule({
  declarations: [
    AddUserPage,
  ],
  imports: [
    IonicPageModule.forChild(AddUserPage),
  ],
})
export class AddUserPageModule {}
