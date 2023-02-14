import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage
  },
    // :::::::::::::
    {
      path: 'detailformat/:idFormat',
      loadChildren: () => import('../detailformat/detailformat.module').then( m => m.DetailformatPageModule)
    },
    {
      path: 'participant/:idFormat',
      loadChildren: () => import('../participant/participant.module').then( m => m.ParticipantPageModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
