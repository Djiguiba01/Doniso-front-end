import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormationService } from '../Service/formation.service';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-formationformateur',
  templateUrl: './formationformateur.page.html',
  styleUrls: ['./formationformateur.page.scss'],
})
export class FormationformateurPage implements OnInit {
  voirformation: any;
  format: any;
  etatformation: any;
  formatformateur:any;

  constructor(
    private user: UtilisateurService,
    private service: FormationService
  ) {}

  ngOnInit() {

     // Formation formateurs:::::::::::::::::
     this.service.EtatFormationFormateur().subscribe(data=>{
      this.formatformateur=data;
    });

    this.lesFormations();
    // Formations Par ID:::::::::::::::::
    // this.user
    //   .voirUtilisateurId(JSON.parse(localStorage.getItem('iduser')!))
    //   .subscribe((data) => {
    //     this.voirformation = data;
    //     console.log(this.voirformation);
    //   });
  }

  ModifierEtat(formation: any) {
    const statusformation = formation.etat;
    Swal.fire({
      heightAuto: false,
      text: 'Voulez-vous  ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#04CF72',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Modifier',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service
          .postFormationFormateur(formation, statusformation)
          .subscribe((data) => {
            this.etatformation = data;
            // if(data.status == true){
            Swal.fire({
              heightAuto: false,
              icon: 'success',
              text: 'data.message',
              showConfirmButton: false,
              timer: 2000,
            });
            // this.mesformations();
            this.lesFormations();
          });
      }
    });
  }


  lesFormations(){
    this.user
    .voirUtilisateurId(JSON.parse(localStorage.getItem('iduser')!))
    .subscribe((data) => {
      this.voirformation = data;
      console.log(this.voirformation);
    });
  }
}

