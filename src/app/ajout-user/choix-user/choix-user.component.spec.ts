import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixUserComponent } from './choix-user.component';

describe('ChoixUserComponent', () => {
  let component: ChoixUserComponent;
  let fixture: ComponentFixture<ChoixUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
