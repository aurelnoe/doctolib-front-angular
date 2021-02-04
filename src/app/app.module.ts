import { ScheduleComponent } from './detail-praticien/ajout-rendez-vous/schedule.component';
import { PraticienService } from './services/praticien.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AjoutRendezVousComponent } from './detail-praticien/ajout-rendez-vous/ajout-rendez-vous.component';
import { ModifPraticienComponent } from './modif-praticien/modif-praticien.component';
import { RecurrenceEditorModule, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AgendaService, DayService, MonthAgendaService, MonthService, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PraticienComponent,
    PatientComponent,
    AdresseComponent,
    RendezVousComponent,
    ListePraticienComponent,
    ListeAdresseComponent,
    ListePatientComponent,
    ListeRendezVousComponent,
    ListeRendezVousComponent,
    DetailPraticienComponent,
    DetailPatientComponent,
    AjoutRendezVousComponent,
    AjoutPraticienComponent,
    AjoutPatientComponent,
    ModifPraticienComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScheduleModule,
    RecurrenceEditorModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: function  tokenGetter() {
    //       return localStorage.getItem('access_token');},
    //         // whitelistedDomains: ['localhost:4200'],
    //         // blacklistedRoutes: ['http://localhost:4200/login'],
    //   }
    // })
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
    // AuthGuard,
    // AuthService,
    // // RandomGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
