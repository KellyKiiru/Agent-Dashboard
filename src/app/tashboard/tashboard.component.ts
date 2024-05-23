import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tashboard',
  templateUrl: './tashboard.component.html',
  styleUrls: ['./tashboard.component.css']
})
export class TashboardComponent implements OnInit {
  collections: any[] = [];
  signups: any[] = [];
  revenue: any[] = [];
  schools: any[] = [];
  invoices: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCollections().subscribe(data => {
      this.collections = data;
    });
    this.dataService.getSignups().subscribe(data => {
      this.signups = data;
    });
    this.dataService.getRevenue().subscribe(data => {
      this.revenue = data;
    });
    this.dataService.getSchools().subscribe(data => {
      this.schools = data;
    });
    this.dataService.getInvoices().subscribe(data => {
      this.invoices = data;
    });
  }

  getTotalSignups(): number {
    return this.signups.reduce((total, signup) => total + signup.primary + signup.secondary + signup.igcse, 0);
  }

  getTotalRevenue(): number {
    return this.revenue.reduce((total, rev) => total + rev.amount, 0);
  }

  getBouncedCheques(): number {
    return this.collections.filter(collection => collection.status === 'Bounced').length;
  }

  getSignupData(signup: { primary: any; secondary: any; igcse: any; }): any[] {
    return [
      { name: 'Primary', value: signup.primary },
      { name: 'Secondary', value: signup.secondary },
      { name: 'IGCSE', value: signup.igcse }
    ];
  }

  getSignupDistribution(signup: { primary: any; secondary: any; igcse: any; }): any[] {
    return [
      { name: 'Primary', value: signup.primary },
      { name: 'Secondary', value: signup.secondary },
      { name: 'IGCSE', value: signup.igcse }
    ];
  }

  getUpcomingInvoices(): any[] {
    const today = new Date().toISOString().split('T')[0];
    return this.invoices.filter(invoice => invoice.dueDate >= today && invoice.balance > 0);
  }

  getSchoolName(schoolId: number): string {
    const school = this.schools.find(school => school.id === schoolId);
    return school ? school.name : 'Unknown';
  }

  collectPayment(invoice: { id: any; }): void {
    // Implement payment collection logic here
    console.log(`Collecting payment for invoice ID: ${invoice.id}`);
  }
}
