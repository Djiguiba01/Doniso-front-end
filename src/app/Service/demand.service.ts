import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Demand } from '../Class/demand';

@Injectable({
  providedIn: 'root'
})
export class DemandService {
  env = environment;
  idDemand:any;

  constructor(private http:HttpClient) { }

  // """"""""""""""""""Affiche tout les Participants"""""""""""""
  getDemand(): Observable<object>{
    return this.http.get("http://localhost:8089/demandpart/voir/")
  }

   // """"""""""""""""""Affiche Participants par Id """""""""""""
   getDemandId(idDemand:number): Observable<Demand>{
    return this.http.get<Demand>(`http://localhost:8089/demandpart/voir/${idDemand}`)
  }

   // """"""""""""""""""Afficher Demande formation par User """""""""""""
  VoirParUser(idDemand:number): Observable<object>{
    return this.http.get(`http://localhost:8089/demandpart/voirformation/${idDemand}`)
  }

   // """"""""""""""""""Afficher tout Etat Demande formation"""""""""""""
   VoirTypeDemand(): Observable<object>{
    return this.http.get("http://localhost:8089/demandpart/typedemande")
  }

      // """"""""""""""""""Ajouter demande formation par user """""""""""""
      ajoutDemandeformat(structure:any,lieu:any,email:any,type:any,personnes:any,etatligne:any, file:any,iduser : number): Observable<any>{
        const data: FormData = new  FormData();
        // data.append('file', file);
        let form=[
          {
            "structure": structure,
            "lieu": lieu,
            "email": email,
            "type": type,
            "personnes":personnes,
            "etatligne":etatligne
        }
      ];
      data.append('file',file )
      data.append('donneesaudit', JSON.stringify(form).slice(1,JSON.stringify(form).lastIndexOf(']')));
      return this.http.post(`http://localhost:8089/demandpart/ajout/${iduser}`, data);

      }

}
