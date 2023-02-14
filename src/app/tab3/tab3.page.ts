import { Component, OnInit } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { NotificationService } from '../Service/notification.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  Notitfcat:any;
  formationvenir:any;

  p: number=0;
  notif:any;
  constructor(
    private noti:NotificationService,
    private service: FormationService
  ) {}

  ngOnInit(): void {
   // Tout notifications:::::::::::::::::
   this.noti.getNotif().subscribe(data=>{
    this.Notitfcat=data;
  });

   // Formations en INITIER:::::::::::::::::
   this.service.getFormationavenir().subscribe(data=>{
    this.formationvenir=data;
  });

}

}
