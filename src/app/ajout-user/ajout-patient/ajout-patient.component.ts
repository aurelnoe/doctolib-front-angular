import { Patient } from '../../liste-patient/patient/patient.modele';
import { PatientService } from '../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-patient',
  templateUrl: './ajout-patient.component.html',
  styleUrls: ['./ajout-patient.component.scss']
})
export class AjoutPatientComponent implements OnInit {

  lePatientSelectionnee: Patient;//[] = []
  patient: Patient;
  listeCabinets = [];

  constructor(private router: Router, private patientService: PatientService) { }

  ngOnInit() {
  }

  addPatient(form: NgForm) {
    console.log(form);
    this.patientService.addPatient(form.value)
      .subscribe((response) => {
      this.router.navigate(['./liste-patient']);
    }, (error) => {
      console.log(error);
    });
  }
}
