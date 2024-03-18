import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerProfileTemplatesComponent } from './frontend-page-customer-profile-templates.component';

describe('FrontendPageCustomerProfileTemplatesComponent', () => {
  let component: FrontendPageCustomerProfileTemplatesComponent;
  let fixture: ComponentFixture<FrontendPageCustomerProfileTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageCustomerProfileTemplatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageCustomerProfileTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
