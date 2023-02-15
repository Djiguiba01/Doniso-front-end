import { Component } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { ParticipantService } from '../Service/participant.service';
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


  constructor(
    private storageService: StorageService,
    private authService: AuthService,
     private service : FormationService,
     private particip: ParticipantService,
     ) {}

  ngOnInit(): void {

      // Formations en INITIER:::::::::::::::::
      this.service.getFormationavenir().subscribe(data=>{
        this.formationvenir=data;
      });

      // Formations en cours:::::::::::::::::
    this.service.getFormationencours().subscribe(data=>{
    this.formationencours=data;

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

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }


}
