import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerRefundComponent } from './frontend-feature-customer-refund.component';

describe('FrontendFeatureCustomerRefundComponent', () => {
  let component: FrontendFeatureCustomerRefundComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerRefundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
