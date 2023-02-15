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
  // file:any;
  tout:any;
  file: any;
    constructor(private service : ParticipantService, private demandservice : DemandService) {}

    ngOnInit() {

    }
    // Ajout
    Ajoutformation(){
      console.log(this.structure)
      console.log(this.lieu)
      console.log(this.email)
      console.log(this.type)
      console.log(this.personnes)
      // console.log(this.AuditDemand)
      console.log(this.file)


      this.demandservice.ajoutDemandeformat(this.structure,this.lieu,this.email,this.type,this.personnes,this.file,JSON.parse(localStorage.getItem("iduser")!)).subscribe(data =>{
        this.tout=data;
        console.log("ajout"+this.tout)
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
