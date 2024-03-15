import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileSupplierSelectComponent } from './mobile-supplier-select.component';

describe('MobileSupplierSelectComponent', () => {
  let component: MobileSupplierSelectComponent;
  let fixture: ComponentFixture<MobileSupplierSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSupplierSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileSupplierSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
