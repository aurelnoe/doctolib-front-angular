import { Patient } from './../liste-patient/patient/patient.modele';
import { PatientService } from './../services/patient.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.scss']
})
export class DetailPatientComponent implements OnInit {
  id: number;
  //patient;//: Object
  patient: Patient;
  //@Input() patient;
  // patient: {
  //   id: number,
  //   nom: string,
  //   prenom: string,
  //   dateInscription: string,
  //   email: string,
  //   telephone: string,
  //   password: string,
  //   specialite: string,
  //   adresse: number,
  // }

  constructor(private activatedRoute: ActivatedRoute,private patientService: PatientService)
  {
    // this.activatedRoute.params
    // .subscribe( params => this.id = +params['id'])
  }

  ngOnInit() {
    // const id = this.activatedRoute.snapshot.params['id'];
    // this.patient = {id: id}
    //this.getDetailPatient(this.id);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getDetailPatient(+params['id']);
    })
    console.log(this.patient);
  }

  getDetailPatient(id: number){
    this.patientService.getDetailPatient(id)
    .subscribe((response: Patient) => {
     this.patient = response;
     console.log(typeof(this.patient));
     console.log(response);
    });
    return this.patient;
  }

}
