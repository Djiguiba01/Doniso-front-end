import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifauditeurPage } from './modifauditeur.page';

const routes: Routes = [
  {
    path: '',
    component: ModifauditeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifauditeurPageRoutingModule {}
