import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedComponentService } from '../../../../commanMethods/shared-component.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _router:Router, private sharedComponent:SharedComponentService) { }

  ngOnInit(): void {
  }

   // back to Home Route
   backHome(){
    this._router.navigate([""])
    this.sharedComponent.changeCompoent('userlist')
  }

}
