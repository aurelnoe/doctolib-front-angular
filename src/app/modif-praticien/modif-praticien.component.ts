import { Praticien } from './../liste-praticien/praticien/praticien.modele';
import { AdresseService } from './../services/adresse.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PraticienService } from './../services/praticien.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modif-praticien',
  templateUrl: './modif-praticien.component.html',
  styleUrls: ['./modif-praticien.component.scss']
})
export class ModifPraticienComponent implements OnInit {

  praticien: Praticien;
  listeCabinets = [];
  listePraticiens;
  nom = '';
  prenom = '';
  email = '';
  telephone = '';
  specialite = '';
  adresseId: number;

  constructor(private praticienService: PraticienService,
              private router: Router,
              private adresseService: AdresseService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.adresseService.getAdressesHttp().subscribe((response) => {
      this.listeCabinets = response;
    }, (error) => {
      console.log(error);
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.getDetailPraticien(+params['id']);
    })
    console.log(this.praticien);

    this.nom = this.praticien.nom;
    this.prenom = this.praticien.prenom;
    this.email = this.praticien.email;
    this.telephone = this.praticien.telephone;
    this.specialite = this.praticien.nom;
    this.specialite = this.praticien.specialite;
    this.adresseId = this.praticien.adresse.id;
  }

  editPraticien(id: number, form: NgForm) {

    this.praticienService.getPraticiensHttp().subscribe((response) => {
      this.listePraticiens = response;
    });
    const docteur = this.listePraticiens.find(
      (s) => {
        return s.id === id;
      }
    );
    if (docteur) {
      console.log(form);
      this.praticienService.editPraticien(id,form.value)
        .subscribe((response) => {
          this.router.navigate(['./liste-praticien']);
        }, (error) => {
          console.log(error);
        })
    };
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
}
