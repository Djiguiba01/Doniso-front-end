import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../Service/formation.service';
import { ParticipantService } from '../Service/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.page.html',
  styleUrls: ['./participant.page.scss'],
})
export class ParticipantPage implements OnInit {
nom: any;
deuxNom: any;
sexe: any;
contact: any;
profession: any;
email: any;
idFormat:any;
tout:any;
idPart:any;

voiridparticip:any;

  // Méthode pour vider le champs lors d'ajout
  form1(){
    this.nom= '',
    this.deuxNom = '',
    this.sexe= '',
    this.contact= '',
    this.profession= '',
    this.email= ''
  }

  constructor(
    private route:ActivatedRoute,
    private service : ParticipantService,
    private p :FormationService
    ) {}

  ngOnInit() {

   // Participant Par ID:::::::::::::::::
  const idPart = +this.route.snapshot.params["idPart"];
  this.idFormat = +this.route.snapshot.params["idFormat"];
  this.service.getParticipantid(idPart).subscribe(data=>{
  this.voiridparticip=data;
});


  }
// Création méthode Sur le button Participation
  Ajoutpart(){
    this.service.AjoutParticipant(this.nom,this.deuxNom,this.sexe,this.profession,this.email, this.idFormat).subscribe(data =>{
            this.tout=data;
            console.log("ajout"+this.tout)

            this.form1();
    });
    // Vider le champs Quand on clique sur button
  }
}
