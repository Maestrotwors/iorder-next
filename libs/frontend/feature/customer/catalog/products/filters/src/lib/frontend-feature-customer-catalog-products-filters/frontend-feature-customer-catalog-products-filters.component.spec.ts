import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerCatalogProductsFiltersComponent } from './frontend-feature-customer-catalog-products-filters.component';

describe('FrontendFeatureCustomerCatalogProductsFiltersComponent', () => {
  let component: FrontendFeatureCustomerCatalogProductsFiltersComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerCatalogProductsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerCatalogProductsFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerCatalogProductsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
