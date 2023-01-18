import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilauditeurPage } from './profilauditeur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilauditeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilauditeurPageRoutingModule {}
