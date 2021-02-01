import { Adresse } from './../liste-adresse/adresse/adresse.modele';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable  } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Praticien } from '../liste-praticien/praticien/praticien.modele';

@Injectable({providedIn: 'root'})

export class PraticienService{

  constructor(private http: HttpClient){}

  getPraticiensHttp(): Observable<Praticien[]> {
    return this.http.get<Praticien[]>("http://localhost:8000/praticiens",{observe: 'body'})
  }

  getDetailPraticien(id: number): Observable<Praticien> {
    return this.http.get<Praticien>("http://localhost:8000/praticiens/"+id)
  }

  addPraticienHttp(praticien: Praticien){
    let url = "http://localhost:8000/praticiens";
    praticien.dateInscription = '2020-12-01'; //Date.now();

    const adresse = +praticien.adresse;
    praticien.adresse =
    {
      id: adresse,
      denomination: null,
      libelleVoie: null,
      ville: null,
      pays: null,
      codePostal: null,
    }
    return this.http.post<Praticien[]>(url,praticien,{observe: 'response'})
  }

  editPraticien(id: number, praticien: Praticien){
    let url = "http://localhost:8000/praticiens/"+id;
    return this.http.put<Praticien>(url,praticien,{observe: 'response'})
  }

  selectPraticien = new EventEmitter<number>();
  emitPraticienSelected(id: number){
    this.selectPraticien.emit(id);
  }

  //   praticiens: Praticien[] = [
  //   {
  //     id: 1,
  //     nom: "Dupond",
  //     prenom: "Patrick",
  //     email: "docdupond@mail.com",
  //     telephone: "0607080910",
  //     specialite: "Médecin généraliste",
  //     adresse: 1,
  //   },
  //   {
  //     id: 2,
  //     nom: "Durand",
  //     prenom: "George",
  //     email: "docdurand@mail.com",
  //     telephone: "0607080911",
  //     specialite: "Chirurgien dentiste",
  //     adresse: 1,
  //   },
  //   {
  //     id: 3,
  //     nom: "dupuis",
  //     prenom: "Patrick",
  //     email: "docdupuis@mail.com",
  //     telephone: "0607080912",
  //     specialite: "Ophtalmologue",
  //     adresse: 1,
  //   },
  // ]

  // getPraticiens(){
  //   return this.praticiens;
  // }


  // addNewPraticien(praticien: Praticien)
  // {
  //   this.praticiens.push(praticien);
  // }


}
