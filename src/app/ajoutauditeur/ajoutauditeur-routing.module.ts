import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutauditeurPage } from './ajoutauditeur.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutauditeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutauditeurPageRoutingModule {}
