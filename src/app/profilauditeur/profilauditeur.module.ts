import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilauditeurPageRoutingModule } from './profilauditeur-routing.module';

import { ProfilauditeurPage } from './profilauditeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilauditeurPageRoutingModule
  ],
  declarations: [ProfilauditeurPage]
})
export class ProfilauditeurPageModule {}
