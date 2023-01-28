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

  constructor( private route:ActivatedRoute, private formateur: UtilisateurService,
    private service : FormationService, private commandservice : CommentaireService) { }

  ngOnInit() {
    
  // Formations Par ID:::::::::::::::::
  const idFormat = +this.route.snapshot.params["idFormat"];
  this.service.getFormationId(idFormat).subscribe(data=>{
  this.voiridform=data;
});

// Commentaire Par ID:::::::::::::::::
//   this.commandservice.getCommentaireid(idCom).subscribe(data=>{
//   this.commentaireVoiId=data;
// });

}
}
