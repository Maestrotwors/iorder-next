import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerProfileComponent } from './frontend-page-customer-profile.component';

describe('FrontendPageCustomerProfileComponent', () => {
    let component: FrontendPageCustomerProfileComponent;
    let fixture: ComponentFixture<FrontendPageCustomerProfileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendPageCustomerProfileComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendPageCustomerProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
