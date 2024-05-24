import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit {
  schools: School[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
    });
  }
}