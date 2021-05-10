import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateEventsComponent} from './create-events/create-events.component';

const routes: Routes = [
  { path: 'create-events', component: CreateEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
