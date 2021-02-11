import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPraticienComponent } from './ajout-praticien.component';

describe('AjoutPraticienComponent', () => {
  let component: AjoutPraticienComponent;
  let fixture: ComponentFixture<AjoutPraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
