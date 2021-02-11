import { RendezVous } from './../liste-rendez-vous/rendez-vous/rendez-vous.modele';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http: HttpClient) { }

  getRendezVous(): Observable<RendezVous> {
    return this.http.get<RendezVous>("http://localhost:8000/rendezVous",{observe: 'body'})
  }

  addRendezVousHttp(rendezVous: RendezVous){
    let url = "http://localhost:8000/rendezVous";

    const patient = +rendezVous.patient;
    rendezVous.patient =
    {
      id: patient,
      nom: null,
      prenom: null,
      email: null,
      role: null,
      telephone: null,
      dateNaissance: null,
      dateInscription: null,
      password: null,
    }

    const praticien = +rendezVous.praticien;
    rendezVous.praticien =
    {
      id: praticien,
      nom: null,
      prenom: null,
      email: null,
      role: null,
      telephone: null,
      specialite: null,
      password: null,
      dateInscription: null,
      adresse: null
    }
    return this.http.post<RendezVous[]>(url,rendezVous,{observe: 'response'})
  }
}
