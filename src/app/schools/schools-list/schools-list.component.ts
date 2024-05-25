import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';
import { Invoice } from 'src/app/interfaces/invoice.interface';
import { Collection } from 'src/app/interfaces/collection.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit {
  schools: School[] = [];
  invoices: any[] = [];
  collections: any[] = [];
  selectedSchool: any = null;


  constructor(private schoolService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.schoolService.getSchools().then((schools: School[]) => {
      this.schools = schools;
    });
  }


  fetchInvoicesAndCollections(schoolId: number) {
    this.schoolService.getInvoicesById(schoolId).subscribe((invoices: any[]) => {
      this.invoices = invoices;
    });
    this.schoolService.getCollectionsById(schoolId).subscribe((collections: any[]) => {
      this.collections = collections;
    });
  }

  schoolDetails(school: any) {
    this.router.navigate(['/school-details', school.id]);
    this.fetchInvoicesAndCollections(school.id);
  }
}