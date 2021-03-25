import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {

  pdfSrc="assets/prizes2021.pdf"

  constructor() { }

  ngOnInit(): void {
  }

}
