export interface Invoice {
    collections: any;
    id: number;
    schoolId: number;
    invoiceItem: string;
    creationDate: string;
    dueDate: string;
    amount: number;
    paidAmount: number;
    balance: number;
    status: string;
  }
  