import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerDeliveryComponent } from './frontend-feature-customer-delivery.component';

describe('FrontendFeatureCustomerDeliveryComponent', () => {
  let component: FrontendFeatureCustomerDeliveryComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerDeliveryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
