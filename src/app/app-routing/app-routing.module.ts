import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SchoolAdmissionComponent } from '../schooladmission/schooladmission.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'schooladmission',
    component:SchoolAdmissionComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
