import { Praticien } from './../liste-praticien/praticien/praticien.modele';
import { PraticienService } from './../services/praticien.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-praticien',
  templateUrl: './detail-praticien.component.html',
  styleUrls: ['./detail-praticien.component.scss']
})
export class DetailPraticienComponent implements OnInit {
  id: number;
  //praticien;//: Object
  @Input() praticien;

  constructor(private activatedRoute: ActivatedRoute,private praticienService: PraticienService)
  {
    this.activatedRoute.params
    .subscribe( params => this.id = params.id)
  }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params['id'];
    // this.praticien = {id: id}
    this.getDetailPraticien(this.id);
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.praticien = this.praticienService.getDetailPraticien(+params['id']);
    // })
    console.log(this.praticien);
  }

  getDetailPraticien(id){
    this.praticienService.getDetailPraticien(id)
    .subscribe(data => {
     this.praticien = data[0];
     console.log(typeof(this.praticien));
    });
  }

}
