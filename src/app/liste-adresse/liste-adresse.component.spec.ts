import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdresseComponent } from './liste-adresse.component';

describe('ListeAdresseComponent', () => {
  let component: ListeAdresseComponent;
  let fixture: ComponentFixture<ListeAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
