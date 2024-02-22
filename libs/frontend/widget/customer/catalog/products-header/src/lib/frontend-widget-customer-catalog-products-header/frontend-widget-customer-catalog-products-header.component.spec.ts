import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendWidgetCustomerCatalogProductsHeaderComponent } from './frontend-widget-customer-catalog-products-header.component';

describe('FrontendWidgetCustomerCatalogProductsHeaderComponent', () => {
    let component: FrontendWidgetCustomerCatalogProductsHeaderComponent;
    let fixture: ComponentFixture<FrontendWidgetCustomerCatalogProductsHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendWidgetCustomerCatalogProductsHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendWidgetCustomerCatalogProductsHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
