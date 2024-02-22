import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerProductComponent } from './frontend-page-customer-product.component';

describe('FrontendPageCustomerProductComponent', () => {
  let component: FrontendPageCustomerProductComponent;
  let fixture: ComponentFixture<FrontendPageCustomerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageCustomerProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageCustomerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
