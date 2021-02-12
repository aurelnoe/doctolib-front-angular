import { ActivatedRoute, Params } from '@angular/router';
import { Praticien } from '../models/praticien.modele';
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
  ville:string;

  constructor(private praticienService: PraticienService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
    .subscribe( params => this.ville = params['ville'])
  }

  ngOnInit(): void {

    if (this.ville) {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.listePraticiens = this.praticienService.findPraticienByVille(params['ville']);
      })
    }else{
      this.praticienService.getPraticiensHttp().subscribe((response) => {
        this.listePraticiens = response;
        console.log(response)
      }, (error) => {
        console.log("Erreur de chargement :" + error);
      });
    }
  }
}
