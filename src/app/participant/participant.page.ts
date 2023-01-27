import { Component, OnInit } from '@angular/core';
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
tout:any;
  constructor(private service : ParticipantService) {}

  ngOnInit() {

  }
// Création méthode Sur le button Participation
  Ajoutpart(){
    this.service.AjoutParticipant(this.nom,this.deuxNom,this.sexe,this.contact,this.profession,this.email).subscribe(data =>{
            this.tout=data;
            console.log("ajout"+this.tout)
  
    });
  }
}
