import { NgModule } from '@angular/core';
import { IonicPageModule,IonicModule } from 'ionic-angular';
import { ColaboradorCorletPage } from './colaborador-corlet';

@NgModule({
  declarations: [
    ColaboradorCorletPage,
  ],
  imports: [
    IonicPageModule.forChild(ColaboradorCorletPage),
  ],
})
export  class ColaboradorCorletPageModule {}
