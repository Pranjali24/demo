import { Component, OnInit } from '@angular/core';
import { SharedComponentService } from '../../../../commanMethods/shared-component.service';

@Component({
  selector: 'app-users-chat-list',
  templateUrl: './users-chat-list.component.html',
  styleUrls: ['./users-chat-list.component.scss']
})
export class UsersChatListComponent implements OnInit {

  constructor( private sharedComponent:SharedComponentService) { }

  ngOnInit(): void {}
  public changeSetting(dataSend:any): void{
    // Change Component through service
    this.sharedComponent.changeCompoent(dataSend)
  }



}
