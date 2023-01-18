import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutformateurPageRoutingModule } from './ajoutformateur-routing.module';

import { AjoutformateurPage } from './ajoutformateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutformateurPageRoutingModule
  ],
  declarations: [AjoutformateurPage]
})
export class AjoutformateurPageModule {}
