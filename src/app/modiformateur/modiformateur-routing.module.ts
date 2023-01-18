import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModiformateurPage } from './modiformateur.page';

const routes: Routes = [
  {
    path: '',
    component: ModiformateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModiformateurPageRoutingModule {}
