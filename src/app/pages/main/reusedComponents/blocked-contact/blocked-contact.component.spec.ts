import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedContactComponent } from './blocked-contact.component';

describe('BlockedContactComponent', () => {
  let component: BlockedContactComponent;
  let fixture: ComponentFixture<BlockedContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
