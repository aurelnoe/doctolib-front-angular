import { Adresse } from '../../models/adresse.modele';
import { AdresseService } from 'src/app/services/adresse.service';
import { Praticien } from '../../models/praticien.modele';
import { PraticienService } from '../../services/praticien.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-praticien',
  templateUrl: './ajout-praticien.component.html',
  styleUrls: ['./ajout-praticien.component.scss']
})
export class AjoutPraticienComponent implements OnInit {

  // lePraticienSelectionnee: Praticien;//[] = []
  praticien: Praticien;
  listeCabinets = [];

  constructor(private router: Router, private praticienService: PraticienService, private adresseService: AdresseService) {
  }

  ngOnInit() {
    this.adresseService.getAdressesHttp().subscribe((response) => {
      this.listeCabinets = response;
    }, (error) => {
      console.log(error);
    });
  }

  addPraticien(form: NgForm) {
    console.log(form);
    this.praticienService.addPraticienHttp(form.value)
      .subscribe((response) => {
      this.router.navigate(['./liste-praticien']);
    }, (error) => {
      console.log(error);
    });
  }
  // listePraticiens: Praticien[] = [];
  // onSubmit(form){
  //   this.praticienService.addPraticienHttp(form.value)
  //   .subscribe((response) => {
  //     console.log(response);
  //     this.listePraticiens = response;
  //     this.router.navigate(['./liste-praticien']);
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

  // onReceivedVoiture(praticienRecue: Praticien){
  //   this.lePraticienSelectionnee = praticienRecue;
  // }

  // inscription(forme: NgForm){
  //   console.log(this.lePraticienSelectionnee.nom);
  // }​
}
