import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutformationPageRoutingModule } from './ajoutformation-routing.module';

import { AjoutformationPage } from './ajoutformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutformationPageRoutingModule
  ],
  declarations: [AjoutformationPage]
})
export class AjoutformationPageModule {}
