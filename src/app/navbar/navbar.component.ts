import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
 //  ngOnInit() {
	//  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
	// }

	// ngAfterViewChecked(): void {
	//   try {
	//       if(this.fragment) {
	//           document.querySelector('#' + this.fragment).scrollIntoView();
	//       }
	//   } catch (e) { }
	// }

}
