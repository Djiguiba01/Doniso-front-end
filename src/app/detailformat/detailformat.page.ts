import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../Service/commentaire.service';
import { FormationService } from '../Service/formation.service';

@Component({
  selector: 'app-detailformat',
  templateUrl: './detailformat.page.html',
  styleUrls: ['./detailformat.page.scss'],
})
export class DetailformatPage implements OnInit {

  formationVoiId: any;
  commentaireVoiId: any;

  constructor( private service : FormationService, private commandservice : CommentaireService) { }

  ngOnInit() {
    
  // Formations Par ID:::::::::::::::::
//   this.service.getFormationid(idFormat).subscribe(data=>{
//   this.formationVoiId=data;
// });

// Commentaire Par ID:::::::::::::::::
//   this.commandservice.getCommentaireid(idCom).subscribe(data=>{
//   this.commentaireVoiId=data;
// });

}
}
