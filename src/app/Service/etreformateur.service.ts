import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtreformateurService {

  constructor(private http:HttpClient) { }


   // """"""""""""""""""Ajouter demande formation par user """""""""""""
   ajoutDemandeformat(email:any,file:any): Observable<any>{
    const data: FormData = new  FormData();
    // data.append('file', file);
    let form=[
      {
        "email": email,
    }
  ];
  data.append('file',file )
  data.append('donneesaudit', JSON.stringify(form).slice(1,JSON.stringify(form).lastIndexOf(']')));
  return this.http.post("http://localhost:8089/demandetreformateur/ajout", data);

  }

}
