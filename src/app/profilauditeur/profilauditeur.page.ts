import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-profilauditeur',
  templateUrl: './profilauditeur.page.html',
  styleUrls: ['./profilauditeur.page.scss'],
})
export class ProfilauditeurPage implements OnInit {

  voiridutilisat:any;

  constructor(private utilisat: UtilisateurService, private route:ActivatedRoute) { }

  ngOnInit() {

    // Formations Par ID:::::::::::::::::
      const id = +this.route.snapshot.params["id"];
      this.utilisat.voirToutUtilisateur(id).subscribe(data=>{
      this.voiridutilisat=data;
    });

  }

}
