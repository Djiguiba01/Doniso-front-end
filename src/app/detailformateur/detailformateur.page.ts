import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-detailformateur',
  templateUrl: './detailformateur.page.html',
  styleUrls: ['./detailformateur.page.scss'],
})
export class DetailformateurPage implements OnInit {

  voiridutilisat:any;

  constructor(private route:ActivatedRoute, private utilisat: UtilisateurService) { }

  ngOnInit() {

    // Formations Par ID:::::::::::::::::
  const id = +this.route.snapshot.params["id"];
  this.utilisat.voirUtilisateurId(id).subscribe(data=>{
  this.voiridutilisat=data;
});

  }

}
