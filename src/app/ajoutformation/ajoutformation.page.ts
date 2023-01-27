import { Component, OnInit } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.page.html',
  styleUrls: ['./ajoutformation.page.scss'],
})
export class AjoutformationPage implements OnInit {

  // Formation
    idFormat:any;
    titre!: any;
    lieu!: any;
    description!: any;
    contact!: any;
    heure!:any;
    emailformateur!: any;
    datedebut!: any;
    datefin!: any;
    // image: any;
    Etat: any;
    tout:any
  image: any;

  // Formateur
  formateurs:any;

  constructor(private service: FormationService, private idformateur: UtilisateurService) {}

  ngOnInit() {
    this.service.getFormationencours().subscribe(data=>{
      this.formateurs=data;
    });
  }

  form=[
    {
      "titre": this.titre,
      "lieu": this.lieu,
      "description": this.description,
      "contact": this.contact,
      "heure": this.heure,
      "emailformateur": this.emailformateur,
      "datedebut": this.datedebut,
      "datefin": this.datefin, 
      // "Etat": Etat,                                                                                                   
  }
]

recupererImage(event:any){
  this.image = event.target["files"][0];
  console.log(this.image)
}
  // Création méthode Sur le button formation
  Ajoutformation(){
    this.service.AjoutFormat(this.image,this.titre,this.lieu,this.description,this.contact,this.heure,this.emailformateur,this.datedebut,this.datefin,this.idFormat).subscribe(data =>{
      this.tout=data;
      console.log("ajout"+this.tout)
});
}

}
