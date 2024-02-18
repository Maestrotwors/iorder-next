import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerRulesComponent } from './frontend-page-customer-rules.component';

describe('FrontendPageCustomerRulesComponent', () => {
    let component: FrontendPageCustomerRulesComponent;
    let fixture: ComponentFixture<FrontendPageCustomerRulesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendPageCustomerRulesComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendPageCustomerRulesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
