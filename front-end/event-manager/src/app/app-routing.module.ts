
import { CreateTicketFormComponent } from './create-ticket-form/create-ticket-form.component';
import { CreateVenueFormComponent } from './create-venue-form/create-venue-form.component';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { CreateEventsFormComponent } from './create-events-form/create-events-form.component';

import { RegisterFormComponent } from './register-form/register-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'create-event', component:CreateEventsFormComponent},
  {path:'create-venue', component:CreateVenueFormComponent},
  {path:'create-ticket', component:CreateTicketFormComponent},
  {path:'register', component:RegisterFormComponent},
  {path:'Login', component:LoginComponent},
  {path:'view-events',component:DisplayEventsComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
