import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutformationPage } from './ajoutformation.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutformationPageRoutingModule {}
