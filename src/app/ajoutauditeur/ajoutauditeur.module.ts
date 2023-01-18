import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutauditeurPageRoutingModule } from './ajoutauditeur-routing.module';

import { AjoutauditeurPage } from './ajoutauditeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutauditeurPageRoutingModule
  ],
  declarations: [AjoutauditeurPage]
})
export class AjoutauditeurPageModule {}
