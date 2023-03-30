import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuteeComponent } from './views/tutee/tutee.component';
import { TutorComponent } from './views/tutor/tutor.component';

const routes: Routes = [
  { path: 'tutee', component: TuteeComponent },
  { path: 'tutor', component: TutorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
