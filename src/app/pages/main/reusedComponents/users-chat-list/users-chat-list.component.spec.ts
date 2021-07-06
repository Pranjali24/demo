import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersChatListComponent } from './users-chat-list.component';

describe('UsersChatListComponent', () => {
  let component: UsersChatListComponent;
  let fixture: ComponentFixture<UsersChatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersChatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
