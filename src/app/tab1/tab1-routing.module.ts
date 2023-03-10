import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
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
  // {
  //   path: 'tab1',
  //   loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
