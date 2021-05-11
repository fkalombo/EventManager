import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'create-event', component:CreateEventsComponent},
  {path:'register', component:RegisterFormComponent},
  {path:'Login', component:RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
