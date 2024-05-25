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
  isModalOpen: boolean = false;
  isEditing: boolean = false;
  currentInvoice: Invoice = this.createEmptyInvoice();

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

  openInvoiceForm(invoice?: Invoice): void {
    this.isEditing = !!invoice;
    this.currentInvoice = invoice ? { ...invoice } : this.createEmptyInvoice();
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  
  editInvoice(invoice: Invoice): void {
    this.openInvoiceForm(invoice);
  }

  saveInvoice(): void {
    if (this.isEditing) {
      this.invoiceService.updateInvoice(this.currentInvoice).subscribe(() => {
        this.loadInvoices();
        this.closeModal();
      }, error => {
        console.error('Error updating invoice:', error);
      });
    } else {
      this.invoiceService.createInvoice(this.currentInvoice).subscribe(() => {
        this.loadInvoices();
        this.closeModal();
      }, error => {
        console.error('Error creating invoice:', error);
      });
    }
  }

  deleteInvoice(invoiceId: number): void {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.invoiceService.deleteInvoice(invoiceId).subscribe(() => {
        this.loadInvoices();
      });
    }
  }

  calculateDaysUntilDue(dueDate: string): number {
    const due = new Date(dueDate).getTime();
    const now = new Date().getTime();
    return Math.ceil((due - now) / (1000 * 60 * 60 * 24));
  }


  updateInvoiceStatus(invoice: any) {
    const totalAmount = invoice.amount;
    const paidAmount = invoice.paidAmount + invoice.collections.reduce((total: any, collection: {amount: any;}) => total + collection.amount, 0);
  
    if (paidAmount === totalAmount) {
      invoice.status = 'Completed';
    } else if (paidAmount > 0 && paidAmount < totalAmount) {
      invoice.status = 'Partially Paid';
    } else {
      invoice.status = 'Pending';
    }
  }

  addCollectionToInvoice(invoiceId: number, collectionData: any) {
    const invoiceIndex = this.invoices.findIndex(invoice => invoice.id === invoiceId);
    if (invoiceIndex !== -1) {
      const invoice = this.invoices[invoiceIndex];
      invoice.collections.push(collectionData);
  
      // Update invoice balance
      invoice.balance -= collectionData.amount;
  
      // Update invoice status based on collection result
      this.updateInvoiceStatus(invoice);
    }
  }

  private createEmptyInvoice(): Invoice {
    return {
      id: 0,
      schoolId: 0,
      invoiceItem: '',
      creationDate: '',
      dueDate: '',
      amount: 0,
      paidAmount: 0,
      balance: 0,
      status: 'Pending', 
      collections: [] 
    };
  } 
  
}
