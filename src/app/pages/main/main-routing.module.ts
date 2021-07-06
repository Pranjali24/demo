import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AudioCallComponent } from './audio-call/audio-call.component';
import { VideoCallComponent } from './video-call/video-call.component';

const routes: Routes = [

  {
    path : "",
    component : MainComponent,
    children : [
      { path : "index", component : HomeComponent },
      { path : "audio", component : AudioCallComponent },
      { path : "video", component : VideoCallComponent },
      { path : '', redirectTo:'index', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
