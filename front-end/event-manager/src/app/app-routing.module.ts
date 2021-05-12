import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'create-event', component:CreateEventsComponent},
  {path:'register', component:RegisterFormComponent},
  {path:'Login', component:PageNotFoundComponent},
  {path:'view-events',component:PageNotFoundComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
