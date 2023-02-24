import { Component } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { ParticipantService } from '../Service/participant.service';
import { UtilisateurService } from '../Service/utilisateur.service';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  p:number=0;

  formationvenir: any; // Voir initier formation
  formationencours: any; // Voir encours formation
  formationVoiId: any; // Voir Par ID
  description: any;
  role: any;
  route: any;
  user: any;
  voiridutilisat: any;


  constructor(
    private authService: AuthService,
     private service : FormationService,
     private particip: ParticipantService,
     private utilisat: UtilisateurService,
     private storageService: StorageService,

     ) {



     }

// Déconnexion
     logout(): void {
      this.authService.logout().subscribe({
        next: res => {
          console.log(res);
          this.storageService.clean();
          this.route.navigate('/connexion')
        },
        error: err => {
          console.log(err);
        }
      });
    }


  ngOnInit(): void {

    // Utilisateur Par ID:::::::::::::::::
  //   this.user = this.storageService.getUser();
  //   this.utilisat.voirUtilisateurId(this.user.id).subscribe(data=>{
  //   this.voiridutilisat=data;
  // });

      // Formations en INITIER:::::::::::::::::
      this.service.getFormationavenir().subscribe(data=>{
        this.formationvenir=data;
        this.role=this.storageService.getUser().roles
        console.log(this.role)
      });

      // Formations en cours:::::::::::::::::
    this.service.getFormationencours().subscribe(data=>{
    this.formationencours=data;
    console.log(this.formationencours)
  });

  //this.reloadPage();

  }

// Rafraîchir page:::::::::::::::::
  reloadPage(): void {
    window.location.reload();
  }

  // Slide
  option = {
    slidesPerView: 1, // NOMBRE DE SLIDE PAR PAGE = 1
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
     autoplay:true,
  }



}
