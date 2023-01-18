import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModiformateurPageRoutingModule } from './modiformateur-routing.module';

import { ModiformateurPage } from './modiformateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModiformateurPageRoutingModule
  ],
  declarations: [ModiformateurPage]
})
export class ModiformateurPageModule {}
