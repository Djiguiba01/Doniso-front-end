import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutformateurPage } from './ajoutformateur.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutformateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutformateurPageRoutingModule {}
