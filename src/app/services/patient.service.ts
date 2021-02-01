import { Patient } from './../liste-patient/patient/patient.modele';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>("http://localhost:8000/patients",{observe: 'body'})
  }

  getDetailPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>("http://localhost:8000/patients/"+id)
  }

  addPatient(patient: Patient){
    let url = "http://localhost:8000/patients";
    return this.http.post<Patient>(url,patient,{observe: 'response'})
  }

  editPatient(id: number, patient: Patient){
    let url = "http://localhost:8000/patients"+id;
    return this.http.post<Patient>(url,patient,{observe: 'response'})
  }
}
