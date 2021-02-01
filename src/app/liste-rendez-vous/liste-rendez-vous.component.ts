import { RendezVousService } from './../services/rendez-vous.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.scss']
})
export class ListeRendezVousComponent implements OnInit {

  rendezVous: Object;
  listeRendezVous: Object;

  constructor(private rendezVousService: RendezVousService) { }

  ngOnInit(): void {
    this.rendezVousService.getRendezVous().subscribe((response) => {
      this.listeRendezVous = response;
    }, (error) => {
      console.log("Erreur de chargement :" + error);
    });
  }

}
