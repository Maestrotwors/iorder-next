import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerProfileComponent } from './frontend-feature-customer-profile.component';

describe('FrontendFeatureCustomerProfileComponent', () => {
  let component: FrontendFeatureCustomerProfileComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
