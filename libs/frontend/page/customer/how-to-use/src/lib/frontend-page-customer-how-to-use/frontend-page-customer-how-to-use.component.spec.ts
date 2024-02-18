import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerHowToUseComponent } from './frontend-page-customer-how-to-use.component';

describe('FrontendPageCustomerHowToUseComponent', () => {
    let component: FrontendPageCustomerHowToUseComponent;
    let fixture: ComponentFixture<FrontendPageCustomerHowToUseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendPageCustomerHowToUseComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendPageCustomerHowToUseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
