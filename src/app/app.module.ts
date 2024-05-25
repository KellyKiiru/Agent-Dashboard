import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { SchoolsListComponent } from './schools/schools-list/schools-list.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { InvoicesComponent } from './schools/invoices/invoices.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    SchoolsListComponent,
    SchoolDetailsComponent,
    InvoicesComponent,
    MyChartComponent,
    DashboardComponent,
    InvoicesListComponent,
    SideNavComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
