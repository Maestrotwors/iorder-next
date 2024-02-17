import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerOrderComponent } from './frontend-page-customer-order.component';

describe('FrontendPageCustomerOrderComponent', () => {
    let component: FrontendPageCustomerOrderComponent;
    let fixture: ComponentFixture<FrontendPageCustomerOrderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendPageCustomerOrderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendPageCustomerOrderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
