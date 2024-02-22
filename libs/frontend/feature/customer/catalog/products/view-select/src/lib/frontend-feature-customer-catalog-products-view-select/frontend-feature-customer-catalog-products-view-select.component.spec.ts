import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerCatalogProductsViewSelectComponent } from './frontend-feature-customer-catalog-products-view-select.component';

describe('FrontendFeatureCustomerCatalogProductsViewSelectComponent', () => {
  let component: FrontendFeatureCustomerCatalogProductsViewSelectComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerCatalogProductsViewSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerCatalogProductsViewSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerCatalogProductsViewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
