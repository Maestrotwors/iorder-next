import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerProfileOrdersComponent } from './frontend-feature-customer-profile-orders.component';

describe('FrontendFeatureCustomerProfileOrdersComponent', () => {
  let component: FrontendFeatureCustomerProfileOrdersComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerProfileOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerProfileOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerProfileOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
