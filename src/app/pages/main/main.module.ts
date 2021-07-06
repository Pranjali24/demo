import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { SidemenuComponent } from './reusedComponents/sidemenu/sidemenu.component';
import { TopStatusBarComponent } from './reusedComponents/top-status-bar/top-status-bar.component';
import { ChatBoxComponent } from './reusedComponents/chat-box/chat-box.component';
import { ProfileComponent } from './reusedComponents/profile/profile.component';
import { UsersChatListComponent } from './reusedComponents/users-chat-list/users-chat-list.component';
import { SettingsComponent } from './reusedComponents/settings/settings.component';
import { AudioCallComponent } from './audio-call/audio-call.component';
import { MenuComponent } from './reusedComponents/menu/menu.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { SelectThemeColorComponent } from './reusedComponents/select-theme-color/select-theme-color.component';
import { BlockedContactComponent } from './reusedComponents/blocked-contact/blocked-contact.component';


@NgModule({
  declarations: [MainComponent, HomeComponent, SidemenuComponent, TopStatusBarComponent, ChatBoxComponent, ProfileComponent, UsersChatListComponent, SettingsComponent, AudioCallComponent, MenuComponent, VideoCallComponent, SelectThemeColorComponent, BlockedContactComponent],
  imports: [
    CommonModule,
    SwiperModule,
    PickerModule,
    FormsModule,
    MainRoutingModule
  ],
  bootstrap : [MainComponent]

})
export class MainModule { }
