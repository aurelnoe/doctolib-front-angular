import { PraticienService } from './services/praticien.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PraticienComponent } from './liste-praticien/praticien/praticien.component';
import { PatientComponent } from './liste-patient/patient/patient.component';
import { AdresseComponent } from './liste-adresse/adresse/adresse.component';
import { RendezVousComponent } from './liste-rendez-vous/rendez-vous/rendez-vous.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ListePraticienComponent } from './liste-praticien/liste-praticien.component';
import { ListeAdresseComponent } from './liste-adresse/liste-adresse.component';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { DetailPraticienComponent } from './detail-praticien/detail-praticien.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { AjoutPatientComponent } from './ajout-patient/ajout-patient.component';
import { AjoutPraticienComponent } from './ajout-praticien/ajout-praticien.component';
import { AjoutRendezVousComponent } from './ajout-rendez-vous/ajout-rendez-vous.component';
import { ModifPraticienComponent } from './modif-praticien/modif-praticien.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PraticienComponent,
    PatientComponent,
    AdresseComponent,
    ListePraticienComponent,
    ListeAdresseComponent,
    ListePatientComponent,
    ListeRendezVousComponent,
    DetailPraticienComponent,
    DetailPatientComponent,
    AjoutPraticienComponent,
    AjoutPatientComponent,
    ModifPraticienComponent,
    ListeRendezVousComponent,
    RendezVousComponent,
    AjoutRendezVousComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
