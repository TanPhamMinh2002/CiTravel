import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrivalTimeComponent } from './arrival-time/arrival-time.component';
import { CheckInComponent } from './check-in/check-in.component';
import { HomeComponent } from './home/home.component';
import { IdSubmitComponent } from './id-submit/id-submit.component';
import { SearchResComponent } from './search-res/search-res.component';
import { SelectCheckinComponent } from './select-checkin/select-checkin.component';


const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'arrival-time', component: ArrivalTimeComponent},
  {path: 'check-in', component: CheckInComponent},
  {path: 'select-checkin', component: SelectCheckinComponent},
  {path: 'id-submit', component: IdSubmitComponent},
  {path: 'search-res', component: SearchResComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
