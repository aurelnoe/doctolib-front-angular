import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss']
})
export class ListePatientComponent implements OnInit {

  patients: Object;
  listePatients: Object;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((response) => {
      this.listePatients = response;
      //this.emitPatientSelected();
    }, (error) => {
      console.log("Erreur de chargement :" + error);
    });
  }
}
