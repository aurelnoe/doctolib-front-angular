import { Adresse } from './adresse.modele';
import { AdresseService } from 'src/app/services/adresse.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss']
})
export class AdresseComponent implements OnInit {

  @Input() Cabinet: Adresse;

  constructor(private adresseService: AdresseService) { }

  ngOnInit(): void {
  }

}
