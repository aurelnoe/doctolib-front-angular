import { baseUrl } from './../../environments/environment';
import { Patient } from '../models/patient.modele';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  headers: HttpHeaders;

  constructor(private http: HttpClient){
    const token = localStorage.getItem("token");
    this.headers = new HttpHeaders().set("Authorization", "Bearer" + token);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${baseUrl}patients`,{observe: 'body'})
  }

  getDetailPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${baseUrl}patients/`+id)
  }

  addPatient(patient: Patient){
    let url = `${baseUrl}patients`;
    return this.http.post<Patient>(url,patient,{observe: 'response'})
  }

  editPatient(id: number, patient: Patient){
    let url = `${baseUrl}patients`+id;
    return this.http.post<Patient>(url,patient,{observe: 'response'})
  }
}
