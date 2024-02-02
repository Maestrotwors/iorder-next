import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerDeliveryComponent } from './frontend-page-customer-delivery.component';

describe('FrontendPageCustomerDeliveryComponent', () => {
  let component: FrontendPageCustomerDeliveryComponent;
  let fixture: ComponentFixture<FrontendPageCustomerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageCustomerDeliveryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageCustomerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
