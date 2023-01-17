import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailformatPage } from './detailformat.page';

const routes: Routes = [
  {
    path: '',
    component: DetailformatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailformatPageRoutingModule {}
