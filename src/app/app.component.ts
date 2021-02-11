import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AgendaService, DayService, MonthAgendaService, MonthService, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class AppComponent {
  title = 'doctoLib';

  constructor(private router: Router, private authService: AuthService) {}

  // onLogout() {
  //   this.authService.logout();
  // }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
