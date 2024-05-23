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

  ngOnInit(): void {
    const schoolId = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getSchools().subscribe(schools => {
      this.school = schools.find((school: { id: number; }) => school.id === schoolId);
    });
    this.dataService.getInvoices().subscribe(invoices => {
      this.invoices = invoices.filter((invoice: { schoolId: number; }) => invoice.schoolId === schoolId);
    });
  }
}
