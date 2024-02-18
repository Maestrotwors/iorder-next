import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerSupplierSelectComponent } from './frontend-page-customer-supplier-select.component';

describe('FrontendPageCustomerSupplierSelectComponent', () => {
    let component: FrontendPageCustomerSupplierSelectComponent;
    let fixture: ComponentFixture<FrontendPageCustomerSupplierSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendPageCustomerSupplierSelectComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendPageCustomerSupplierSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
