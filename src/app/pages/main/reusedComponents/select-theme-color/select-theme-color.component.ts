import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedComponentService } from '../../../../commanMethods/shared-component.service';

@Component({
  selector: 'app-select-theme-color',
  templateUrl: './select-theme-color.component.html',
  styleUrls: ['./select-theme-color.component.scss']
})
export class SelectThemeColorComponent implements OnInit {

  constructor(private _router:Router, private sharedComponent:SharedComponentService) { }

  ngOnInit(): void {
  }

  // back to Home Route
 backHome(){
  this._router.navigate([""])
  this.sharedComponent.changeCompoent('userlist')
}
}
