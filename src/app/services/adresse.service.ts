import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable  } from '@angular/core';
import { Adresse } from '../adresse/adresse.modele';

@Injectable({providedIn: 'root'})

export class AdresseService{

  constructor(private http: HttpClient){}

  getAdressesHttp(){
    return this.http.get<Adresse[]>("http://localhost:8000/adresses",{observe: 'body'})
  }

  addAdresseHttp(Adresse: Adresse){
    let url = "http://localhost:8000/Adresses";
    return this.http.post<Adresse[]>(url,Adresse,{observe: 'response'})
  }
}
