import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerProfileSettingsComponent } from './frontend-page-customer-profile-settings.component';

describe('FrontendPageCustomerProfileSettingsComponent', () => {
  let component: FrontendPageCustomerProfileSettingsComponent;
  let fixture: ComponentFixture<FrontendPageCustomerProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageCustomerProfileSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageCustomerProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
