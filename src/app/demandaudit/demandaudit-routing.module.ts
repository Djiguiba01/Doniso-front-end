import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandauditPage } from './demandaudit.page';

const routes: Routes = [
  {
    path: '',
    component: DemandauditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandauditPageRoutingModule {}
