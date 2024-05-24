import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TashboardComponent } from './tashboard/tashboard.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { SchoolsListComponent } from './schools/schools-list/schools-list.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';

const routes: Routes = [
  { path: 'tashboard', component: TashboardComponent },
  { path: 'school-details', component: SchoolDetailsComponent },
  { path: 'school-list', component: SchoolsListComponent },
  { path: 'school-details/:id', component: SchoolDetailsComponent },
  { path: 'invoices', component: InvoicesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
