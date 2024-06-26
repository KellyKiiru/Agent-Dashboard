import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { School } from '../interfaces/school.interface';
import { Collection } from '../interfaces/collection.interface';
import { Invoice } from '../interfaces/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000';
  
  // private apiUrl = 'https://kellykiiru.github.io/Agent-Dashboard.github.io'; 

  constructor(private http: HttpClient) { }

  async getCollections(): Promise<any> {
    return await firstValueFrom(this.http.get(`${this.apiUrl}/collections`));
  }

  getCollectionsById(schoolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/collections?schoolId=${schoolId}`);
  }

  async getSignups(): Promise<any> {
    return await firstValueFrom(this.http.get(`${this.apiUrl}/signups`));
  }

  async getRevenue(): Promise<any> {
    return await firstValueFrom(this.http.get(`${this.apiUrl}/revenue`));
  }

  async getInvoices(): Promise<any> {
    return await firstValueFrom(this.http.get(`${this.apiUrl}/invoices`));
  }
   
  getInvoicesById(schoolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices?schoolId=${schoolId}`);
  }

  async getSchools(): Promise<any> {
    return await firstValueFrom(this.http.get(`${this.apiUrl}/schools`));
  }

  async getSchoolName(schoolId: number): Promise<string> {
    try {
      const schoolsData = await this.getSchools();
      const school = schoolsData.find((school: { id: number; }) => school.id === schoolId);
      return school ? school.name : 'Unknown';
    } catch (error) {
      console.error('Error fetching school data:', error);
      return 'Unknown';
    }
  }

}
