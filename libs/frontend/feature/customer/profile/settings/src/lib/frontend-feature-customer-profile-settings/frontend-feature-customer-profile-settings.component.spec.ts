import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerProfileSettingsComponent } from './frontend-feature-customer-profile-settings.component';

describe('FrontendFeatureCustomerProfileSettingsComponent', () => {
  let component: FrontendFeatureCustomerProfileSettingsComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerProfileSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
