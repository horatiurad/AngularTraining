import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrainingComponent } from './order-training.component';

describe('OrderTrainingComponent', () => {
  let component: OrderTrainingComponent;
  let fixture: ComponentFixture<OrderTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
