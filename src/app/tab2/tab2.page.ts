import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DemandService } from '../Service/demand.service';
import { FormationService } from '../Service/formation.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  p: number=0;

  pet: string = "puppies";
  isAndroid: boolean = false;

  // Formation
  formationvenir: any;
  formationencours:any;
  formationterminer:any;
  voirformatUser:any;

  constructor(
    platform: Platform,
    private format:FormationService,
    private voirdemandformat:DemandService
    ){
    this.isAndroid = platform.is('android'); // La Barre
  }

  ngOnInit(): void {

    // Formations en INITIER:::::::::::::::::
    this.format.getFormationavenir().subscribe(data=>{
      this.formationvenir=data;
    });

    // Formations en cours:::::::::::::::::
  this.format.getFormationencours().subscribe(data=>{
  this.formationencours=data;
});

    // Formations en Terminer:::::::::::::::::
    this.format.getFormationterminer().subscribe(data=>{
      this.formationterminer=data;
    });

     // Formations Par Utilisateur Connecter:::::::::::::::::
     this.voirdemandformat.VoirParUser(JSON.parse(localStorage.getItem("iduser")!)).subscribe(data=>{
      this.voirformatUser=data;
    });

// Formations Par ID:::::::::::::::::
//   this.service.getFormationid(idFormat).subscribe(data=>{
//   this.formationVoiId=data;
// });

}

}
