import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedComponentService } from '../../../../commanMethods/shared-component.service';


@Component({
  selector: 'app-blocked-contact',
  templateUrl: './blocked-contact.component.html',
  styleUrls: ['./blocked-contact.component.scss']
})
export class BlockedContactComponent implements OnInit {

  constructor(private _router:Router, private sharedComponent:SharedComponentService) { }

  ngOnInit(): void {
  }

  // back to Home Route
  backHome(){
    this._router.navigate([""])
    this.sharedComponent.changeCompoent('userlist')
  }

}
