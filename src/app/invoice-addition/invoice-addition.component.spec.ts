import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAdditionComponent } from './invoice-addition.component';

describe('InvoiceAdditionComponent', () => {
  let component: InvoiceAdditionComponent;
  let fixture: ComponentFixture<InvoiceAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceAdditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
