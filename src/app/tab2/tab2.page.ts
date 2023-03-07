import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DemandService } from '../Service/demand.service';
import { EtreformateurService } from '../Service/etreformateur.service';
import { FormationService } from '../Service/formation.service';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

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
  tout: any;
  email: any;
  idFormat: any;
  file: any;
  role:any;

  // Méthode pour vider le champs lors d'ajout
  form1(){
    this.email= '',
    this.file= ''
  }

  constructor(
    platform: Platform,
    private format:FormationService,
    private voirdemandformat:DemandService,
    private etreformateur: EtreformateurService,
    private storageService: StorageService,
    private authService: AuthService
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

// Création méthode Sur le button Participation
Ajoutpart(){
  this.etreformateur.ajoutDemandeformat(this.email, this.file).subscribe(data =>{
          this.tout=data;
          // console.log("ajout"+this.tout)
          this.form1();
  });
  // Vider le champs Quand on clique sur button
}
    // Image:::::::::::::
    fileChangm(event: any) {
      this.file = event.target.files[0]
      console.log(this.file)
      }




}
