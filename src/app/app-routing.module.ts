import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { FaqComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { SponsorsComponent } from './sponsors/sponsors.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: TitleComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'sponsors', component: SponsorsComponent },
  // { path: 'info', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  	  scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
