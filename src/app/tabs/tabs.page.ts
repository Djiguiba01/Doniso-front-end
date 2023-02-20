import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  user: any;
  role: any;

  constructor(private storage:StorageService) {}

  ngOnInit(){
    this.user=this.storage.getUser()
    this.role=this.user.roles
    console.log(this.role)
    console.log(this.user)

  }

}
