import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerCatalogRecommendedListComponent } from './frontend-feature-customer-catalog-recommended-list.component';

describe('FrontendFeatureCustomerCatalogRecommendedListComponent', () => {
  let component: FrontendFeatureCustomerCatalogRecommendedListComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerCatalogRecommendedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerCatalogRecommendedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerCatalogRecommendedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
