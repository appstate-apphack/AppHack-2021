import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TitleComponent } from './title/title.component';
import { FaqComponent } from './faq/faq.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NavbarComponent,
    SponsorsComponent,
    TitleComponent,
    FaqComponent,
    ClubsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
