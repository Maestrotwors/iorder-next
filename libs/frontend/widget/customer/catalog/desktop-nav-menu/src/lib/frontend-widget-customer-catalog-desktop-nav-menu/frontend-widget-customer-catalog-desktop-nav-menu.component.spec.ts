import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendWidgetCustomerCatalogDesktopNavMenuComponent } from './frontend-widget-customer-catalog-desktop-nav-menu.component';

describe('FrontendWidgetCustomerCatalogDesktopNavMenuComponent', () => {
    let component: FrontendWidgetCustomerCatalogDesktopNavMenuComponent;
    let fixture: ComponentFixture<FrontendWidgetCustomerCatalogDesktopNavMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendWidgetCustomerCatalogDesktopNavMenuComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendWidgetCustomerCatalogDesktopNavMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
