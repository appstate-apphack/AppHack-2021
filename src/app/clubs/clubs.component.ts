import { Component, OnInit } from '@angular/core';
import { PARTICIPATING_CLUBS } from '../clubs';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  
  clubs = PARTICIPATING_CLUBS;

  constructor() { }

  ngOnInit() {
  }

}
