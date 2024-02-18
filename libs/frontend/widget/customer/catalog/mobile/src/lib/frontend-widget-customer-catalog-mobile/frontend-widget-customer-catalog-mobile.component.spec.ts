import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendWidgetCustomerCatalogMobileComponent } from './frontend-widget-customer-catalog-mobile.component';

describe('FrontendWidgetCustomerCatalogMobileComponent', () => {
    let component: FrontendWidgetCustomerCatalogMobileComponent;
    let fixture: ComponentFixture<FrontendWidgetCustomerCatalogMobileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendWidgetCustomerCatalogMobileComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendWidgetCustomerCatalogMobileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
