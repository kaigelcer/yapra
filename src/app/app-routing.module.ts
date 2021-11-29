import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "calendar", component: CalendarComponent},
  {path: "about", component: AboutComponent},
  {path: "", redirectTo:"about", pathMatch: "full"}
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
