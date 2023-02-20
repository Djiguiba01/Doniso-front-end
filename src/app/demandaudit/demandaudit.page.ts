import { Component, OnInit } from '@angular/core';
import { DemandService } from '../Service/demand.service';
import { ParticipantService } from '../Service/participant.service';

@Component({
  selector: 'app-demandaudit',
  templateUrl: './demandaudit.page.html',
  styleUrls: ['./demandaudit.page.scss'],
})
export class DemandauditPage implements OnInit {

  // Demand
  structure: any;
  lieu: any;
  email: any;
  type: any;
  personnes: any;
  etatligne: any;
  tout:any;
  file: any;

  Demandetype:any;

    // Méthode pour vider le champs lors d'ajout
    form1(){
      this.structure= '',
      this.lieu = '',
      this.email= '',
      this.type= '',
      this.personnes= '',
      this.etatligne= '',
      this.file= ''
    }

    constructor(
      private service : ParticipantService,
      private demandservice : DemandService
      ) {}

    ngOnInit() {

      // Voir Tout les Demandes Accepter:::::::::::::::::::::
    this.demandservice.VoirTypeDemand().subscribe((data) => {
      this.Demandetype = data;
    });

    }
    // Ajout
    Ajoutformation(){
      // console.log(this.structure)
      // Méthode d'ajout Participant
      this.demandservice.ajoutDemandeformat(this.structure,this.lieu,this.email,this.type,this.personnes,this.etatligne,this.file,JSON.parse(localStorage.getItem("iduser")!)).subscribe(data =>{
        this.tout=data;
        console.log("ajout"+this.tout)
        // Vider le champs Quand on clique sur button
        this.form1();
      });


    }
    // Image:::::::::::::
    fileChangm(event: any) {
      this.file = event.target.files[0]
      console.log(this.file)
      }

      // Rafraîchir page:::::::::::::::::
      reloadPage(): void {
        window.location.reload();
      }

  }
