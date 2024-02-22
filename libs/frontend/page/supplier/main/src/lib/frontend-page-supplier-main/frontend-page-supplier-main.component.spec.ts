import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageSupplierMainComponent } from './frontend-page-supplier-main.component';

describe('FrontendPageSupplierMainComponent', () => {
  let component: FrontendPageSupplierMainComponent;
  let fixture: ComponentFixture<FrontendPageSupplierMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageSupplierMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageSupplierMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
