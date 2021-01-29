import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPraticienComponent } from './detail-praticien.component';

describe('DetailPraticienComponent', () => {
  let component: DetailPraticienComponent;
  let fixture: ComponentFixture<DetailPraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
