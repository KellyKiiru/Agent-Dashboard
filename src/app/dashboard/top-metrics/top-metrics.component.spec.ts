import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMetricsComponent } from './top-metrics.component';

describe('TopMetricsComponent', () => {
  let component: TopMetricsComponent;
  let fixture: ComponentFixture<TopMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMetricsComponent]
    });
    fixture = TestBed.createComponent(TopMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
