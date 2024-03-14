import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerHowToUseComponent } from './frontend-feature-customer-how-to-use.component';

describe('FrontendFeatureCustomerHowToUseComponent', () => {
  let component: FrontendFeatureCustomerHowToUseComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerHowToUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerHowToUseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerHowToUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
