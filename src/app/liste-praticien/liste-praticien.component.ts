import { Praticien } from './praticien/praticien.modele';
import { PraticienService } from './../services/praticien.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-praticien',
  templateUrl: './liste-praticien.component.html',
  styleUrls: ['./liste-praticien.component.scss']
})
export class ListePraticienComponent implements OnInit {

  praticiens: Object;
  listePraticiens: Object;

  constructor(private praticienService: PraticienService) { }

  ngOnInit(): void {
    this.praticienService.getPraticiensHttp().subscribe((response) => {
      this.listePraticiens = response;
    }, (error) => {
      console.log("Erreur de chargement :" + error);
    });
  }
}
