import { RendezVous } from './rendez-vous.modele';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {

  @Input() leRendezVous: RendezVous;

  constructor() { }

  ngOnInit(): void {
  }

}
