import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerCatalogSubSupplierSelectionComponent } from './frontend-feature-customer-catalog-sub-supplier-selection.component';

describe('FrontendFeatureCustomerCatalogSubSupplierSelectionComponent', () => {
  let component: FrontendFeatureCustomerCatalogSubSupplierSelectionComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerCatalogSubSupplierSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerCatalogSubSupplierSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerCatalogSubSupplierSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
