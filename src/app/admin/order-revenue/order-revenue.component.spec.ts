import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRevenueComponent } from './order-revenue.component';

describe('OrderRevenueComponent', () => {
  let component: OrderRevenueComponent;
  let fixture: ComponentFixture<OrderRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderRevenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
