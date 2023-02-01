import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'detailformateur/:id',
    loadChildren: () => import('../detailformateur/detailformateur.module').then( m => m.DetailformateurPageModule)
  },
  {
    path: 'profilauditeur/:id',
    loadChildren: () => import('../profilauditeur/profilauditeur.module').then( m => m.ProfilauditeurPageModule)
  },
  {
    path: 'detailformat/:idFormat',
    loadChildren: () => import('../detailformat/detailformat.module').then( m => m.DetailformatPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
