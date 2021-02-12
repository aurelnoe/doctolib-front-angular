import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAdresseComponent } from './detail-adresse.component';

describe('DetailAdresseComponent', () => {
  let component: DetailAdresseComponent;
  let fixture: ComponentFixture<DetailAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAdresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
