import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedule',
  template: '<ejs-schedule height="800" [selectedDate]="setDate" [currentView]="setView"></ejs-schedule>',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public setView: View = 'Month';
  public setDate: Date = new Date(2019-1-15);

  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 19, 12, 30),
    isBlock: true,
    // isAllDay: true
  }];

  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
}
