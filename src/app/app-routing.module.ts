import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuteeComponent } from './views/tutee/tutee.component';
import { TutorComponent } from './views/tutor/tutor.component';
import { HomeComponent } from './views/home/home.component';
import { StatusComponent } from './views/status/status.component';
import { LoginComponent } from './views/login/login.component';
import { ClassesComponent } from './views/classes/classes.component';
import { TeachersComponent } from './views/teachers/teachers.component';
import { LoggingComponent } from './views/logging/logging.component';

const routes: Routes = [
  { path: 'tutee', component: TuteeComponent },
  { path: 'tutor', component: TutorComponent },
  {path: "",  component: HomeComponent, pathMatch: "full"},
  {path: "status",  component: StatusComponent},
  {path: "logging",  component: LoggingComponent},
  {path: "classes",  component: ClassesComponent},
  {path:"teachers", component:TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
