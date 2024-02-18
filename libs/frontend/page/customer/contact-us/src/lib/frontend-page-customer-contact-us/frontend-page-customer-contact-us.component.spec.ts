import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerContactUsComponent } from './frontend-page-customer-contact-us.component';

describe('FrontendPageCustomerContactUsComponent', () => {
    let component: FrontendPageCustomerContactUsComponent;
    let fixture: ComponentFixture<FrontendPageCustomerContactUsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendPageCustomerContactUsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendPageCustomerContactUsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
