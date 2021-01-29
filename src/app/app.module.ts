import { PraticienService } from './services/praticien.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePraticienComponent } from './liste-praticien/liste-praticien.component';
import { DetailPraticienComponent } from './detail-praticien/detail-praticien.component';
import { PraticienComponent } from './liste-praticien/praticien/praticien.component';
import { AjoutPraticienComponent } from './ajout-praticien/ajout-praticien.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeAdresseComponent } from './liste-adresse/liste-adresse.component';
import { AdresseComponent } from './adresse/adresse.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ModifPraticienComponent } from './modif-praticien/modif-praticien.component';

@NgModule({
  declarations: [
    AppComponent,
    ListePraticienComponent,
    DetailPraticienComponent,
    PraticienComponent,
    AjoutPraticienComponent,
    ListeAdresseComponent,
    AdresseComponent,
    AccueilComponent,
    ModifPraticienComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ PraticienService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
