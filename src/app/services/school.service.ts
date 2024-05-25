import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSchools(): Observable<any> {
    return this.http.get(`${this.apiUrl}/schools`);
  }

  getCollections(): Observable<any> {
    return this.http.get(`${this.apiUrl}/collections`);
  }

  getCollectionsById(schoolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/collections?schoolId=${schoolId}`);
  }

  getSignups(): Observable<any> {
    return this.http.get(`${this.apiUrl}/signups`);
  }

  getRevenue(): Observable<any> {
    return this.http.get(`${this.apiUrl}/revenue`);
  }

  getInvoices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices`);
  }
    
  getInvoicesById(schoolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices?schoolId=${schoolId}`);
  }


  async getSchoolName(schoolId: number): Promise<string> {
    try {
      const schoolsData = await this.getSchools().toPromise();
      const school = schoolsData.find((school: { id: number; }) => school.id === schoolId);
      return school ? school.name : 'Unknown';
    } catch (error) {
      console.error('Error fetching school data:', error);
      return 'Unknown';
    }
  }

}