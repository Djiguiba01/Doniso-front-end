import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandauditPageRoutingModule } from './demandaudit-routing.module';

import { DemandauditPage } from './demandaudit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandauditPageRoutingModule
  ],
  declarations: [DemandauditPage]
})
export class DemandauditPageModule {}
