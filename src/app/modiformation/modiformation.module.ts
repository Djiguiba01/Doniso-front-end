import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModiformationPageRoutingModule } from './modiformation-routing.module';

import { ModiformationPage } from './modiformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModiformationPageRoutingModule
  ],
  declarations: [ModiformationPage]
})
export class ModiformationPageModule {}
