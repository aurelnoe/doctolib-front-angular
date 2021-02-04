import { Patient } from './../../liste-patient/patient/patient.modele';
import { Praticien } from './../../liste-praticien/praticien/praticien.modele';
import { NgForm } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { PraticienService } from '../../services/praticien.service';
import { RendezVousService } from '../../services/rendez-vous.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RendezVous } from '../../liste-rendez-vous/rendez-vous/rendez-vous.modele';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-rendez-vous',
  templateUrl: './ajout-rendez-vous.component.html',
  styleUrls: ['./ajout-rendez-vous.component.scss'],
})
export class AjoutRendezVousComponent implements OnInit {

  leRdvSelectionnee: RendezVous;//[] = []
  rendezVous: RendezVous;
  id: number;
  praticien: Praticien;
  patient: Patient;

  constructor(private router: Router,
              private rendezVousService: RendezVousService,
              private praticienService: PraticienService,
              private patientService: PatientService,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getDetailPraticien(+params['id']);
    })
    console.log(this.praticien);
  }

  addRendezVous(form: NgForm) {
    console.log(form);
    this.rendezVousService.addRendezVousHttp(form.value)
      .subscribe((response) => {
      this.router.navigate(['./liste-rendez-vous']);
    }, (error) => {
      console.log(error);
    });
  }

  getDetailPraticien(id: number){
    this.praticienService.getDetailPraticien(id)
    .subscribe((response: Praticien) => {
     this.praticien = response;
     console.log(typeof(this.praticien));
     console.log(response);
    });
    return this.praticien;
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
