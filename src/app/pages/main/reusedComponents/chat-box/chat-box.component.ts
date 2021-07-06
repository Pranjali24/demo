import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  emojiVisiable:any;
  message = '';
  constructor() { }
  ngOnInit(): void {

    
  }
  submitMessage(event:any){
     this.message = '';
  }
  emojiClicked(event:any){

    this.message+= event.emoji.native
  }

}
