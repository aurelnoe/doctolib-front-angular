import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPraticienComponent } from './modif-praticien.component';

describe('ModifPraticienComponent', () => {
  let component: ModifPraticienComponent;
  let fixture: ComponentFixture<ModifPraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
