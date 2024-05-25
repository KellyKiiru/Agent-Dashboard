import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  collections: any[] = [];
  signups: any[] = [];
  revenue: any[] = [];
  schools: any[] = [];
  invoices: any[] = [];

  constructor(private dataService: DataService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.collections = await this.dataService.getCollections();
      this.signups = await this.dataService.getSignups();
      this.revenue = await this.dataService.getRevenue();
      this.schools = await this.dataService.getSchools();
      this.invoices = await this.dataService.getInvoices();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
    if (!this.schools || !this.schools.length) {
      console.warn('Schools data not available.');
      return 'Unknown';
    }
    const school = this.schools.find(school => school.id == schoolId);
    return school ? school.name : 'Unknown';
  }

  collectPayment(invoice: { id: any; }): void {
    console.log(`Collecting payment for invoice ID: ${invoice.id}`);
  }

  getCombinedSignupDistribution(): any[] {
    if (!this.signups || !this.signups.length) {
      return [];
    }
  
    const combinedDistribution = {
      primary: 0,
      secondary: 0,
      igcse: 0
    };
  
    this.signups.forEach(signup => {
      combinedDistribution.primary += signup.primary || 0;
      combinedDistribution.secondary += signup.secondary || 0;
      combinedDistribution.igcse += signup.igcse || 0;
    });
  
    return [
      { name: 'Primary', value: combinedDistribution.primary },
      { name: 'Secondary', value: combinedDistribution.secondary },
      { name: 'IGCSE', value: combinedDistribution.igcse }
    ];
  }
  
  getCombinedSignupData(): any[] {
    if (!this.signups || !this.signups.length) {
      return [];
    }
  
    const combinedData: any[] = [];
  
    this.signups.forEach(signup => {
      combinedData.push(...this.getSignupData(signup));
    });
  
    return combinedData;
  }
  

}
