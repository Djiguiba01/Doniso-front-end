import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../Class/formation';
import { Tab1Page } from '../tab1/tab1.page';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

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
     getFormationid(idFormat:number): Observable<Formation>{
      return this.http.get<Formation>("http://localhost:8089/formation/voir/${idFormat}")
    }

}
