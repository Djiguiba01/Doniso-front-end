import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailformateurPageRoutingModule } from './detailformateur-routing.module';

import { DetailformateurPage } from './detailformateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailformateurPageRoutingModule
  ],
  declarations: [DetailformateurPage]
})
export class DetailformateurPageModule {}
