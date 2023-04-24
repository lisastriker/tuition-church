import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorComponent } from './views/tutor/tutor.component';
import { TuteeComponent } from './views/tutee/tutee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { StatusComponent } from './views/status/status.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { ClassesComponent } from './views/classes/classes.component';
import { ModalComponent } from './views/modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { TeachersComponent } from './views/teachers/teachers.component';
import { LoggingComponent } from './views/logging/logging.component';
import { AddClassComponent } from './views/add-class/add-class.component';
@NgModule({
  declarations: [
    AppComponent,
    TutorComponent,
    TuteeComponent,
    HomeComponent,
    StatusComponent,
    LoginComponent,
    LogoutComponent,
    ClassesComponent,
    ModalComponent,
    TeachersComponent,
    LoggingComponent,
    AddClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MdbModalModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-mgpxoifv.us.auth0.com',
      clientId: 'u1vLBt0nNt2qIdsunjDzx63f4tKX9rIJ',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
