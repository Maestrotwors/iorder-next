import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendSharedCustomerHeaderComponent } from './frontend-shared-customer-header.component';

describe('FrontendSharedCustomerHeaderComponent', () => {
    let component: FrontendSharedCustomerHeaderComponent;
    let fixture: ComponentFixture<FrontendSharedCustomerHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendSharedCustomerHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendSharedCustomerHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
