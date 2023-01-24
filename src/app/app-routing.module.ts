import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },

  {
    path: '',
    loadChildren: () => import('./bienvenue/bienvenue.module').then(m => m.BienvenuePageModule)
  },
  {
    path: 'bienvenue',
    loadChildren: () => import('./bienvenue/bienvenue.module').then( m => m.BienvenuePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'detailformat',
    loadChildren: () => import('./detailformat/detailformat.module').then( m => m.DetailformatPageModule)
  },
  {
    path: 'participant',
    loadChildren: () => import('./participant/participant.module').then( m => m.ParticipantPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'ajoutformation',
    loadChildren: () => import('./ajoutformation/ajoutformation.module').then( m => m.AjoutformationPageModule)
  },
  {
    path: 'detailformateur',
    loadChildren: () => import('./detailformateur/detailformateur.module').then( m => m.DetailformateurPageModule)
  },
  {
    path: 'modiformateur',
    loadChildren: () => import('./modiformateur/modiformateur.module').then( m => m.ModiformateurPageModule)
  },
  {
    path: 'modiformation',
    loadChildren: () => import('./modiformation/modiformation.module').then( m => m.ModiformationPageModule)
  },
  {
    path: 'ajoutformateur',
    loadChildren: () => import('./ajoutformateur/ajoutformateur.module').then( m => m.AjoutformateurPageModule)
  },
  {
    path: 'ajoutauditeur',
    loadChildren: () => import('./ajoutauditeur/ajoutauditeur.module').then( m => m.AjoutauditeurPageModule)
  },
  {
    path: 'modifauditeur',
    loadChildren: () => import('./modifauditeur/modifauditeur.module').then( m => m.ModifauditeurPageModule)
  },
  {
    path: 'profilauditeur',
    loadChildren: () => import('./profilauditeur/profilauditeur.module').then( m => m.ProfilauditeurPageModule)
  },

  // Component
  // Par defaux
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
