import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formation } from '../Class/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  env = environment;

  constructor(private http:HttpClient) { }

    // """"""""""""""""""Affiche tout les formations"""""""""""""
    getFormation(): Observable<object>{
      return this.http.get("http://localhost:8089/formation/voir/")
    }

     // """"""""""""""""""Affiche tout les formations à venir"""""""""""""
     getFormationavenir(): Observable<object>{
      return this.http.get("http://localhost:8089/formation/regarder/initier")
    }

        // """"""""""""""""""Affiche tout les formations_encours"""""""""""""
        getFormationencours(): Observable<object>{
          return this.http.get(" http://localhost:8089/formation/regarder/encours")
        }

     // """"""""""""""""""Affiche les formations Par_ID """""""""""""
     getFormationid(idFormat:number): Observable<any>{
      return this.http.get(`${this.env.api}/utilisateur/postulantstires/${idFormat}`);
    }

         // """"""""""""""""""Ajouter les formation """""""""""""
      AjoutFormat(file:any,titre:any,lieu:any,description:any,contact:any,heure:any,emailformateur:any ,datedebut:any,datefin:any, idutilisateur:number, formateur:string): Observable<any>{
        const data: FormData = new  FormData();
        data.append('file', file);
        let form=[
          {
            "titre": titre,
            "lieu": lieu,
            "description": description,
            "contact": contact,
            "heure":heure,
            "emailformateur": emailformateur,
            "datedebut": datedebut,
            "datefin": datefin,
            // "Etat": Etat,                                                                                                   
        }
      ];
      data.append('formateur', formateur)
      data.append('formati', JSON.stringify(form).slice(1,JSON.stringify(form).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/formation/ajout/${idutilisateur}`, data);
      }

      // 


}
