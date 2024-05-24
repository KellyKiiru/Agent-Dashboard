import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {
  school: any;
  invoices: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit(): Promise<void> {
    const schoolId = +this.route.snapshot.paramMap.get('id')! + 1 ;
    console.log('School ID from route:', schoolId);
  
    try {
      const schools: any[] = await this.dataService.getSchools();
      console.log('Schools data:', schools);
  
      this.school = schools.find((school: { id: number; }) => school.id == schoolId);
      console.log('Found school:', this.school);
  
      const invoices = await this.dataService.getInvoices();
      this.invoices = invoices.filter((invoice: { schoolId: number; }) => invoice.schoolId === schoolId);
      console.log('Filtered invoices:', this.invoices);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
