import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerCatalogSupplierListComponent } from './frontend-feature-customer-catalog-supplier-list.component';

describe('FrontendFeatureCustomerCatalogSupplierListComponent', () => {
  let component: FrontendFeatureCustomerCatalogSupplierListComponent;
  let fixture: ComponentFixture<FrontendFeatureCustomerCatalogSupplierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureCustomerCatalogSupplierListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureCustomerCatalogSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
