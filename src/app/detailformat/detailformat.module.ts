import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailformatPageRoutingModule } from './detailformat-routing.module';

import { DetailformatPage } from './detailformat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailformatPageRoutingModule
  ],
  declarations: [DetailformatPage]
})
export class DetailformatPageModule {}
