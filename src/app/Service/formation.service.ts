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
          return this.http.get("http://localhost:8089/formation/regarder/encours")
        }

          // """"""""""""""""""Affiche tout les formations Terminer"""""""""""""
          getFormationterminer(): Observable<object>{
            return this.http.get("http://localhost:8089/formation/regarder/termine")
          }

     // """"""""""""""""""Affiche les formations Par_ID """""""""""""
     getFormationId(idFormat:number): Observable<Formation>{
      return this.http.get<Formation>(`http://localhost:8089/formation/voir/${idFormat}`)
    }



         // """"""""""""""""""Ajouter les formation """""""""""""
      AjoutFormat(titre:any,lieu:any,description:any,contact:any,heure:any,emailformateur:any ,datedebut:any,datefin:any, idutilisateur:number, formateur:string,file:any): Observable<any>{
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
            "datefin": datefin
            // "Etat": Etat,
        }
      ];
      data.append('formateur', formateur)
      data.append('formati', JSON.stringify(form).slice(1,JSON.stringify(form).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/formation/ajout/${idutilisateur}`, data);
      }

      //
       // """"""""""""""""""Mettre Etats Formations Encours """""""""""""
     postFormationstatus(idFormat:number,formationstatus:string): Observable<Formation>{
      return this.http.post<Formation>(`http://localhost:8089/formation/TERMINER/${idFormat}`,formationstatus)
    }

     // """"""""""""""""""Mettre Etats Formations Encours """""""""""""
     postFormateurstatus(idFormat:number,formationstatus:string): Observable<Formation>{
      return this.http.post<Formation>(`http://localhost:8089/formation/TERMINER/${idFormat}`,formationstatus)
    }

    // """"""""""""""""""Afficher Lieu  formation"""""""""""""
    VoirLieuFormation(): Observable<object>{
    return this.http.get("http://localhost:8089/formation/lieuformation")
  }

   // """"""""""""""""""Afficher etat formation formateur""""""""""""
   EtatFormationFormateur(): Observable<object>{
    return this.http.get("http://localhost:8089/formation/voirvalidformateur")
  }
   // """"""""""""""""""Mettre Etats Formations Encours """""""""""""
   postFormationFormateur(idFormat:number,formationstatus:string): Observable<Formation>{
    return this.http.post<Formation>(`http://localhost:8089/formation/VALIDER/${idFormat}`,formationstatus)
  }
}
