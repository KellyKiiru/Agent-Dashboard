import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { Invoice } from '../interfaces/invoice.interface';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {
  invoices: Invoice[] = [];
  filteredInvoices: Invoice[] = [];
  filterStatus: string = 'all';

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices(): void {
    this.invoiceService.getAllInvoices().subscribe(
      (invoices: Invoice[]) => {
        this.invoices = invoices;
        this.applyFilter(); // Apply initial filter
      },
      (error) => {
        console.error('Error loading invoices:', error);
      }
    );
  }

  applyFilter(): void {
    if (this.filterStatus === 'all') {
      this.filteredInvoices = this.invoices;
    } else {
      this.filteredInvoices = this.invoices.filter(
        invoice => invoice.status.toLowerCase() === this.filterStatus.toLowerCase()
      );
    }
  }
}
