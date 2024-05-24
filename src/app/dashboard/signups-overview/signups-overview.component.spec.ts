import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsOverviewComponent } from './signups-overview.component';

describe('SignupsOverviewComponent', () => {
  let component: SignupsOverviewComponent;
  let fixture: ComponentFixture<SignupsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupsOverviewComponent]
    });
    fixture = TestBed.createComponent(SignupsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
