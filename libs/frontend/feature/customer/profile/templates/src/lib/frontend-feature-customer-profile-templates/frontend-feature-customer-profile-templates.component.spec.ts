import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerProfileTemplatesComponent } from './frontend-feature-customer-profile-templates.component';

describe('FrontendFeatureCustomerProfileTemplatesComponent', () => {
  let component: FrontendFeatureCustomerProfileTemplatesComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerProfileTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerProfileTemplatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerProfileTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
