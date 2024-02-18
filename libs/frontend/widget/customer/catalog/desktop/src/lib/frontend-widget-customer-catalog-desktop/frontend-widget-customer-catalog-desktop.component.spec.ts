import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendWidgetCustomerCatalogDesktopComponent } from './frontend-widget-customer-catalog-desktop.component';

describe('FrontendWidgetCustomerCatalogDesktopComponent', () => {
    let component: FrontendWidgetCustomerCatalogDesktopComponent;
    let fixture: ComponentFixture<FrontendWidgetCustomerCatalogDesktopComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendWidgetCustomerCatalogDesktopComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendWidgetCustomerCatalogDesktopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
