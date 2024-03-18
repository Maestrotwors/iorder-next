import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerProfileOrdersComponent } from './frontend-page-customer-profile-orders.component';

describe('FrontendPageCustomerProfileOrdersComponent', () => {
  let component: FrontendPageCustomerProfileOrdersComponent;
  let fixture: ComponentFixture<FrontendPageCustomerProfileOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageCustomerProfileOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageCustomerProfileOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
