import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerCatalogProductsOrderUnitsSelectComponent } from './frontend-feature-customer-catalog-products-order-units-select.component';

describe('FrontendFeatureCustomerCatalogProductsOrderUnitsSelectComponent', () => {
    let component: FrontendFeatureCustomerCatalogProductsOrderUnitsSelectComponent;
    let fixture: ComponentFixture<FrontendFeatureCustomerCatalogProductsOrderUnitsSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendFeatureCustomerCatalogProductsOrderUnitsSelectComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendFeatureCustomerCatalogProductsOrderUnitsSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
