import { Praticien } from '../models/praticien.modele';
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
  userInfo = JSON.parse(localStorage.getItem('userInfo'));

  constructor(private praticienService: PraticienService,
              private router: Router,
              private adresseService: AdresseService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if (localStorage.length == 0) {
      this.router.navigate(['/login']);
    }
    
    this.adresseService.getAdressesHttp().subscribe((response) => {
      this.listeCabinets = response;
    }, (error) => {
      console.log(error);
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.praticien = this.getDetailPraticien(+params['id']);
    })
  }

  editPraticien(id: number, form: NgForm) {
    //console.log(form.value);
    this.praticienService.editPraticien(id,form.value)
      .subscribe((response) => {
        this.router.navigate(['./liste-praticien']);
      }, (error) => {
        console.log(error);
      })
  }

  // editPraticien(id: number, form: NgForm) {

  //   this.praticienService.getPraticiensHttp().subscribe((response) => {
  //     this.listePraticiens = response;
  //   });
  //   const docteur = this.listePraticiens.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   if (docteur) {
  //     console.log(form);
  //     this.praticienService.editPraticien(id,form.value)
  //       .subscribe((response) => {
  //         this.router.navigate(['./liste-praticien']);
  //       }, (error) => {
  //         console.log(error);
  //       })
  //   };
  // }

  getDetailPraticien(id: number){
    this.praticienService.getDetailPraticien(id)
    .subscribe((response: Praticien) => {
     this.praticien = response;
     //console.log(typeof(this.praticien));
    });
    // console.log(this.praticien);
    return this.praticien;
  }
}
