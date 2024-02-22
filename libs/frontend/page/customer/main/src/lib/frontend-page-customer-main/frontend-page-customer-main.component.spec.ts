import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerMainComponent } from './frontend-page-customer-main.component';

describe('FrontendPageCustomerMainComponent', () => {
  let component: FrontendPageCustomerMainComponent;
  let fixture: ComponentFixture<FrontendPageCustomerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageCustomerMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageCustomerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
