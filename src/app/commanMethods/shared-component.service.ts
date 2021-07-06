import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedComponentService {

  constructor() { }
  private componentSource=new BehaviorSubject<string>('users-chat-list');
  currentComponent=this.componentSource.asObservable()

  changeCompoent(componentName:string){
    this.componentSource.next(componentName)
  }

}
