import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListePraticienComponent } from './liste-praticien.component';

describe('ListePraticienComponent', () => {
  let component: ListePraticienComponent;
  let fixture: ComponentFixture<ListePraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
