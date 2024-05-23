import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getCollections():Observable<any>{
    return this.http.get(`${this.apiUrl}/collections`);
  }


  getSignups():Observable<any>{
    return this.http.get(`${this.apiUrl}/signups`);
  }


  getRevenue():Observable<any>{
    return this.http.get(`${this.apiUrl}/revenue`);
  }


  getInvoices():Observable<any>{
    return this.http.get(`${this.apiUrl}/invoices`);
  }

  getSchools():Observable<any>{
    return this.http.get(`${this.apiUrl}/schools`);
  }

}
