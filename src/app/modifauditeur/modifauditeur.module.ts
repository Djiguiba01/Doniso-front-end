import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifauditeurPageRoutingModule } from './modifauditeur-routing.module';

import { ModifauditeurPage } from './modifauditeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifauditeurPageRoutingModule
  ],
  declarations: [ModifauditeurPage]
})
export class ModifauditeurPageModule {}
