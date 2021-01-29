import { ModifPraticienComponent } from './modif-praticien/modif-praticien.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeAdresseComponent } from './liste-adresse/liste-adresse.component';
import { AjoutPraticienComponent } from './ajout-praticien/ajout-praticien.component';
import { DetailPraticienComponent } from './detail-praticien/detail-praticien.component';
import { ListePraticienComponent } from './liste-praticien/liste-praticien.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'liste-praticien', component: ListePraticienComponent},
  {path: 'detail-praticien/:id', component: DetailPraticienComponent},
  {path: 'ajout-praticien', component: AjoutPraticienComponent},
  {path: 'liste-adresse', component: ListeAdresseComponent},
  {path: 'modif-praticien/:id', component: ModifPraticienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
