import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TashboardComponent } from './dashboard.component';

describe('TashboardComponent', () => {
  let component: TashboardComponent;
  let fixture: ComponentFixture<TashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TashboardComponent]
    });
    fixture = TestBed.createComponent(TashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
