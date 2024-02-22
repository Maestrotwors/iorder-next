import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendWidgetCustomerCatalogProductsListComponent } from './frontend-widget-customer-catalog-products-list.component';

describe('FrontendWidgetCustomerCatalogProductsListComponent', () => {
  let component: FrontendWidgetCustomerCatalogProductsListComponent;
  let fixture: ComponentFixture<FrontendWidgetCustomerCatalogProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendWidgetCustomerCatalogProductsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendWidgetCustomerCatalogProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
