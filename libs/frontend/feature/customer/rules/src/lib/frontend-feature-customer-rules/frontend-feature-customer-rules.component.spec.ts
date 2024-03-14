import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerRulesComponent } from './frontend-feature-customer-rules.component';

describe('FrontendFeatureCustomerRulesComponent', () => {
  let component: FrontendFeatureCustomerRulesComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
