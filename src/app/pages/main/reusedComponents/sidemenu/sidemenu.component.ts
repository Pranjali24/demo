import { Component, OnInit } from '@angular/core';
import { SharedComponentService } from '../../../../commanMethods/shared-component.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor( private sharedComponent:SharedComponentService) { }

  userListDisplay: boolean = true;
  profileDisplay :  boolean = false;
  settingDisplay :  boolean = false;
  themeColorDisplay : boolean = false;
  blockedContactDisplay : boolean =false;

  ngOnInit(): void {

  //  Change component based on user click
    this.sharedComponent.currentComponent.subscribe(getComponent=>{
      if(getComponent==="profile"){
        this.profileDisplay=true;
       this.settingDisplay =false;
       this.userListDisplay= false;
       this.themeColorDisplay=false;
       this.blockedContactDisplay=false;

      }else if(getComponent==="setting"){
        this.settingDisplay =true;
        this.profileDisplay=false;
        this.userListDisplay= false;
        this.themeColorDisplay=false;
        this.blockedContactDisplay=false;
      }
      else if(getComponent==="blockcontact"){
        this.blockedContactDisplay=true;
        this.settingDisplay =false;
        this.profileDisplay=false;
        this.userListDisplay= false;
        this.themeColorDisplay=false;
      }
      else if(getComponent==="themecolor"){
        this.themeColorDisplay=true;
        this.settingDisplay =false;
        this.profileDisplay=false;
        this.userListDisplay= false;
        this.blockedContactDisplay=false;
      }else{
        this.userListDisplay= true;
        this.settingDisplay =false;
        this.profileDisplay=false;
        this.themeColorDisplay=false;
        this.blockedContactDisplay=false;
      }
    })

  }

}
