import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { SignUpsComponent } from './sign-ups/sign-ups.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { ChequesComponent } from './cheques/cheques.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopMetricsComponent } from './dashboard/top-metrics/top-metrics.component';
import { TargetsVisualizationComponent } from './dashboard/targets-visualization/targets-visualization.component';
import { SignupsOverviewComponent } from './dashboard/signups-overview/signups-overview.component';
import { UpcomingInvoicesComponent } from './dashboard/upcoming-invoices/upcoming-invoices.component';
import { SchoolsListComponent } from './schools/schools-list/schools-list.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { InvoicesComponent } from './schools/invoices/invoices.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { TashboardComponent } from './tashboard/tashboard.component';
import { SchoolComponent } from './school/school.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    SignUpsComponent,
    TotalRevenueComponent,
    ChequesComponent,
    NavigationComponent,
    TopMetricsComponent,
    TargetsVisualizationComponent,
    SignupsOverviewComponent,
    UpcomingInvoicesComponent,
    SchoolsListComponent,
    SchoolDetailsComponent,
    InvoicesComponent,
    MyChartComponent,
    TashboardComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
