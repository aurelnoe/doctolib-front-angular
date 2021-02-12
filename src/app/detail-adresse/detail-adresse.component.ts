import { Praticien } from './../models/praticien.modele';
import { PraticienService } from './../services/praticien.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AdresseService } from 'src/app/services/adresse.service';
import { Adresse } from './../models/adresse.modele';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-adresse',
  templateUrl: './detail-adresse.component.html',
  styleUrls: ['./detail-adresse.component.scss']
})
export class DetailAdresseComponent implements OnInit {

  listePraticiens: Object;
  @Input() cabinet: Adresse;
  @Input() lePraticien: Praticien;

  constructor(private adresseService: AdresseService, private activatedRoute: ActivatedRoute, private praticienService: PraticienService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getDetailAdresse(+params['id']);
      this.praticiensFiltre(+params['id']);
      console.log(this.listePraticiens)
    })
  }

  getDetailAdresse(id: number){
    this.adresseService.getDetailAdresse(id)
    .subscribe((response: Adresse) => {
     this.cabinet = response;
     //console.log(typeof(this.cabinet));
     //console.log(response);
    });
    return this.cabinet;
  }

  praticiensFiltre(id: number) {
    this.praticienService.findPraticienByAdresse(id)
    .subscribe((response) => {
      this.listePraticiens = response;
    })
    return this.listePraticiens;
  }

}
