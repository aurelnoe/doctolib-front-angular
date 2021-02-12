import { Observable } from 'rxjs';
import { baseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable  } from '@angular/core';
import { Adresse } from '../models/adresse.modele';

@Injectable({providedIn: 'root'})

export class AdresseService{

  constructor(private http: HttpClient){}

  getAdressesHttp(){
    return this.http.get<Adresse[]>(`${baseUrl}adresses`,{observe: 'body'})
  }

  getDetailAdresse(id: number): Observable<Adresse> {
    return this.http.get<Adresse>(`${baseUrl}adresses/`+id)
  }

  addAdresseHttp(adresse: Adresse){
    let url = `${baseUrl}adresses`;
    return this.http.post<Adresse[]>(url,adresse,{observe: 'response'})
  }
}
