import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../interfaces/collection.interface';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.apiUrl}/collections`);
  }

  findById(id: string): Observable<Collection> {
    return this.http.get<Collection>(`${this.apiUrl}/collections/${id}`);
  }

  create(collection: Collection): Observable<Collection> {
    return this.http.post<Collection>(`${this.apiUrl}/collections`, collection);
  }

  update(id: string, collection: Collection): Observable<Collection> {
    return this.http.put<Collection>(`${this.apiUrl}/collections/${id}`, collection);
  }

  updateCollectionStatus(collectionId: string, status: 'Valid' | 'Bounced'): Observable<any> {
    return this.http.put(`${this.apiUrl}/collections/${collectionId}`, { status });
  }

  delete(id: string): Observable<Collection> {
    return this.http.delete<Collection>(`${this.apiUrl}/collections/${id}`);
  }

  
}


