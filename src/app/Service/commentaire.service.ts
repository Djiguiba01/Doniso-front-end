import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../Class/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http:HttpClient) { }

    // """"""""""""""""""Affiche tout les Commentaires"""""""""""""
    getCommentaire(): Observable<object>{
      return this.http.get("http://localhost:8089/commentaire/voir/")
    }

    
     // """"""""""""""""""Affiche les Commentaire Par_ID """""""""""""
     getCommentaireid(idCom:number): Observable<Commentaire>{
      return this.http.get<Commentaire>("http://localhost:8089/commentaire/voir/${idCom}")
    }

    commenter(message : string, idutilisateur : number, idformation : number) {
      const data = new FormData();
      data.append('description',message);
      return this.http.post(`http://localhost:8089/commentaire/ajout/${idutilisateur}/${idformation}`,data);
    }

}
