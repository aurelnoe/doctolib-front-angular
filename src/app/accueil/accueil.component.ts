import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  inputValue:string;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event:Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

}
