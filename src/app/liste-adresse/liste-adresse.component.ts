import { Component, OnInit } from '@angular/core';
import { AdresseService } from '../services/adresse.service';
import { Adresse } from './adresse/adresse.modele';

@Component({
  selector: 'app-liste-adresse',
  templateUrl: './liste-adresse.component.html',
  styleUrls: ['./liste-adresse.component.scss']
})
export class ListeAdresseComponent implements OnInit {

  adresses: Object;
  listeAdresses: Adresse[] = [];

  constructor(private adresseService: AdresseService) { }

  ngOnInit(): void {
    this.adresseService.getAdressesHttp().subscribe((response) => {
      this.listeAdresses = response;
      console.log(this.listeAdresses);
    }, (error) => {
      console.log(error);
    });
  }

}
