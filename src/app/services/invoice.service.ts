import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../interfaces/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/invoices';

  constructor(private http: HttpClient) { }

  getAllInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl);
  }

  getInvoicesById(schoolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices?schoolId=${schoolId}`);
  }

  createInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(`${this.apiUrl}/invoices`, invoice, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${this.apiUrl}/invoices/${invoice.id}`, invoice, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteInvoice(invoiceId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/invoices/${invoiceId}`);
  }

  createCollection(collectionData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/collections`, collectionData);
  }
  
  updateCollection(collectionId: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/collections/${collectionId}`, updatedData);
  }
  
  deleteCollection(collectionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/collections/${collectionId}`);
  }
}
