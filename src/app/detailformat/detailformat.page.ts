import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentaireService } from '../Service/commentaire.service';
import { FormationService } from '../Service/formation.service';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-detailformat',
  templateUrl: './detailformat.page.html',
  styleUrls: ['./detailformat.page.scss'],
})
export class DetailformatPage implements OnInit {

  voiridform: any;
  commentaireVoiId: any;
  message: any;
  idFormat!: number;
  resultat : any;

  constructor( private route:ActivatedRoute, private formateur: UtilisateurService,
    private service : FormationService, private commandservice : CommentaireService) { }

  ngOnInit() {
    
  // Formations Par ID:::::::::::::::::
  const idFormat = +this.route.snapshot.params["idFormat"];
  this.service.getFormationId(idFormat).subscribe(data=>{

    this.voiridform = data
    console.log(this.voiridform)

    this.idFormat = this.voiridform.id
});

// Commentaire Par ID:::::::::::::::::
//   this.commandservice.getCommentaireid(idCom).subscribe(data=>{
//   this.commentaireVoiId=data;
// });


}

// Méthode ajout connecter au button
commenter(message : string, idf : number) {
  // il prend en compte  id de user(idser) connecter et id(idf) de la formation
  this.commandservice.commenter(message,JSON.parse(localStorage.getItem("iduser")!),idf).subscribe(data => {
    this.resultat = data;
  })
}

}
