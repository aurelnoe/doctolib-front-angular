import { Praticien } from '../../models/praticien.modele';
import { PraticienService } from './../../services/praticien.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.scss']
})
export class PraticienComponent implements OnInit {

  @Input() lePraticien: Praticien;

  constructor(private praticienService: PraticienService) { }

  ngOnInit(): void {
  }
}
