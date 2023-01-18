import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailformateurPage } from './detailformateur.page';

const routes: Routes = [
  {
    path: '',
    component: DetailformateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailformateurPageRoutingModule {}
