import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationformateurPage } from './formationformateur.page';

const routes: Routes = [
  {
    path: '',
    component: FormationformateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationformateurPageRoutingModule {}
