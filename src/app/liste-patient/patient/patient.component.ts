import { Patient } from '../../models/patient.modele';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  @Input() lePatient: Patient;

  constructor() { }

  ngOnInit(): void {
  }

}
