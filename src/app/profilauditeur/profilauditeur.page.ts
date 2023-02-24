import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../Service/utilisateur.service';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-profilauditeur',
  templateUrl: './profilauditeur.page.html',
  styleUrls: ['./profilauditeur.page.scss'],
})
export class ProfilauditeurPage implements OnInit {

  voiridutilisat:any;
  user: any;

  constructor(
    private storageService: StorageService,
    private utilisat: UtilisateurService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {

    // Formations Par ID:::::::::::::::::
      const id = +this.route.snapshot.params["id"];
      this.user = this.storageService.getUser();
      this.utilisat.voirUtilisateurId(this.user.id).subscribe(data=>{
      this.voiridutilisat=data;
    });


  }

}
