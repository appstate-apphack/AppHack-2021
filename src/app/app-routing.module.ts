import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';
import { PrizesComponent } from './prizes/prizes.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
   { path: 'about', component: AboutComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'prizes', component: PrizesComponent },
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
