import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageCustomerCatalogComponent } from './frontend-page-customer-catalog.component';

describe('FrontendPageCustomerCatalogComponent', () => {
  let component: FrontendPageCustomerCatalogComponent;
  let fixture: ComponentFixture<FrontendPageCustomerCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageCustomerCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageCustomerCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
