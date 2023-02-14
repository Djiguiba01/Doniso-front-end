import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }


   // """"""""""""""""""Affiche tout les Participants"""""""""""""
   getNotif(): Observable<object>{
    return this.http.get("http://localhost:8089/notification/voir")
  }
}
