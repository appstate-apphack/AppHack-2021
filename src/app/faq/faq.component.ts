import { Component, OnInit } from '@angular/core';
import { FAQ } from '../question';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  questions = FAQ;

  constructor() { }

  ngOnInit() {
  }

}
