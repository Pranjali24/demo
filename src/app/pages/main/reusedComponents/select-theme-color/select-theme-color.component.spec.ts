import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectThemeColorComponent } from './select-theme-color.component';

describe('SelectThemeColorComponent', () => {
  let component: SelectThemeColorComponent;
  let fixture: ComponentFixture<SelectThemeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectThemeColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectThemeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
