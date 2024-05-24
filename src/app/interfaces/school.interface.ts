export interface ContactInformation {
  phone: string;
  email: string;
}

export interface School {
  id: number;
  name: string;
  type: string;
  county: string;
  registrationDate: string;
  contactInformation: ContactInformation;
  products: string[];
  balance: number;
}
