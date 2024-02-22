import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerCatalogProductsCategoryInfoComponent } from './frontend-feature-customer-catalog-products-category-info.component';

describe('FrontendFeatureCustomerCatalogProductsCategoryInfoComponent', () => {
  let component: FrontendFeatureCustomerCatalogProductsCategoryInfoComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerCatalogProductsCategoryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerCatalogProductsCategoryInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerCatalogProductsCategoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
