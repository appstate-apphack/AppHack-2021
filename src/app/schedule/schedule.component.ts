import { Component, OnInit } from '@angular/core';
import { SCHEDULE1, SCHEDULE2 } from '../schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  events1 = SCHEDULE1;
  events2 = SCHEDULE2;

  constructor() { }

  ngOnInit(): void {
  }

}
