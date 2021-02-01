import { NgForm } from '@angular/forms';
import { PatientService } from './../services/patient.service';
import { PraticienService } from './../services/praticien.service';
import { RendezVousService } from './../services/rendez-vous.service';
import { Router } from '@angular/router';
import { RendezVous } from './../liste-rendez-vous/rendez-vous/rendez-vous.modele';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-rendez-vous',
  templateUrl: './ajout-rendez-vous.component.html',
  styleUrls: ['./ajout-rendez-vous.component.scss']
})
export class AjoutRendezVousComponent implements OnInit {

  leRdvSelectionnee: RendezVous;//[] = []
  rendezVous: RendezVous;
  listePraticiens = [];
  listePatients = [];

  constructor(private router: Router,
              private rendezVousService: RendezVousService,
              private praticienService: PraticienService,
              private patientService: PatientService) { }

  ngOnInit() {
    this.praticienService.getPraticiensHttp().subscribe((response) => {
      this.listePraticiens = response;
    }, (error) => {
      console.log(error);
    });

    this.patientService.getPatients().subscribe((response) => {
      this.listePatients = response;
    }, (error) => {
      console.log(error);
    });
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

}
