import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerSelectedCustomerPointComponent } from './frontend-page-customer-selected-customer-point.component';

describe('FrontendPageCustomerSelectedCustomerPointComponent', () => {
    let component: FrontendPageCustomerSelectedCustomerPointComponent;
    let fixture: ComponentFixture<FrontendPageCustomerSelectedCustomerPointComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendPageCustomerSelectedCustomerPointComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendPageCustomerSelectedCustomerPointComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
