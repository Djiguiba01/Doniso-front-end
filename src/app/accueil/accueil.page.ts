import { Component, OnInit } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { ParticipantService } from '../Service/participant.service';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  p:number=0;

  formationvenir: any; // Voir initier formation
  formationencours: any; // Voir encours formation
  formationVoiId: any; // Voir Par ID

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
     private service : FormationService,
     private particip: ParticipantService,
  ) { }

  ngOnInit() {

    // Formations en INITIER:::::::::::::::::
    this.service.getFormationavenir().subscribe(data=>{
      this.formationvenir=data;
    });

    // Formations en cours:::::::::::::::::
  this.service.getFormationencours().subscribe(data=>{
  this.formationencours=data;
});

  }

  // Slide
  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }

}
