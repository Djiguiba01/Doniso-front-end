import { Component, OnInit } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { UtilisateurService } from '../Service/utilisateur.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // Utilisateurs
  admintout:any;
  formateur: any;
  auditeur:any;
  idutilisateur! : any

  // Formations
  formationvenir:any;
  formationencours:any;
  formationterminer:any;

  constructor(private formateurserv: UtilisateurService, private format: FormationService,private storageService: StorageService) { }

  ngOnInit() {

       // USER Voir tout les Admin:::::::::::::::::::::
       this.formateurserv.voirFormateuradmin().subscribe(data=>{
        this.admintout=data;
        console.log(this.admintout);
      });
      this.idutilisateur = JSON.parse(localStorage.getItem("auth-user")!).id;
      console.log(localStorage.getItem("auth-user"))

     // USER Voir tout les formateurs:::::::::::::::::::::
     this.formateurserv.voirFormateurformateur().subscribe(data=>{
      this.formateur=data;
      console.log(this.formateur);
    });
    this.idutilisateur = JSON.parse(localStorage.getItem("auth-user")!).id;
    console.log(localStorage.getItem("auth-user"))

     // USER Voir tout les Auditeurs:::::::::::::::::::::
     this.formateurserv.voirFormateurauditeur().subscribe(data=>{
      this.auditeur=data;
      console.log(this.auditeur);
    });
    this.idutilisateur = JSON.parse(localStorage.getItem("auth-user")!)[0].id;
    console.log(localStorage.getItem("auth-user"))
    console.log(this.idutilisateur)

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

  }

}
