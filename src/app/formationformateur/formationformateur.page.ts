import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-formationformateur',
  templateUrl: './formationformateur.page.html',
  styleUrls: ['./formationformateur.page.scss'],
})
export class FormationformateurPage implements OnInit {

  voirformation:any;

  constructor(
    private user:UtilisateurService,
  ) { }

  ngOnInit() {

      // Formations Par ID:::::::::::::::::
        // Participant Par ID:::::::::::::::::
  this.user.voirUtilisateurId(JSON.parse(localStorage.getItem("iduser")!)).subscribe(data=>{
  this.voirformation=data;
  console.log(this.voirformation)
});

  }

}
