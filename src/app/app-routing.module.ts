import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { AjoutPatientComponent } from './ajout-patient/ajout-patient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ModifPraticienComponent } from './modif-praticien/modif-praticien.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeAdresseComponent } from './liste-adresse/liste-adresse.component';
import { AjoutPraticienComponent } from './ajout-praticien/ajout-praticien.component';
import { DetailPraticienComponent } from './detail-praticien/detail-praticien.component';
import { ListePraticienComponent } from './liste-praticien/liste-praticien.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'liste-praticien', component: ListePraticienComponent},
  {path: 'liste-adresse', component: ListeAdresseComponent},
  {path: 'liste-patient', component: ListePatientComponent},
  {path: 'liste-rendez-vous', component: ListeRendezVousComponent},
  {path: 'detail-praticien/:id', component: DetailPraticienComponent},
  {path: 'detail-patient/:id', component: DetailPatientComponent},
  {path: 'ajout-praticien', component: AjoutPraticienComponent},
  {path: 'ajout-patient', component: AjoutPatientComponent},
  {path: 'modif-praticien/:id', component: ModifPraticienComponent},
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'secret-random-number',
  //   loadChildren: './random/random.module#RandomModule',
  //   canActivate: [RandomGuard],
  //   canLoad: [RandomGuard],
  // },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
