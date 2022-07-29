import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResComponent } from './search-res/search-res.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ArrivalTimeComponent } from './arrival-time/arrival-time.component';
import { IdSubmitComponent } from './id-submit/id-submit.component';
import { SelectCheckinComponent } from './select-checkin/select-checkin.component';
import { CheckinSuccessComponent } from './checkin-success/checkin-success.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResComponent,
    CheckInComponent,
    ArrivalTimeComponent,
    IdSubmitComponent,
    SelectCheckinComponent,
    CheckinSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  entryComponents: [],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
