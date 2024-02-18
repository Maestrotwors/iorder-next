import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerRefundComponent } from './frontend-page-customer-refund.component';

describe('FrontendPageCustomerRefundComponent', () => {
    let component: FrontendPageCustomerRefundComponent;
    let fixture: ComponentFixture<FrontendPageCustomerRefundComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendPageCustomerRefundComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendPageCustomerRefundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
