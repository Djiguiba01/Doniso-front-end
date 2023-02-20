import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationformateurPageRoutingModule } from './formationformateur-routing.module';

import { FormationformateurPage } from './formationformateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationformateurPageRoutingModule
  ],
  declarations: [FormationformateurPage]
})
export class FormationformateurPageModule {}
