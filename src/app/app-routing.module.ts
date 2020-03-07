import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TitleComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'faq', component: FaqComponent },
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
