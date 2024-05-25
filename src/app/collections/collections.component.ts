import { Component, OnInit } from '@angular/core';
import { Collection } from '../interfaces/collection.interface';
import { CollectionsService } from '../services/collections.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collections: Collection[] = [];

  constructor(private collectionsService: CollectionsService) { }

  ngOnInit(): void {
    this.loadCollections();
  }

  loadCollections(): void {
    this.collectionsService.findAll().subscribe(collections => {
      this.collections = collections;
    });
  }

  updateCollectionStatus(collectionId: number, status: 'Valid' | 'Bounced'): void {
    this.collectionsService.updateCollectionStatus(collectionId.toString(), status).subscribe(() => {
      // Update the collections list after successful update
      this.loadCollections();
    }, error => {
      console.error('Error updating collection status:', error);
      // Handle error appropriately
    });
  }
}
