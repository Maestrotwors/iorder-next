import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopSupplierSelectComponent } from './desktop-supplier-select.component';

describe('DesktopSupplierSelectComponent', () => {
  let component: DesktopSupplierSelectComponent;
  let fixture: ComponentFixture<DesktopSupplierSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopSupplierSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopSupplierSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
