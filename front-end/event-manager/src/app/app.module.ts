import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import {MatListModule} from '@angular/material/list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { AboutComponent } from './about/about.component';
import { CreateEventsFormComponent } from './create-events-form/create-events-form.component';
import { CreateVenueFormComponent } from './create-venue-form/create-venue-form.component';
import { CreateTicketFormComponent } from './create-ticket-form/create-ticket-form.component';
import { EventEventComponent } from './event-event/event-event.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFormComponent,
    HomeComponent,
    FooterComponent,
    RootNavComponent,
    PageNotFoundComponent,
    DisplayEventsComponent,
    AboutComponent,
    CreateEventsFormComponent,
    CreateVenueFormComponent,
    CreateTicketFormComponent,
    EventEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [MatDatepickerModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
